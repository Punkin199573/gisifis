# Global Strategic Financial Solutions (GSFS) Platform

## Project Overview
A sophisticated financial services platform built with Next.js 15, React 19, and TypeScript. This application provides premium investment opportunities, business loans, and wealth management solutions for high-net-worth individuals and institutions.

## Technical Stack
- **Frontend Framework**: Next.js 15.2.4
- **UI Library**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: Radix UI components with custom styling
- **Fonts**: Montserrat and Open Sans from Google Fonts
- **Build Tool**: Next.js built-in bundler
- **Package Manager**: npm

## Project Structure
- `/app` - Next.js 13+ app router pages and layouts
- `/components` - Reusable React components including UI primitives
- `/lib` - Utility functions and helpers
- `/public` - Static assets including professional staff images
- `/styles` - Global CSS styles

## Development Setup (Replit)
- **Development Server**: Runs on port 5000 with hostname 0.0.0.0
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Lint**: `npm run lint`

## Recent Changes
- **2025-09-25**: Initial Replit environment setup
  - Configured Next.js for Replit proxy compatibility
  - Added allowedDevOrigins configuration for cross-origin requests
  - Set up development workflow on port 5000
  - Configured deployment settings for autoscale target

## Deployment Configuration
- **Target**: Autoscale (stateless web application)
- **Build**: npm run build
- **Run**: npm start
- **Environment**: Production optimized with image unoptimization for deployment

## Features
- Responsive design with mobile-first approach
- Professional financial services landing page
- Business loan application system
- Wealth management portfolio showcase
- Project funding solutions
- Client testimonials and success stories
- Contact forms and WhatsApp integration
- Drift chat widget integration

## Architecture Notes
- Uses Next.js App Router for modern React development
- Tailwind CSS for utility-first styling
- Custom UI components built on Radix UI primitives
- TypeScript for type safety
- Image optimization disabled for deployment compatibility