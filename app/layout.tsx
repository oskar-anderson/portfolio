"use client"
import Footer from "./Footer";
import Header from "./header";
import 'bootstrap/dist/css/bootstrap.css'
import { usePathname } from 'next/navigation';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isResumePage, setIsResumePage] = useState(false);
  useEffect(() => {
    let route = window.location.href.replace(window.location.origin, '');
    setIsResumePage(route === "/resume");
  }, []) 
  
  let body = (
    <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      
      <main role="main" className="pb-3">  
        {children}
      </main>

      <Footer style={{ marginTop: "auto" }} />
    </body>
  );
  if (isResumePage) {
    body = (
      <body style={{ lineHeight: "normal" }} className="A4">
        <div id="root">
          <div style={{ display: 'grid' }}>
            {children}
          </div>
        </div>
      </body>
    )
  }

  return (
    <html lang="en" data-bs-theme="light" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Oskar's Portfolio</title>
        { 
        // TODO the favicon get overridden by NextJS favicon.
        }
        <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />
        {isResumePage ? 
          <link rel="stylesheet" href="/static/css/resume.css" />:
          <link rel="stylesheet" href="/static/css/site.css" />
        }
        

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/intellij-light.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
        
        <link href="https://fonts.googleapis.com/css?family=IM+Fell+English+SC&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap" rel="stylesheet" /> 
      </head>

      {body}
    </html>
  )
}
