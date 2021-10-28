import "./App.css";
import Register from "./components/forms/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import NavHeader from "./components/navHeader/NavHeader";
import ConfirmModal from "./shared/confirmModal/ConfirmModal";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavHeader />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
