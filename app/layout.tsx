import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Global Strategic Financial Solutions - Premium Investment & Loan Services",
  description:
    "Ultra-premium financial services platform offering sophisticated investment opportunities, business loans, and wealth management solutions for high-net-worth individuals and institutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              "use strict";
              !function() {
                var t = window.driftt = window.drift = window.driftt || [];
                if (!t.init) {
                  if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                  t.invoked = !0;
                  t.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"];
                  t.factory = function(e) {
                    return function() {
                      var n = Array.prototype.slice.call(arguments);
                      return n.unshift(e), t.push(n), t;
                    };
                  };
                  t.methods.forEach(function(e) {
                    t[e] = t.factory(e);
                  });
                  t.load = function(t) {
                    var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                    o.type = "text/javascript";
                    o.async = !0;
                    o.crossorigin = "anonymous";
                    o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                    var i = document.getElementsByTagName("script")[0];
                    i.parentNode.insertBefore(o, i);
                  };
                }
              }();
              drift.SNIPPET_VERSION = '0.3.1';
              drift.load('nec9sduygwzy');
              
              // Position Drift widget at bottom left
              drift.on('ready', function(api) {
                setTimeout(function() {
                  var widget = document.querySelector('#drift-widget-container') || 
                              document.querySelector('.drift-widget') ||
                              document.querySelector('[data-drift-chat-widget]');
                  if (widget) {
                    widget.style.left = '20px';
                    widget.style.right = 'auto';
                    widget.style.bottom = '20px';
                  }
                }, 1000);
              });

              // WhatsApp Widget
              document.addEventListener('DOMContentLoaded', function() {
                // Create WhatsApp toggle button
                const whatsappToggle = document.createElement('div');
                whatsappToggle.id = 'whatsapp-toggle';
                whatsappToggle.innerHTML = \`
                  <div style="
                    position: fixed;
                    bottom: 100px;
                    right: 20px;
                    z-index: 9999;
                    cursor: pointer;
                    background: #25D366;
                    border-radius: 50%;
                    width: 70px;
                    height: 70px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
                    transition: all 0.3s ease;
                    animation: pulse 2s infinite;
                  " onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 8px 25px rgba(37, 211, 102, 0.6)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 6px 20px rgba(37, 211, 102, 0.4)'">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div id="whatsapp-options" style="
                    position: absolute;
                    bottom: 80px;
                    right: 0;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 12px 32px rgba(0,0,0,0.2);
                    padding: 20px;
                    min-width: 300px;
                    display: none;
                    transform: translateY(10px);
                    opacity: 0;
                    transition: all 0.3s ease;
                    border: 1px solid #e5e5e5;
                  ">
                    <div style="margin-bottom: 16px; font-weight: 700; color: #333; font-size: 16px; text-align: center;">
                      💬 Choose WhatsApp Support
                    </div>
                    <a href="https://wa.me/447700144320" target="_blank" style="
                      display: flex;
                      align-items: center;
                      padding: 16px;
                      border-radius: 12px;
                      text-decoration: none;
                      color: #333;
                      margin-bottom: 12px;
                      transition: all 0.2s ease;
                      border: 2px solid #e5e5e5;
                      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                    " onmouseover="this.style.backgroundColor='#25D366'; this.style.color='white'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(37, 211, 102, 0.3)'" onmouseout="this.style.backgroundColor=''; this.style.color='#333'; this.style.transform='translateY(0)'; this.style.boxShadow=''">
                      <div style="
                        width: 40px;
                        height: 24px;
                        background: linear-gradient(to bottom, #012169 0%, #012169 33%, white 33%, white 66%, #C8102E 66%);
                        border-radius: 4px;
                        margin-right: 16px;
                        flex-shrink: 0;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                      "></div>
                      <div>
                        <div style="font-weight: 700; font-size: 15px; margin-bottom: 2px;">🇬🇧 UK Support</div>
                        <div style="font-size: 13px; color: #666;">+44 7700 144320</div>
                      </div>
                    </a>
                    <a href="https://wa.me/19796188876" target="_blank" style="
                      display: flex;
                      align-items: center;
                      padding: 16px;
                      border-radius: 12px;
                      text-decoration: none;
                      color: #333;
                      transition: all 0.2s ease;
                      border: 2px solid #e5e5e5;
                      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                    " onmouseover="this.style.backgroundColor='#25D366'; this.style.color='white'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(37, 211, 102, 0.3)'" onmouseout="this.style.backgroundColor=''; this.style.color='#333'; this.style.transform='translateY(0)'; this.style.boxShadow=''">
                      <div style="
                        width: 40px;
                        height: 24px;
                        background: linear-gradient(to right, #B22234 0%, #B22234 7.69%, white 7.69%, white 15.38%, #B22234 15.38%, #B22234 23.08%, white 23.08%, white 30.77%, #B22234 30.77%, #B22234 38.46%, white 38.46%, white 46.15%, #B22234 46.15%, #B22234 53.85%, white 53.85%, white 61.54%, #B22234 61.54%, #B22234 69.23%, white 69.23%, white 76.92%, #B22234 76.92%, #B22234 84.62%, white 84.62%, white 92.31%, #B22234 92.31%);
                        position: relative;
                        border-radius: 4px;
                        margin-right: 16px;
                        flex-shrink: 0;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                      ">
                        <div style="
                          position: absolute;
                          top: 0;
                          left: 0;
                          width: 40%;
                          height: 53.85%;
                          background: #3C3B6E;
                        "></div>
                      </div>
                      <div>
                        <div style="font-weight: 700; font-size: 15px; margin-bottom: 2px;">🇺🇸 US Support</div>
                        <div style="font-size: 13px; color: #666;">+1 979 618 8876</div>
                      </div>
                    </a>
                  </div>
                \`;
                
                document.body.appendChild(whatsappToggle);
                
                // Toggle functionality
                const toggleBtn = whatsappToggle.querySelector('div');
                const optionsPanel = document.getElementById('whatsapp-options');
                let isOpen = false;
                
                toggleBtn.addEventListener('click', function() {
                  isOpen = !isOpen;
                  if (isOpen) {
                    optionsPanel.style.display = 'block';
                    setTimeout(() => {
                      optionsPanel.style.transform = 'translateY(0)';
                      optionsPanel.style.opacity = '1';
                    }, 10);
                  } else {
                    optionsPanel.style.transform = 'translateY(10px)';
                    optionsPanel.style.opacity = '0';
                    setTimeout(() => {
                      optionsPanel.style.display = 'none';
                    }, 300);
                  }
                });
                
                // Close when clicking outside
                document.addEventListener('click', function(e) {
                  if (!whatsappToggle.contains(e.target) && isOpen) {
                    isOpen = false;
                    optionsPanel.style.transform = 'translateY(10px)';
                    optionsPanel.style.opacity = '0';
                    setTimeout(() => {
                      optionsPanel.style.display = 'none';
                    }, 300);
                  }
                });
              });
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Enhanced CSS for Drift positioning at bottom left */
              #drift-widget-container,
              .drift-widget,
              [data-drift-chat-widget] {
                left: 20px !important;
                right: auto !important;
                bottom: 20px !important;
              }
              
              .drift-frame-controller {
                left: 20px !important;
                right: auto !important;
              }
              
              .drift-frame-chat {
                left: 20px !important;
                right: auto !important;
              }
              
              /* Adding pulse animation for WhatsApp button */
              @keyframes pulse {
                0% {
                  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
                }
                50% {
                  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.7);
                }
                100% {
                  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
                }
              }
            `,
          }}
        />
      </head>
      <body className={`font-sans ${montserrat.variable} ${openSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
