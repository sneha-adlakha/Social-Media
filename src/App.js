import Home from "./pages/Home/Home";
import {useAuth} from "./Context/AuthContext";


function App() {
  const {counter}=useAuth();
  return (
    <div>
       <Home/>
      <h1>Counter{counter}</h1>
    </div>
  );
}





export default App;
