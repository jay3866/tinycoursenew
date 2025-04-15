import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tiny Visual Courses",
  description: "Create stunning visual courses that convert! Learn how to transform your expertise into engaging visual frameworks that attract buyers 24/7. Join 500+ successful creators who've mastered the art of visual selling without tech overwhelm.",
  icons: {
    icon: "/TVO-icon-5498596.png",
    apple: "/TVO-icon-5498596.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
