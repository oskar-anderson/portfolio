import Footer from "./Footer";
import Header from "./header";
import 'bootstrap/dist/css/bootstrap.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html style={{ height: "100%" }} lang="en" data-bs-theme="light" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Oskar's Portfolio</title>
        { 
        // TODO the favicon get overridden by NextJS favicon.
        }
        <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />
        <link rel="stylesheet" href="/static/css/site.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/intellij-light.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Header />
        
        <main role="main" className="pb-3">  
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
