import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom"

function UserAppBarComponent(){
    return <AppBar>
    <Box m={1} display="flex" justifyContent="center" alignItems="center" fontSize={25}>User</Box>
    <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end" position={"relative"}>
      <nav>
        <Link to="/home">
          <Button variant="contained">
            Home
          </Button>
        </Link>
        <Link to="/home">
          <Button variant="contained">
            Log Out
          </Button>
        </Link>
        <Link to="/shoppingcart">
          <Button variant="contained">
            <ShoppingCartOutlinedIcon fontSize='small'></ShoppingCartOutlinedIcon>
          </Button>
        </Link>
      </nav>
    </Box>
  </AppBar>
}

export default UserAppBarComponent;