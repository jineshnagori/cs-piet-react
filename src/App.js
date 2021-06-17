import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js"
import Main from "./components/Main.js"
import Footer from "./components/Footer.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <Main />
            </>)
          }}>
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;