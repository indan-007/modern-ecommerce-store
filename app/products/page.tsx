'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ShoppingCart, Filter, Grid, List } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import toast from 'react-hot-toast'

const products = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 99.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.5,
    reviews: 128,
    category: 'Electronics',
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
    category: 'Electronics',
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
    category: 'Home & Garden',
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
    category: 'Home & Garden',
    badge: 'Popular'
  },
  {
    id: '5',
    name: 'Running Shoes',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.7,
    reviews: 95,
    category: 'Sports',
    badge: 'Sale'
  },
  {
    id: '6',
    name: 'Leather Backpack',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.3,
    reviews: 67,
    category: 'Fashion',
    badge: 'Popular'
  }
]

const categories = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports']
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Newest']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const { addItem } = useCartStore()

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    toast.success('Added to cart!')
  }

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">All Products</h1>
        <p className="text-gray-600">Discover our complete collection of premium products</p>
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort and View Controls */}
        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className={`grid gap-8 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={`group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
            viewMode === 'list' ? 'flex' : ''
          }`}>
            <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'h-48' : 'h-64'}`}>
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
            
            <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
              <div>
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
                
                <div className="flex items-center space-x-2 mb-4">
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

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}