import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              清洁服务
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary">
              首页
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-primary">
              服务项目
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">
              关于我们
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">
              联系我们
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:400-123-4567" className="flex items-center text-gray-600 hover:text-primary">
              <PhoneIcon className="h-5 w-5 mr-1" />
              <span>400-123-4567</span>
            </a>
            <a href="mailto:contact@example.com" className="flex items-center text-gray-600 hover:text-primary">
              <EnvelopeIcon className="h-5 w-5 mr-1" />
              <span>contact@example.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
} 