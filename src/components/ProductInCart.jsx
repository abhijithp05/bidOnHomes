/** @jsx jsx */
import Paper from "@material-ui/core/Paper";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import { paperStylesSourceList, listStyle } from "../styles";
import { ListItemView } from "./ListItemView";
import { useState } from "react";
import { ProductItemPopup } from "./ProductItemPopup";

const StyledPaper = styled(Paper)`
  ${paperStylesSourceList}
`;

const ProductInCartUnwrapped = (props) => {
  const [productItem, setProductItem] = useState({});
  const [isModelOpen, setIsModalOpen] = useState(false);
  const onHandleClose = () => {
    setIsModalOpen(false);
  };

  const onProductClicked = (productItem) => {
    setIsModalOpen(true);
    setProductItem(productItem);
  };

  return (
    <StyledPaper>
      <List css={listStyle}>
        {props.productInCartList.map((product) => (
          <ListItemView
            key={product.id}
            listItem={product}
            title={product.title}
            onClick={() => {
              onProductClicked(product);
            }}
          >
            <h3>{"Price: " + product.price * product.quantity}</h3>&nbsp;&nbsp;
            <h3>{"Qty: " + product.quantity}</h3>
          </ListItemView>
        ))}
      </List>
      <ProductItemPopup
        productDetails={productItem}
        isModalOpen={isModelOpen}
        handleClose={onHandleClose}
      />
    </StyledPaper>
  );
};

const mapStateToProps = (state) => {
  return {
    productInCartList: state.get.productInCartList,
  };
};

export const ProductInCart = connect(
  mapStateToProps,
  {}
)(ProductInCartUnwrapped);
