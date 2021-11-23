import { Route, Switch } from "react-router-dom";
import { LoginPage } from "./Containers/Login/LoginPage";
import { ProductDetailPage } from "./Containers/ProductDetail/ProductDetailPage";
import { ProductsPage } from "./Containers/Products/ProductsPage";
import { PrivateRoute } from "./helpers/PrivateRoute";


export const Routes = () => {
    return (
        <Switch>
            <PrivateRoute path="/productDetail/:id"><ProductDetailPage /></PrivateRoute>
            <PrivateRoute path="/products"><ProductsPage /></PrivateRoute>
            <Route exact path="/"><LoginPage /></Route>
        </Switch>
    )
}