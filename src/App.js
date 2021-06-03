import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import { useGlobalContext } from "./Context";

function App() {
  const { isLoading, cartItems } = useGlobalContext();

  const img = cartItems[1].img;
  console.log(`img`, img);
  const loading = `<div className="loading"> <h2>Please wait while loading</h2></div>`;

  console.log(`isLoading`, isLoading);
  return (
    <div className="App">
      <Navigation />

      {isLoading && (
        <div className="loading">
          <h2>Please wait while loading...</h2>
        </div>
      )}
      {!isLoading && <Menu />}
    </div>
  );
}

export default App;
