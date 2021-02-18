// Next
import Link from "next/link";
import Image from "next/image";

import {
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Typography,
  Button,
  makeStyles,
  createStyles,
  Theme,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CartIcon from "@material-ui/icons/ShoppingCart";

// Redux
import { IAppState } from "../Redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { sidebarCart, sidebarToggle } from "../Redux/product/productAction";

const Header = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const selectProducts = useSelector((state: IAppState) => state.product.cartItems);

  return (
    <header className={classes.root}>
      <AppBar position="fixed">
        <Container>
          <Toolbar disableGutters>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon onClick={() => dispatch(sidebarToggle())} />
            </IconButton>
            <Link href="/">
              <Image width={60} height={40} src={"/raspberry.svg"} alt="Raspberry Pi Logo" />
            </Link>
            <Link href="/">
              <Typography variant="h6" className={classes.title}>
                BlueberryShop
              </Typography>
            </Link>

            <Button color="inherit">Login</Button>

            <IconButton color="inherit">
              <Badge badgeContent={selectProducts} color="secondary">
                <CartIcon className="nav-icon" onClick={() => dispatch(sidebarCart())} />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;

// =================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "64px",
      position: "relative",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration: "none",
      color: "white",
    },
  })
);
