import { promises as fs } from 'fs'
import path from 'path'

export interface Application {
  id: string
  type: 'business_loan' | 'contact' | 'general_inquiry'
  submittedAt: string
  data: Record<string, any>
  status: 'new' | 'reviewed' | 'processed'
  emailSent: boolean
}

const STORAGE_DIR = path.join(process.cwd(), 'data')
const APPLICATIONS_FILE = path.join(STORAGE_DIR, 'applications.json')

// Ensure storage directory exists
async function ensureStorageDir() {
  try {
    await fs.access(STORAGE_DIR)
  } catch {
    await fs.mkdir(STORAGE_DIR, { recursive: true })
  }
}

// Read all applications from storage
export async function getApplications(): Promise<Application[]> {
  try {
    await ensureStorageDir()
    const data = await fs.readFile(APPLICATIONS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, return empty array
    return []
  }
}

// Save application to storage
export async function saveApplication(application: Omit<Application, 'id' | 'submittedAt' | 'status' | 'emailSent'>): Promise<Application> {
  await ensureStorageDir()
  
  const applications = await getApplications()
  
  const newApplication: Application = {
    ...application,
    id: `app_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    submittedAt: new Date().toISOString(),
    status: 'new',
    emailSent: false
  }
  
  applications.push(newApplication)
  
  await fs.writeFile(APPLICATIONS_FILE, JSON.stringify(applications, null, 2))
  
  return newApplication
}

// Update application status
export async function updateApplicationStatus(id: string, status: Application['status'], emailSent?: boolean) {
  const applications = await getApplications()
  const index = applications.findIndex(app => app.id === id)
  
  if (index !== -1) {
    applications[index].status = status
    if (emailSent !== undefined) {
      applications[index].emailSent = emailSent
    }
    
    await fs.writeFile(APPLICATIONS_FILE, JSON.stringify(applications, null, 2))
  }
}