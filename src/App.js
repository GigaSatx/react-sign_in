import logo from "./logo.svg";
import "./App.css";

import MyNav from "./Components/MyNav";
import SignIn from "./Components/Form";

function App() {
  return (
    <div className="App">
      <MyNav />
      <SignIn />
    </div>
  );
}

export default App;
