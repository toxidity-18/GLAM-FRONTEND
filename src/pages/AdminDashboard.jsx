import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, Package, ShoppingCart } from 'lucide-react'
import { useGlobalContext } from '@/hooks/GlobalContext'
import { useToast } from '@/hooks/use-toast'
import { useFetch } from '@/hooks/FetchContext'

export default function AdminDashboard() {


  const {products, allUser, setAllUsers } = useGlobalContext()
  const { toast } = useToast()
  const {get: fetchAllUsers } = useFetch()

  const total = products.reduce((sum, item) => sum + item.price , 0)


  useEffect(() =>  {

    let res = async ()  => {
      let data = await fetchAllUsers("users")
      setAllUsers(data)
      if(data?.msg){
        toast({
          title: "Error",
          description: data['msg'],
          variant: "destructive",
        });
        return
      }
      setAllUsers(data)
    }
    res()

  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white ">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{products.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allUser.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">567</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES {total.toFixed(2)}</div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 space-y-4">
        <Link to="/admin/products" className="block p-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90">Manage Products</Link>
        <Link to="/admin/users" className="block p-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90">Manage Users</Link>
        <Link to="/admin/analytics" className="block p-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90">View Analytics</Link>
      </div>
    </div>
  )
}