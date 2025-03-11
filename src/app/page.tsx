import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const services = [
    {
      title: '清运服务',
      description: '专业的垃圾清运、建筑垃圾处理、工业废料处理等服务',
      icon: '🚛',
      link: '/services#qingyun'
    },
    {
      title: '保洁服务',
      description: '室内外保洁、玻璃清洗、地板打蜡等全方位清洁服务',
      icon: '🧹',
      link: '/services#baojie'
    },
    {
      title: '收纳服务',
      description: '专业收纳整理、空间规划、物品分类等服务',
      icon: '📦',
      link: '/services#shouna'
    },
    {
      title: '消杀服务',
      description: '专业的消毒杀菌、除螨、空气净化等服务',
      icon: '🧪',
      link: '/services#xiaosha'
    },
    {
      title: '灭鼠服务',
      description: '专业的灭鼠、除虫、防鼠防虫等服务',
      icon: '🐭',
      link: '/services#mieshu'
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="清洁服务"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-6">
            专业的清洁服务提供商
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            提供清运、保洁、收纳、消杀、灭鼠等全方位服务，让您的环境更加整洁卫生
          </p>
          <Link href="/contact" className="btn-primary">
            立即预约
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">为什么选择我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">专业团队</h3>
              <p className="text-gray-600">经验丰富的专业团队，提供优质服务</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">快速响应</h3>
              <p className="text-gray-600">24小时响应，及时解决您的需求</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">价格合理</h3>
              <p className="text-gray-600">透明定价，性价比高</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">需要我们的服务？</h2>
          <p className="text-xl mb-8">立即联系我们，获取专业服务</p>
          <Link href="/contact" className="btn-secondary">
            联系我们
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
} 