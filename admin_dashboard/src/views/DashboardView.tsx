import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getAllProductCategory } from "@/api/ProductCategoryAPI"
import ProductCategoryList from "@/components/category/ProductCategoryList"

export default function DashboardView() {

  const {data, isLoading} = useQuery({
    queryKey: ['product_category'],
    queryFn: getAllProductCategory
  })
  if(isLoading) return '..cargando'
  if(data) return (
    <>
      <h1 className="text-5xl font-black">Mis Categorias</h1>
      <nav className="my-8">
        <Link className="bg-zinc-700 hover:bg-zinc-950 px-10 py-3 rounded-md text-white text-xl font-bold cursor-pointer transition-colors"
        to='/categories/create'
      >
      Nueva Categoria
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
