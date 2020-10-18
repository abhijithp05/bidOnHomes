/** @jsx jsx */
import { jsx } from "@emotion/core";
import Grid from "@material-ui/core/Grid";
import {
  NavBar,
  Login,
  SideBarView,
  ProductList,
  ProductInCart,
} from "./index";
import { connect } from "react-redux";
import {
  fullContainerHeight,
  rootContainer,
  sideBarFixWidth,
  sideBarStyles,
  containerWidth,
} from "../styles";

const BidOnHomesManagerUnwrapped = (props) => {
  return (
    <div css={rootContainer}>
      <NavBar />
      <Grid css={fullContainerHeight} container>
        <Grid css={(fullContainerHeight, sideBarFixWidth)} item>
          <SideBarView styleObject={sideBarStyles} />
        </Grid>
        <Grid css={(fullContainerHeight, containerWidth)} item>
          {!props.loginStatus && (
            <Grid css={fullContainerHeight} item xs={12}>
              <Login />
            </Grid>
          )}

          {props.loginStatus && (
            <Grid css={fullContainerHeight} item xs={12}>
              {props.productListView && <ProductList />}
              {!props.productListView && <ProductInCart />}
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginStatus: state.get.loginStatus,
    productListView: state.get.productListView,
  };
};

export const BidOnHomesManager = connect(
  mapStateToProps,
  {}
)(BidOnHomesManagerUnwrapped);
