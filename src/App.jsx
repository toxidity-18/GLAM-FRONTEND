import React, { useEffect } from 'react'
import {  Router, Routes, Route } from 'react-router-dom'
import Header from './components/ui/Header'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/AdminDashboard'
import AdminProducts from './pages/AdminProducts'
import AdminUsers from './pages/AdminUsers'
import AdminAnalytics from './pages/AdminAnalytics'
import Background from './components/Background'
import { Toaster } from "@/components/ui/toaster"
import { useGlobalContext } from './hooks/GlobalContext'
import { useFetch } from './hooks/FetchContext'
import AdminCategories from './pages/AdminCategories'

function App() {
  const { setProducts, setfetchedCategories} = useGlobalContext()
  const { get: getProduct, get: fetchCategory, } = useFetch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProduct("products");
        const resFetch = await fetchCategory("product_categories")
        setProducts(response); 
        setfetchedCategories(resFetch)

      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
  
    fetchProducts();
  }, [getProduct]);


  return (
      <div className="flex flex-col min-h-screen">
        <Background/>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/productCategory" element={<AdminCategories />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
          </Routes>
        </main>
        <Toaster />
      </div>
  )
}

export default App