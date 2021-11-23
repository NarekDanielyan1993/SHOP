import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../store/actions";
import { Input } from "../Input/input";

export const LoginForm = () => {
    
    const defaultFormValues = {
        username: "",
        password: ""
    }

    const history = useHistory()
    const dispatch = useDispatch()

    const [formValues, setFormValues] = useState(defaultFormValues);
    const [errors, setErrors] = useState({})

    const validate = (fieldValues = formValues) => {
        const temp = {...errors}
        if ("username" in fieldValues) {
            temp.username = fieldValues.username.length > 5 
                            ? "" 
                            : "Username must be longer than 5 characters" 
        }
        if ("password" in fieldValues) {
            temp.password = fieldValues.password.length > 5 
            ? "" 
            : "Password must be longer than 5 characters"
        }
        setErrors({...temp})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(checkIfFormIsValid()) {
            dispatch(login(history, formValues.username, formValues.password))
        }
    }
  
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
        validate({[name]: value})        
    }

    const checkIfFormIsValid = () => {
        return Object.keys(errors).length > 1 && Object.values(errors).every(field => field === "")
    }
  
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <Grid 
                container 
                maxWidth={"350px"}
                margin={"40px auto 0"}
                direction="column" 
                spacing={2}
            >
                <Grid item>
                    <Input
                        name="username"
                        fullWidth
                        value={formValues.username}
                        label={"username"}
                        onChange={handleInputChange}
                        error={errors["username"]}
                    />
                </Grid>
                <Grid item>
                    <Input
                        name="password"
                        fullWidth
                        value={formValues.password}
                        label={"password"}
                        onChange={handleInputChange}
                        error={errors["password"]}
                    /> 
                </Grid>
                <Grid item>
                    <Button type="submit" disabled={!checkIfFormIsValid()} variant="outlined" style={{display: "block", width: "100%"}}>Login</Button>
                </Grid>
            </Grid>
        </form>
    );
  };
  