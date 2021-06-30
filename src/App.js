import Home from "./pages/Home/Home";
import {useAuth} from "./Context/AuthContext";
import {Routes,Route} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {PrivateRoute} from "./PrivateRoute/PrivateRoute";

function App() {
  const {user} =useAuth();
  return (
    <div>
      <Routes>
        <Route exactpath="/login" element={<Login/>}/>
        <PrivateRoute exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}





export default App;
