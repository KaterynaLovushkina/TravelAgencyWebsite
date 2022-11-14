import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from "./pages/home/home";
import { ToastContainer } from 'react-toastify';
import Trip from "./pages/trip/trip";
import "react-toastify/dist/ReactToastify.css";
import Catalog from "./pages/catalog/trips";
import Cart from "./pages/cart/Cart";
import Form from "./components/form/form";
import CheckOut from "./components/form/form";
import Success from "./components/form/Success";
import SignIn from "./pages/signIn/SignIn";
import ProtectedRoutes from "./components/protectedRoutes/protectedRoutes";
import SignUp from "./pages/signUp/signUpp";


function App() {
  return (

      <Router>

        <Routes>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/>

            {<Route path="/" element={<ProtectedRoutes/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/trips/find/:id" element={<Trip/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/form" element={<CheckOut/>}/>
                <Route path="/success" element={<Success/>}/>
            </Route>
            }
        </Routes>
          <ToastContainer />
      </Router>


  );
}

export default App;
