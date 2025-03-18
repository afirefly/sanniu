import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-12">关于我们</h1>
          
          {/* Company Introduction */}
          <section className="mb-20">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">公司简介</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                我们是一家专业的清洁服务提供商，致力于为客户提供高品质的清运、保洁、收纳、消杀、灭鼠等服务。
                自成立以来，我们始终坚持"专业、高效、诚信、创新"的服务理念，不断追求卓越，为客户创造更美好的生活环境。
              </p>
            </div>
          </section>
          
          {/* Our Values */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">我们的价值观</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-4">专业</h3>
                <p className="text-gray-600">
                  拥有专业的服务团队，提供标准化的服务流程
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-4">高效</h3>
                <p className="text-gray-600">
                  快速响应客户需求，提供及时的服务支持
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-4">诚信</h3>
                <p className="text-gray-600">
                  诚信经营，以客户满意为服务宗旨
                </p>
              </div>
            </div>
          </section>
          
          {/* Our Team */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">我们的团队</h2>
            <Image
              src="/images/finish.jpg"
              alt="团队"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="w-full h-auto object-cover border-2 border-primary"
            />
            
          </section>
          
          {/* Company History */}
          <section>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">发展历程</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-primary font-bold">2020年</div>
                  <div>
                    <h3 className="font-semibold mb-2">公司成立</h3>
                    <p className="text-gray-600">
                      公司正式成立，开始提供搬运、清洁服务
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-primary font-bold">2022年</div>
                  <div>
                    <h3 className="font-semibold mb-2">业务扩展</h3>
                    <p className="text-gray-600">
                      新增消杀、灭鼠、水冷机组保养等专业服务，服务范围不断扩大
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-primary font-bold">2023年</div>
                  <div>
                    <h3 className="font-semibold mb-2">服务升级</h3>
                    <p className="text-gray-600">
                      引入专业设备，提升服务质量，获得客户好评
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-primary font-bold">2024年</div>
                  <div>
                    <h3 className="font-semibold mb-2">品牌建设</h3>
                    <p className="text-gray-600">
                      建立品牌形象，成为行业知名服务商
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
} 