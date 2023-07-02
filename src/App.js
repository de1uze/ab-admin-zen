import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buttons from "./Buttons";
import Cards from "./Cards";
import Footer from "./Footer";
import Colors from "./Colors";
import Borders from "./Borders";
import Animations from "./Animations";
import Other from "./Other";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import NotFound from "./NotFound";
import BlankPage from "./BlankPage";
import Charts from "./Charts";
import Tables from "./Tables";
function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Buttons" element={<Buttons />} />
                <Route path="/Cards" element={<Cards />} />
                <Route path="/Colors" element={<Colors />} />
                <Route path="/Borders" element={<Borders />} />
                <Route path="/Animations" element={<Animations />} />
                <Route path="/Other" element={<Other />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/ForgotPassword" element={<ForgotPassword />} />
                <Route path="/NotFound" element={<NotFound />} />
                <Route path="/BlankPage" element={<BlankPage />} />
                <Route path="/Charts" element={<Charts />} />
                <Route path="/Tables" element={<Tables />} />
              </Routes>
            </div>
          </div>
          <footer className="sticky-footer bg-white">
            <Footer></Footer>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
