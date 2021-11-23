import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Container, Grid } from "@material-ui/core";
import Typography from '@mui/material/Typography';

export const ProductDetailPage = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const products = useSelector(state => state.products.products);

    useEffect(() => {
        if (products) {
            const singleProduct = products.filter(product => product.id === Number(id))
            setProduct(singleProduct)
        }
    }, [])
    return (
            <Container style={{ minHeight: "100vh", margin: "auto", maxWidth: "80%" }}>
            {product.length > 0 ? <Grid 
                style={{height: "100vh"}} 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                <Grid alignItems="center" justifyContent="center" container item md={6} sm={12} xs={12}>
                    <img alt="" src={product[0].image} height="auto" width="50%"/>
                </Grid>
                <Grid item md={6} sm={12} xs={12} container direction="column" spacing={4}>
                    <Typography alignSelf="center">{product[0].title}</Typography>
                    <Typography alignSelf="center">price - {product[0].price}</Typography>
                    <Typography>{product[0].description}</Typography>
                </Grid>
            </Grid> : ""}
        </Container>
    )
}