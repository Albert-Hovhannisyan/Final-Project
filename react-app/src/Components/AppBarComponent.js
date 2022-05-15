import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom"

function AppBarComponent(){
    return <AppBar>
    {/* <Box m={1} display="flex" justifyContent="center" alignItems="center" fontSize={25}>Welcome</Box> */}
    <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end" position={"relative"}>
      <nav>
        <Link to="/register">
          <Button variant="contained">
            Register
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="contained">
            Log In
          </Button>
        </Link>
      </nav>
      <Button variant="contained">
        <ShoppingCartOutlinedIcon fontSize='small'></ShoppingCartOutlinedIcon>
      </Button>
    </Box>
  </AppBar>
}

export default AppBarComponent;