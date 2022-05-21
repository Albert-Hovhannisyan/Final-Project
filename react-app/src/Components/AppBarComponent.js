import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom"

function AppBarComponent(){
    return <AppBar>
    <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end" position={"relative"}>
      <nav>
        <Link to="/home">
          <Button variant="contained">
            Home
          </Button>
        </Link>
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
    </Box>
  </AppBar>
}

export default AppBarComponent;