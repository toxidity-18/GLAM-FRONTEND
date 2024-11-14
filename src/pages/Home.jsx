import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <div className="text-center max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold text-pink-700  mb-6">Welcome to BeautyShop</h1>
        <p className="text-xl mb-8">Discover amazing beauty products for your perfect look!</p>
        <Button asChild>
          <Link to="/products">Shop Now</Link>
        </Button>
      </div>

      {/* About Us Section */}
      <section id="about-us" className="py-16 px-8 text-center mt-12">
        <div className="max-w-6xl max-l-5xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">About Us</h2>
          <p className="text-white-700 text-lg mb-8">
            Welcome to Beauty Shop, your trusted destination for premium beauty products. We believe that beauty should be accessible, affordable, and empowering. Our mission is to provide high-quality, eco-friendly, and cruelty-free products that enhance your natural beauty. With a wide range of products for all skin types and beauty goals, we're here to help you feel confident and beautiful every day.
          </p>
          <p className="text-white-700 text-lg">
            At Beauty Shop, we’re committed to customer satisfaction and quality assurance. Our team of beauty experts curates each product with care and attention, ensuring that every item meets our high standards. Join us on this journey to beauty and self-confidence. We’re here to make you shine!
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-pink-700 py-10 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {/* About Section in Footer */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Beauty Shop</h3>
            <p className="text-pink-200">
              Discover the finest selection of beauty products tailored for all your skincare and makeup needs. Empowering your beauty, every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-pink-200">
              <li><Link to="#about-us" className="hover:underline">About Us</Link></li>
              <li><Link to="/products" className="hover:underline">Shop Products</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-pink-200"><strong>Email:</strong> support@beautyshop.com</p>
            <p className="text-pink-200"><strong>Phone:</strong> +1 (800) 123-4567</p>
            <div className="mt-4 text-pink-200 flex justify-center sm:justify-start space-x-4">
              {/* Social Media Icons */}
              <a href="#" aria-label="Facebook" className="text-2xl text-pink-200 hover:text-pink-200"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram" className="text-2xl text-pink-200 hover:text-pink-200"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter" className="text-2xl text-pink-200 hover:text-pink-200"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-200 text-sm">
          <p>&copy; 2024 Beauty Shop. All rights reserved.</p>
          <a href="#top" className="hover:underline">Back to Top</a>
        </div>
      </footer>
    </div>
  )
}
