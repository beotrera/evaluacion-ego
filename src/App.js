import NavBar from "./components/navbar/NavBar"
import ModelContainer from "./components/modelos/modelContainer";
import FichaContainer from "./components/ficha/fichaContainer"
import Footer from "./components/footer/footer"
import  {BrowserRouter,Switch,Route} from "react-router-dom"
import React from 'react';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <div style={{height:70}}/>
        <Switch>
            <Route path="/modelos/:id?">
              <ModelContainer />
            </Route>
            <Route path="/ficha/:id?">
              <FichaContainer />
            </Route>
            <Route path="/">
              <ModelContainer />
            </Route>
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
