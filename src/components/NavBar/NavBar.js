import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logout } from "../../store/actions";


export const NavBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = () => {
        dispatch(logout(history))
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container direction="row" justifyContent="flex-end">
                    <Button color="inherit" onClick={handleLogout}>
                        LOGOUT
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}