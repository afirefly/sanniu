"use client"

import Image from 'next/image'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              <Image 
                src="/images/logo.png" 
                alt="logo" 
                width={80}
                height={80}
                priority
                className="rounded-full object-cover border-2 border-primary"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { href: '/', label: '首页' },
              { href: '/services', label: '服务项目' },
              { href: '/about', label: '关于我们' },
              { href: '/contact', label: '联系我们' },
            ].map(({ href, label }) => (
              <Link 
                key={href}
                href={href} 
                className={`relative px-2 py-1 text-gray-600 hover:text-primary transition-colors duration-200 ease-in-out
                  ${pathname === href ? 'text-primary font-medium' : ''}
                  group
                `}
              >
                {label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ease-out
                  ${pathname === href ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:18601783420" className="flex items-center text-gray-600 hover:text-primary">
              <PhoneIcon className="h-5 w-5 mr-1" />
              <span>18601783420</span>
            </a>
            <a href="mailto:18601783420@163.com" className="flex items-center text-gray-600 hover:text-primary">
              <EnvelopeIcon className="h-5 w-5 mr-1" />
              <span>18601783420@163.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}