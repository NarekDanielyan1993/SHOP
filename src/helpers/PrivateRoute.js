import { Redirect, Route } from "react-router";
import useUserAuth from "../hooks/useUserAuth";
export const PrivateRoute = ({ children, ...rest }) => {
    const isUserAuth = useUserAuth();
    return <Route {...rest} render={({location}) => {
        return isUserAuth
            ? children 
            : <Redirect
                to={{
                  pathname: '/',
                  state: { from: location }
                }} />
    }} />
  }