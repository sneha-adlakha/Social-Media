import Home from "./pages/Home/Home";
import {useAuth} from "./Context/AuthContext";
import {Routes,Route} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {Register} from "./pages/Register/Register";
import {PrivateRoute} from "./PrivateRoute/PrivateRoute";

function App() {
  const {user}=useAuth();
  return (
    <div>
      <Routes>
      <Route exactpath="/" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <PrivateRoute exactpath="/" element={<Home/>}/>
      
      
      
      
       

      </Routes>
    </div>
  );
}





export default App;
