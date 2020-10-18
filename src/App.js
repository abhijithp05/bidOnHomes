/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { rootContainer } from "./styles";
import { BidOnHomesManager } from "./components";

export default function App() {
  return (
    <Provider store={store}>
      <div css={rootContainer}>
        <BidOnHomesManager />
      </div>
    </Provider>
  );
}
