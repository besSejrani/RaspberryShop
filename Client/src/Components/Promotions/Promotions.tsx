import React from "react";

//React-Router-DOM
import { Link } from "react-router-dom";

// Redux
import { IAppState } from "../../Redux/rootReducer";
import { useSelector } from "react-redux";

import Card from "../Card/Card";

import { Button, Container, makeStyles} from "@material-ui/core";

const Promotions = () => {
  const classes = useStyles()
  const selectFeature = useSelector((state: IAppState) => state.product.featuredProducts);

  return (
    <Container>
        <section className={classes.root}>
          {selectFeature.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </section>

          <div className="col text-center">
            <Button
              component={Link}
              to="/products"
              variant="outlined"
              className="main-link"
              style={{ marginTop: "30px" }}
            >
              Our products
            </Button>
          </div>
      </Container>
  );
};

export default Promotions;

// =================================================================

const useStyles = makeStyles({
  root:{
    display: "flex",
    flexWrap: "wrap",
    margin: "200px 0px 50px 0px"
  }
})