export const metadata = {
  title: 'OSINT Command Terminal',
  description: 'Tactical intelligence panel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0d0d0d' }}>
        {children}
      </body>
    </html>
  )
}
