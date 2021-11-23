import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Layout from "../../components/Layout/Layout"
import ProductsTable from "../../components/ProductsTable/ProductsTable"
import { fetchProductsStart } from "../../store/actions/products"

export const ProductsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductsStart())
    }, [])
    return (
        <Layout>
            <ProductsTable />
        </Layout>
    )
}