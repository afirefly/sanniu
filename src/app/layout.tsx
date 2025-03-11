import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: '专业清洁服务 | 清运、保洁、收纳、消杀、灭鼠',
  description: '提供专业的清运、保洁、收纳、消杀、灭鼠服务，让您的环境更加整洁卫生。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${inter.variable} font-sans`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 