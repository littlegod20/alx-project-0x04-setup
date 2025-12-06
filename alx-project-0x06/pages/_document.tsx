import { Html, Head, Main, NextScript } from "next/document";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function Document() {
  return (
    <Html lang="en">
      <Provider store={store}>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      </Provider>
    </Html>
  );
}

