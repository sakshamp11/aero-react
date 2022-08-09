import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register  from './components/Register'
import Price from './components/Price';
import Services from './components/Services';
import SearchList from './components/SearchList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    // <div style={{backgroundColor:"whitesmoke",border:"1px solid black"}}>
      //<Login/>
    // </div>
      //<Price/>
      //  <Register/>
      // <Services/>
    // <SearchList/>
    <BrowserRouter>
     <Routes>
      <Route
            path="/login"
            element={
              <>
                {" "}
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                {" "}
                <Register/>
              </>
            }
          />

     </Routes>
     </BrowserRouter>
    )
}

export default App;
