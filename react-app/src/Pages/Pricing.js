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
import { requirePropFactory } from '@mui/material';
import PropTypes from "prop-types";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const tiers = [
  {
    // s:'./b.jpg',
    title: 'Free',
    price: '122',
    description: [
      '8+ years old',
      'Guarantee',
      'Something else',
    ],
    buttonText: 'Add to Cart',
    buttonVariant: 'outlined',
    imge:'https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803',
    
  },
  {
    title: 'Pro',
    // subheader: 'Most popular',
    price: '15',
    description: [
        '8+ years old',
        'Guarantee',
        'Something else',
    ],
    buttonText: 'Add to Cart',
    buttonVariant: 'outlined',
    imge:'https://images.unsplash.com/photo-1609708536965-6e5b915b195b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95JTIwY2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
        '8+ years old',
        'Guarantee',
        'Something else',
    ],
    buttonText: 'Add to Cart',
    buttonVariant: 'outlined',
    imge:'https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
        '8+ years old',
        'Guarantee',
        'Something else',
    ],
    buttonText: 'Add to Cart',
    buttonVariant: 'outlined',
    imge:'https://images.unsplash.com/photo-1609708536965-6e5b915b195b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95JTIwY2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
        '8+ years old',
        'Guarantee',
        'Something else',
    ],
    buttonText: 'Add to Cart',
    buttonVariant: 'outlined',
    imge:'https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
        '8+ years old',
        'Guarantee',
        'Something else',
    ],
    buttonText: 'Add to Cart',
    buttonVariant: 'outlined',
    imge:'https://images.unsplash.com/photo-1609708536965-6e5b915b195b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95JTIwY2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
        '8+ years old',
        'Guarantee',
        'Something else',
    ],
    buttonText: 'Add to Cart',
    buttonVariant: 'outlined',
    imge:'https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
        '8+ years old',
        'Guarantee',
        'Something else',
    ],
    buttonText: 'Add to Cart',
    buttonVariant: 'outlined',
    imge:'https://images.unsplash.com/photo-1609708536965-6e5b915b195b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95JTIwY2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
        '8+ years old',
        'Guarantee',
        'Something else',
    ],
    buttonText: 'Add to Cart',
    buttonVariant: 'outlined',
    imge:'https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
        '8+ years old',
        'Guarantee',
        'Something else',
    ],
    buttonText: 'Add to Cart',
    buttonVariant: 'outlined',
    imge:'https://images.unsplash.com/photo-1609708536965-6e5b915b195b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95JTIwY2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const styles = {
    media: {
    height: 150,
    width: 150,
    paddingTop: '5', // 16:9,
    marginTop:'4',
    marginRight:'auto',
    marginLeft:'auto'
    }
};



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
          {tiers.map((tier) => (
             
            // Enterprise card is full width at sm breakpoint
            
            <Grid
              
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
              <CardMedia
                    // href={require('./b.jpg')} //{require('/Users/liaharutyunyan/Documents/GitHub/Final-Project/react-app/src/Components/b.jpg')} //{tier.imge} // require image
                    component="img"
                    // title="Contemplative Reptile"
                    style = {styles.media} // specify styles
                    image={tier.imge} //{require('./b.jpg')}
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
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                    

                        
                    
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
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

PricingContent.propTypes = {
    imagePath: PropTypes.string
  };

export default function Pricing() {
  return <PricingContent />;
}

