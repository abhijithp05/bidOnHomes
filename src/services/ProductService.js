import { setLoginStatus } from "../actions";
export class ProductService {
  static getProductList() {
    return fetch("https://fakestoreapi.com/products", {
      method: "GET",
    }).then((res) => {
      return res.json();
    });
  }

  static getAccessToken(userName, password) {
    let opts = {
      email: userName,
      password: password,
    };
    return fetch(
      "https://api.loginradius.com/identity/v2/auth/login?apikey=0884adc0-7c41-40cb-ac3b-2dada398ce32&verificationurl=www.bidonhomes.com",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(opts),
      }
    )
      .then((response) => {
        return response.json();
      });
  }
}
