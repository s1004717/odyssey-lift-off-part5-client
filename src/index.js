import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
//123
const client = new ApolloClient({
  uri: "https://test072466sever.herokuapp.com/",
  cache: new InMemoryCache(),
  name: "web",
  version: "1.0",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
