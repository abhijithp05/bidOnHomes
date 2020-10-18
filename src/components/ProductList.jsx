/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { ListItemView } from "./ListItemView";
import { paperStyles, listStyle,cardStyle } from "../styles";
import Button from "@material-ui/core/Button";
import { getProductList } from "../actions";
import { ProductItemPopup } from "./ProductItemPopup";

class ProductListUnwrapped extends React.Component {
  constructor() {
    super();
    this.state = {
      isModelOpen: false,
      productItem: {},
    };
  }
  componentDidMount() {
    this.props.getProductList();
  }

  onHandleClose = () => {
    this.setState({ isModelOpen: false });
  };

  onProductClicked = (productItem) => {
    this.setState({ isModelOpen: true, productItem });
  };

  render() {
    let list = this.props.productList;
    return (
      <Paper css={paperStyles}>
        {list.length === 0 ? (
          <CardActionArea css={cardStyle}>
            <CardContent >
              <CircularProgress />
            </CardContent>
          </CardActionArea>
        ) : (
          <List css={listStyle}>
            {list.map((productItem) => {
              return (
                <ListItemView
                  listItem={productItem}
                  key={productItem.id}
                  title={productItem.title}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      this.onProductClicked(productItem);
                    }}
                    startIcon={<ShoppingCartIcon />}
                  >
                    Add Product
                  </Button>

                  <Divider />
                </ListItemView>
              );
            })}
          </List>
        )}
        <ProductItemPopup
          productDetails={this.state.productItem}
          isModalOpen={this.state.isModelOpen}
          handleClose={this.onHandleClose}
        />
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.get.productList,
  };
};

export const ProductList = connect(mapStateToProps, { getProductList })(
  ProductListUnwrapped
);
