import "./App.scss";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

import beers from "./data/beers";

function App() {
  return (
    <>
      <div className="app">
        <section className="nav">
          <Nav beersArr={beers} />
        </section>
        <section className="app__main">
          <Main beersArr={beers} />
        </section>
      </div>
    </>
  );
}

export default App;
