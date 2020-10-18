import * as action from "./actionTypes";
import { ProductService } from "../services/ProductService";

export const setLoginStatus = (loginStatus) => (dispatch) => {
  dispatch({
    type: action.SET_LOGIN_SUCCESS,
    loginStatus,
  });
};

export const getProductList = () => (dispatch) => {
  ProductService.getProductList().then((productList) =>
    dispatch({
      type: action.GET_PRODUCT_LIST,
      productList,
    })
  );
};

export const addProductToCart = (productItem, quantity) => (dispatch) => {
  productItem.quantity = quantity;
  dispatch({
    type: action.ADD_PRODUCT_TO_CART,
    productItem,
  });
};

export const setProductListView = (isProductListView) => (dispatch) => {
  dispatch({
    type: action.SET_PRODUCT_LIST_VIEW,
    isProductListView,
  });
};
