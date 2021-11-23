import {useEffect, Fragment } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useHistory } from "react-router";
import { Container } from "@material-ui/core";

export const LoginPage = () => {
    const history = useHistory()

    useEffect(() => {
        let isAuth = localStorage.getItem('username')
        if(isAuth && isAuth !== 'undefined') {
            history.push('/products')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <Container style={{ 
                textAlign: "center", 
                minHeight: "100vh",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center"
        }}>
                <h2>LOGIN</h2>
                <LoginForm />
        </Container>
    )
}