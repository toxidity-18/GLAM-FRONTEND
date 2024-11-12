import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useGlobalContext } from '@/hooks/GlobalContext'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cart, user} = useGlobalContext()


  const NavItems = () => (
    <>
      <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
        Products
      </Link>
      {user ? (
        <>
          <Link to="/admin" className="text-sm font-medium transition-colors hover:text-primary">
            Dashboard
          </Link>
          <Link to="/admin/productCategory" className="text-sm font-medium transition-colors hover:text-primary">
            Category
          </Link>

          <Link to="/admin/products" className="text-sm font-medium transition-colors hover:text-primary">
            Manage Products
          </Link>
          <Link to="/admin/users" className="text-sm font-medium transition-colors hover:text-primary">
            Manage Users
          </Link>
          <Link to="/admin/analytics" className="text-sm font-medium transition-colors hover:text-primary">
            Analytics
          </Link>
        </>
      ) : null}
    </>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-orange-600 ">BeautyShop</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavItems />
          </nav>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileLink to="/" className="flex items-center" onOpenChange={setIsMobileMenuOpen}>
              <span className="font-bold">BeautyShop</span>
            </MobileLink>
            <div className="my-4 flex flex-col space-y-3">
              <NavItems />
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Input
              placeholder="Search products..."
              className="max-w-[300px]"
            />
          </div>
          <nav className="flex items-center">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="mr-2">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute w-6 bg-orange-500 font-bold p-1  text-white rounded-full bottom-3 left-7 flex justify-center align-middle">
                  {cart.length}
                </span>
                <span className="sr-only">Shopping Cart</span>
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-6 w-6" />
                  <span className="sr-only">User Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/register">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}

function MobileLink({ to, children, ...props }) {
  return (
    <Link
      to={to}
      {...props}
      className="text-foreground transition-colors hover:text-foreground/80"
    >
      {children}
    </Link>
  )
}