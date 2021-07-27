import Home from "./pages/Home/Home";
import {useAuth} from "./Context/AuthContext";
import {Routes,Route} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {Register} from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import {PrivateRoute} from "./PrivateRoute/PrivateRoute";

function App() {
  const {user}=useAuth();
  console.log({user});
  return (
    <div>
      <Routes>
      <Route exact path="/">{user ? <Home /> : <Register />}</Route>
      <Route exact path="/login" element={<Login/>}/>
      <PrivateRoute exact path="/home" element={<Home />}/>
      <Route exact path="/profile/:username" element={<Profile/>}/>
      </Routes>
    </div>
  );
}





export default App;
