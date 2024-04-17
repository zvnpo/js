import './assets/style.css'

export const metadata = {
  title: 'title',
  lang: 'ko',
};


export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}