import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import { useGlobalContext } from "./Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  const { isLoading, cartItems } = useGlobalContext();

  const loading = `<div className="loading"> <h2>Please wait while loading</h2></div>`;

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/food-order-app">
          {" "}
          {isLoading && (
            <div className="loading">
              <h2> Please wait while loading... </h2>{" "}
            </div>
          )}{" "}
          {!isLoading && <Menu />}{" "}
        </Route>{" "}
        <Route exact path="/cart">
          <Cart />
        </Route>{" "}
      </Switch>{" "}
    </Router>
  );
}

export default App;
