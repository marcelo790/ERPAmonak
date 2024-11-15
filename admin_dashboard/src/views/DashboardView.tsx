import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getAllProductCategory } from "@/api/ProductCategoryAPI"
import ProductCategoryList from "@/components/categories/ProductCategoryList"

export default function DashboardView() {

  const {data, isLoading} = useQuery({
    queryKey: ['product_category'],
    queryFn: getAllProductCategory
  })
  if(isLoading) return '..cargando'
  if(data) return (
    <>
      <h1 className="text-5xl font-black">Mis Productos</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">Maneja y administra tus productos</p>
      <nav className="my-5">
        <Link className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
        to='/categories/create'
      >
      Nuevo Producto
      </Link>
      </nav>
      {data.length ? (
        <ProductCategoryList
          formData={data}
        />
      ) : (
        <p>No hay</p>
      )}
    </>
  )
}
