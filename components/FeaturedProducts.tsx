'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import toast from 'react-hot-toast'

const featuredProducts = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 99.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.5,
    reviews: 128,
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Smart Watch Series 8',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.8,
    reviews: 89,
    badge: 'New'
  },
  {
    id: '3',
    name: 'Premium Coffee Maker',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.6,
    reviews: 156,
    badge: 'Sale'
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    price: 249.99,
    originalPrice: 349.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.4,
    reviews: 203,
    badge: 'Popular'
  }
]

export default function FeaturedProducts() {
  const { addItem } = useCartStore()

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    toast.success('Added to cart!')
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Products
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {product.badge && (
                <span className="absolute top-3 left-3 bg-primary-600 text-white px-2 py-1 text-xs font-semibold rounded">
                  {product.badge}
                </span>
              )}
            </div>
            
            <div className="p-6">
              <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
              
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/products"
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
        >
          View All Products
        </Link>
      </div>
    </section>
  )
}