'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, Package, Mail } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

export default function CheckoutSuccessPage() {
  const { clearCart } = useCartStore()

  useEffect(() => {
    // Clear cart after successful payment
    clearCart()
  }, [clearCart])

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Confirmed!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your purchase. Your order has been successfully processed.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Mail className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Confirmation Email</h3>
              <p className="text-sm text-gray-600">
                A confirmation email has been sent to your email address
              </p>
            </div>
            
            <div className="text-center">
              <Package className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Processing</h3>
              <p className="text-sm text-gray-600">
                Your order is being prepared for shipment
              </p>
            </div>
            
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Tracking</h3>
              <p className="text-sm text-gray-600">
                You'll receive tracking information once shipped
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/products"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Continue Shopping
          </Link>
          
          <div>
            <Link
              href="/account/orders"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              View Order Details
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• You'll receive an email confirmation shortly</li>
            <li>• Your order will be processed within 1-2 business days</li>
            <li>• Shipping typically takes 3-5 business days</li>
            <li>• Track your order in your account dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  )
}