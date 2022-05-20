import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { getAvatarUtilityClass, requirePropFactory } from '@mui/material';
import PropTypes from "prop-types";

import GetProducts from "../Components/GetProducts"


const styles = {
    
    media: {
    height: 150,
    width: 150,
    paddingTop: '5', // 16:9,
    marginTop:'4',
    marginRight:'auto',
    marginLeft:'auto',
    }
};

const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  height: 300,
};

async function getval(){
  // const data = []
  const data = await GetProducts()
  // console.log(data)
  // data1.map((product)=> (
  //   data.push(product)
  //   // console.log(product.name)
  // ))
  return data
}

const data = []
getval().then( (result) => {
  console.log(result);

  result.map((product)=> (
    data.push(product)
    // console.log(product.name)
  ))
})
// console.log(getval())

// const data = getval()

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        {/* <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography> */}

      </Container>
      {/* End hero unit */}
      <Container maxWidth='md' component="main" sx={{ pt: 8, pb: 6}} disableGutters={true}>
        <Grid container spacing={2} alignItems="flex-end" columns={20} >
          {data.map((product) => (
             
            // Enterprise card is full width at sm breakpoint
            
            <Grid
              
              item
              key={product.name}
              xs={12}
              // sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card style={cardStyle}>
                
              <CardMedia
                    // href={require('./b.jpg')} //{require('/Users/liaharutyunyan/Documents/GitHub/Final-Project/react-app/src/Components/b.jpg')} //{tier.imge} // require image
                    component="img"
                    // title="Contemplative Reptile"
                    style = {styles.media} // specify styles
                    image={product.image} //{require('./b.jpg')}
                    />
                {/* <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                //   action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                /> */}
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    {/* <Typography component="h2" variant="h3" color="text.primary" style={{whiteSpace: 'pre-line'}}> */}
                      
                      <ul>
                      <Typography
                        component="li"
                        variant="h5"
                        align="center"
                      >
                        {product.name} 
                      </Typography>
                  
                    {/* </Typography> */}
                    <Typography component="li" variant="h6" align="center">
                      {product.price} 
                    </Typography>
                    <Typography component="li" variant="h7" align="center">
                      {product.description}
                    </Typography>
                    </ul>
                    {/* <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography> */}
                    

                        
                    
                  </Box>
                  <ul>
                    {/* {product.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))} */}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={product.buttonVariant}>
                    {product.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        {/* <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid> */}
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

// async function products(){
//   const result = await GetProducts()
//   return result
// }

// products().then(PricingContent)


// PricingContent.propTypes = {
//     imagePath: PropTypes.string
//   };

// const result = GetProducts()

// async function hi(){
//   const r = await GetProducts();
//   console.log('ggggggggggggg', r)
//   return r
// }

// const f = hi();

// function PricingContent1(res) {
  
//   console.log('rttrge');
//   console.log(res.res);
// }
PricingContent.propTypes = {
  imagePath: PropTypes.string
};

export default function Pricing() {
  return <PricingContent />;
}

