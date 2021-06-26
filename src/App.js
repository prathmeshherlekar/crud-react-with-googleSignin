import { Container} from "react-bootstrap";
import MainApp from './components/MainApp';
import { useState } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import SideBar from "./components/SideBar";


function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("IsLoggedIn"));
  var profile = JSON.parse(localStorage.getItem("LogInData"));
  
  
  return (
    <>
    <Router>      
      <SideBar profile={profile} IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    
      <Container fluid >
        <div className="mainApp">
          {localStorage.getItem('IsLoggedIn')==='true'?<MainApp/>:<h3 className="text-center mt-3">LogIn Please</h3>}
        </div>
      </Container>
    </Router>

    </>
  );
}

export default App;

