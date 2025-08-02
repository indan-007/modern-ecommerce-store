import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  original_price?: number
  image_url: string
  category: string
  stock_quantity: number
  rating: number
  review_count: number
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  user_id: string
  total_amount: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  stripe_payment_intent_id?: string
  shipping_address: any
  created_at: string
  updated_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
  created_at: string
}

// Database functions
export const getProducts = async (category?: string) => {
  let query = supabase.from('products').select('*')
  
  if (category && category !== 'All') {
    query = query.eq('category', category)
  }
  
  const { data, error } = await query.order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching products:', error)
    return []
  }
  
  return data as Product[]
}

export const getProduct = async (id: string) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('Error fetching product:', error)
    return null
  }
  
  return data as Product
}

export const createOrder = async (orderData: Partial<Order>) => {
  const { data, error } = await supabase
    .from('orders')
    .insert(orderData)
    .select()
    .single()
  
  if (error) {
    console.error('Error creating order:', error)
    return null
  }
  
  return data as Order
}

export const createOrderItems = async (orderItems: Partial<OrderItem>[]) => {
  const { data, error } = await supabase
    .from('order_items')
    .insert(orderItems)
    .select()
  
  if (error) {
    console.error('Error creating order items:', error)
    return null
  }
  
  return data as OrderItem[]
}