import { Navigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getByIdProductCategory } from "@/api/ProductCategoryAPI"
import ProductCategoryEdit from "@/components/categories/ProductCategoryEdit"

export default function EditProductCategoryView() {

    const params = useParams()
    const productCategoryId = parseInt(params.productCategoryId!)

    const {data, isLoading, isError} = useQuery({
        queryKey: ['edit_product_category',productCategoryId],
        queryFn: () => getByIdProductCategory(productCategoryId),
        retry: false
      })

      if(isLoading) return '...cargando'
      if(isError) return <Navigate to='/404/' />
  if(data) return <ProductCategoryEdit data={data} productCategoryId={productCategoryId}/>
}
