import Home from "./pages/Home/Home";
import {useAuth} from "./Context/AuthContext";
import {Routes,Route,Navigate} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {Register} from "./pages/Register/Register";
import {PrivateRoute} from "./PrivateRoute/PrivateRoute";

function App() {
  const {user}=useAuth();
  console.log({user});
  return (
    <div>
      <Routes>
      <Route exactpath="/">{user?<Home/>:<Register/>}</Route>
      <Route exactpath="/login">{user?<Navigate replace state={{from:"/login"}} to={"/"}/>:<Login/>}</Route>
      <Route exact path="/register">{user?<Navigate replace state={{from:"/register"}} to={"/"}/>:<Register/>}</Route>
      
         
       

      </Routes>
    </div>
  );
}





export default App;
