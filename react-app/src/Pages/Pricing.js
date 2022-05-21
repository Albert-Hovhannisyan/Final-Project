import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import GetProducts from "../Components/GetProducts";

const styles = {
  media: {
    height: 150,
    width: 150,
    paddingTop: "5",
    marginTop: "4",
    marginRight: "auto",
    marginLeft: "auto",
  },
};

const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  height: 300,
};

async function getval() {
  const data = await GetProducts();
  return data;
}

const data = [];
getval().then((result) => {
  console.log(result);

  result.map((product) =>
    data.push(product)
  );
});

function PricingContent() {
  return (
    <React.Fragment>

      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
      </Container>
      <Container
        maxWidth="md"
        component="main"
        sx={{ pt: 8, pb: 6 }}
        disableGutters={true}
      >
        <Grid container spacing={2} alignItems="flex-end" columns={20}>
          {data.map((product) => (
            <Grid
              item
              key={product.name}
              xs={12}
              md={4}
            >
              <Card style={cardStyle}>
                <CardMedia
                  component="img"
                  style={styles.media} 
                  image={product.image} 
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <ul>
                      <Typography component="li" variant="h5" align="center">
                        {product.name}
                      </Typography>
                      <Typography component="li" variant="h7" align="center">
                        {product.description}
                      </Typography>
                      <Typography component="li" variant="h7" align="center">
                        Age Group: {product.ageGroup}
                      </Typography>
                      <Typography component="li" variant="h7" align="center">
                        Quantity: {product.quantity}
                      </Typography>
                      <Typography component="li" variant="h6" align="center">
                        {product.price}
                        $
                      </Typography>
                    </ul>
                  </Box>
                  <ul>
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
    </React.Fragment>
  );
}

PricingContent.propTypes = {
  imagePath: PropTypes.string,
};

export default function Pricing() {
  return <PricingContent />;
}
