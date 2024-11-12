import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useFetch } from '@/hooks/FetchContext'
import { useNavigate, Link } from 'react-router-dom'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  password: z.string().min(3, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z.string(),
  is_admin: z.boolean(), // Adding is_admin field as a boolean
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function Register() {
  const { toast } = useToast();
  const { post, loading, error } = useFetch()
  const goto = useNavigate()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      is_admin: false, 
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values) {
    let submitForm = async () => {
      let response = await post("users", values)
      if (response.status) {
        toast({
          title: "Account created successfully",
          description: "Welcome to BeautyShop!",
        })
        goto("/login")
      } else {
        toast({
          title: "Error:",
          description: response?.error,
        })
      }
    }

    submitForm()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow bg-cover bg-center" style={{ backgroundImage: 'url("/path-to-your-background-image.jpg")' }}>
        <div className="max-w-md mx-auto p-6 bg-white bg-opacity-50 rounded-lg shadow-md mt-6 backdrop-blur-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Create an Account</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="is_admin"
                render={({ field }) => (
                  <Select
                    onValueChange={(value) => field.onChange(value === "Admin")}
                  >
                    <SelectTrigger className="col-span-3">
                      <FormLabel>Role:</FormLabel>
                      <SelectValue placeholder="Select a role" className="text-red-700" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"Customer"} >Customer</SelectItem>
                      <SelectItem value={"Admin"}>Admin</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Confirm your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">{loading ? "Please Wait" : "Register"}</Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-pink-600 text-white py-10 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {/* About Section in Footer */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Beauty Shop</h3>
            <p className="text-gray-200">
              Discover the finest selection of beauty products tailored for all your skincare and makeup needs. Empowering your beauty, every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="#about-us" className="hover:underline">About Us</Link></li>
              <li><Link to="/products" className="hover:underline">Shop Products</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p><strong>Email:</strong> support@beautyshop.com</p>
            <p><strong>Phone:</strong> +1 (800) 123-4567</p>
            <div className="mt-4 flex justify-center sm:justify-start space-x-4">
              {/* Social Media Icons */}
              <a href="#" aria-label="Facebook" className="text-2xl text-white hover:text-pink-200"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram" className="text-2xl text-white hover:text-pink-200"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter" className="text-2xl text-white hover:text-pink-200"><i className="fab fa-twitter"></i></a>
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
