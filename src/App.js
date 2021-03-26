import NavBar from "./components/navbar/NavBar"
import ModelContainer from "./components/modelos/modelContainer";
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
            <Route path="/ficha">
              <div style={{height:140}}/>
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
