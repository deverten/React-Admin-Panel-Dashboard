import Sidebar from "./components/Sidebar/sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/Home/Home";


function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
     
    </div>
  );
}

export default App;
