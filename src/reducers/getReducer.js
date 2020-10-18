import {
  ADD_PRODUCT_TO_CART,
  GET_PRODUCT_LIST,
  SET_LOGIN_SUCCESS,
  SET_PRODUCT_LIST_VIEW,
} from "../actions";

const inetialState = {
  loginStatus: localStorage.getItem("login_status") == "true",
  productList: [],
  productInCartList: [],
  productListView: true,
};

export default function (state = inetialState, action) {
  switch (action.type) {
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: action.loginStatus,
      };

    case GET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.productList,
      };

    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        productInCartList: [...state.productInCartList, action.productItem],
      };

    case SET_PRODUCT_LIST_VIEW:
      return {
        ...state,
        productListView: action.isProductListView,
      };
    default:
      return state;
  }
}
