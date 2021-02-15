import React from "react";

// Redux
import { IAppState } from "../Redux/rootReducer";
import { useSelector } from "react-redux";

// Components
import Card from "../Components/Card/Card";

// Material-Ui
import {
  Container,
  Box,
  Paper,
  TextField,
  Slider,
  Typography,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import styled from "styled-components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Skeleton, Rating, Pagination } from "@material-ui/lab";

const Products = () => {
  const classes = useStyles();
  const selectProducts = useSelector((state: IAppState) => state.product.storeProducts);

  return (
    <Container>
      <form noValidate autoComplete="off">
        <Box className={classes.search}>
          <TextField fullWidth id="outlined-basic" label="Search Product" variant="outlined" />
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value="Best Match" variant="outlined">
            <MenuItem value={"Best Match"}>Best Match</MenuItem>
            <MenuItem value={"Ascending Price"}>Ascending Price</MenuItem>
            <MenuItem value={"Descending Price"}>Descending Price</MenuItem>
          </Select>
        </Box>
      </form>

      <Box className={classes.products}>
        <Category>
          <Paper style={{ height: "635px" }} elevation={3}>
            <Box className={classes.filter}>
              <Typography variant="h6" id="price-slider" gutterBottom>
                Product Filters
              </Typography>
            </Box>

            <Box className={classes.filter}>
              <Typography variant="body2" id="price-slider" gutterBottom>
                Categories
              </Typography>

              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" disableRipple />}
                label="Raspberry Pi"
                labelPlacement="end"
              />

              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" disableRipple />}
                label="Accessories"
                labelPlacement="end"
              />
            </Box>

            <Box className={classes.filter}>
              <Typography variant="body2" id="price-slider" gutterBottom>
                Shipping
              </Typography>

              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" disableRipple />}
                label="Free Shipping"
                labelPlacement="end"
              />
            </Box>

            <Box className={classes.filter}>
              <Typography variant="body2" id="price-slider" gutterBottom>
                Promotions
              </Typography>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" disableRipple />}
                label="Sales"
                labelPlacement="end"
              />
            </Box>

            <Box className={classes.filter}>
              <Typography variant="body2" id="price-slider" gutterBottom>
                Stock
              </Typography>

              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" disableRipple />}
                label="In Stock"
                labelPlacement="end"
              />
            </Box>

            <Box className={classes.filter}>
              <Typography variant="body2" id="price-slider" gutterBottom>
                Rating
              </Typography>

              <Box className={classes.filterRatings}>
                <Rating value={4} name="customized-color" defaultValue={2} precision={0.5} />
              </Box>
            </Box>

            <Box className={classes.filter}>
              <Typography variant="body2" id="price-slider" gutterBottom>
                Price
              </Typography>
              <Box className={classes.price}>
                <TextField
                  variant="outlined"
                  id="standard-basic"
                  placeholder="Min"
                  size="small"
                  className={classes.priceInput}
                />
                <TextField
                  variant="outlined"
                  id="standard-basic"
                  placeholder="Max"
                  size="small"
                  className={classes.priceInput}
                />
              </Box>
            </Box>
          </Paper>
        </Category>

        <GridProduct>
          {selectProducts.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </GridProduct>
      </Box>

      <div className={classes.pagination}>
        <Pagination count={10} color="primary" />
      </div>
    </Container>
  );
};

export default Products;

// =================================================================
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      margin: "80px 0px 50px 0px",
      display: "flex",
    },
    products: {
      height: "100%",
      display: "flex",
      margin: "70px 0px 50px 0px",
      justifyContent: "start",
    },
    pagination: {
      "& > *": {
        marginTop: theme.spacing(2),
        margin: "0px 0px 50px 14rem",
        display: "flex",
        justifyContent: "center",
      },
    },
    filter: {
      padding: "20px 20px 0px 20px",
    },
    filterRatings: {
      display: "flex",
      margin: "10px 0px 0px 0px",
    },
    price: {
      display: "flex",
    },
    priceInput: {
      margin: "10px 10px 0px 0px",
      padding: "0px 0px",
    },
  })
);

// =================================================================

const GridProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const Category = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  width: 215px;
  height: 100%;
  margin-right: 1.5rem;
`;
