import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">清洁服务</h3>
            <p className="text-gray-400">
              专业的清运、保洁、收纳、消杀、灭鼠服务提供商
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">服务项目</h4>
            <ul className="space-y-2">
              <li><Link href="/services#qingyun" className="text-gray-400 hover:text-white">清运服务</Link></li>
              <li><Link href="/services#baojie" className="text-gray-400 hover:text-white">保洁服务</Link></li>
              <li><Link href="/services#shouna" className="text-gray-400 hover:text-white">收纳服务</Link></li>
              <li><Link href="/services#xiaosha" className="text-gray-400 hover:text-white">消杀服务</Link></li>
              <li><Link href="/services#mieshu" className="text-gray-400 hover:text-white">灭鼠服务</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-gray-400">
              <li>电话：400-123-4567</li>
              <li>邮箱：contact@example.com</li>
              <li>地址：北京市朝阳区xxx街道xxx号</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">关注我们</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">微信</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5,13.5A1.5,1.5 0 0,1 7,12A1.5,1.5 0 0,1 8.5,10.5A1.5,1.5 0 0,1 10,12A1.5,1.5 0 0,1 8.5,13.5M15.5,13.5A1.5,1.5 0 0,1 14,12A1.5,1.5 0 0,1 15.5,10.5A1.5,1.5 0 0,1 17,12A1.5,1.5 0 0,1 15.5,13.5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 清洁服务. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 