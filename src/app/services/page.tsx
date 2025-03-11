import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Services() {
  const services = [
    {
      id: 'qingyun',
      title: '清运服务',
      description: '专业的垃圾清运、建筑垃圾处理、工业废料处理等服务',
      features: [
        '生活垃圾清运',
        '建筑垃圾处理',
        '工业废料处理',
        '大件物品清运',
        '装修垃圾清运'
      ],
      icon: '🚛'
    },
    {
      id: 'baojie',
      title: '保洁服务',
      description: '室内外保洁、玻璃清洗、地板打蜡等全方位清洁服务',
      features: [
        '室内保洁',
        '室外保洁',
        '玻璃清洗',
        '地板打蜡',
        '地毯清洗'
      ],
      icon: '🧹'
    },
    {
      id: 'shouna',
      title: '收纳服务',
      description: '专业收纳整理、空间规划、物品分类等服务',
      features: [
        '空间规划',
        '物品分类',
        '收纳整理',
        '衣柜整理',
        '厨房整理'
      ],
      icon: '📦'
    },
    {
      id: 'xiaosha',
      title: '消杀服务',
      description: '专业的消毒杀菌、除螨、空气净化等服务',
      features: [
        '室内消毒',
        '除螨服务',
        '空气净化',
        '卫生间消毒',
        '厨房消毒'
      ],
      icon: '🧪'
    },
    {
      id: 'mieshu',
      title: '灭鼠服务',
      description: '专业的灭鼠、除虫、防鼠防虫等服务',
      features: [
        '灭鼠服务',
        '除虫服务',
        '防鼠防虫',
        '白蚁防治',
        '蟑螂防治'
      ],
      icon: '🐭'
    }
  ]

  return (
    <>
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-12">我们的服务</h1>
          
          <div className="space-y-20">
            {services.map((service) => (
              <section key={service.id} id={service.id} className="scroll-mt-20">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-gray-700"
                      >
                        <svg
                          className="h-5 w-5 text-primary mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
} 