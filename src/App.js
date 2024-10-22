import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddClient from './users/AddClient';
import EditClient from './users/EditClient';
import ViewClient from './users/ViewClient';
import Register from './auth/Register';
import Login from './auth/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addclient" element={<AddClient />} />
          <Route exact path="/editclient/:id" element={<EditClient />} />
          <Route exact path="/viewclient/:id" element={<ViewClient />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
