import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Box from '@mui/material/Box';

function AppBarComponent(){
    return <AppBar>
    <Box m={1} display="flex" justifyContent="center" alignItems="center" fontSize={25}>Welcome</Box>
    <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
      <Button variant="contained">
        Register
      </Button>
      <Button variant="contained">
        Log In
      </Button>
      <Button variant="contained">
        <ShoppingCartOutlinedIcon fontSize='medium'></ShoppingCartOutlinedIcon>
      </Button>
    </Box>
  </AppBar>
}

export default AppBarComponent;