import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Amazing
              <span className="block text-yellow-300">Products</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-lg">
              Shop the latest trends and premium quality products at unbeatable prices. 
              Your satisfaction is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Shop Now
              </Link>
              <Link 
                href="/categories" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors text-center"
              >
                Browse Categories
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Shopping Experience"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-primary-600">50%</div>
              <div className="text-sm">Off Today</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-green-600">Free</div>
              <div className="text-sm">Shipping</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}