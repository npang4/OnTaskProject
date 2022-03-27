import logo from "./logo.svg";
import Chris from "./components/Team/chris/Chris";
import Rhoanna from "./components/Team/rhoanna/Rhoanna";
import "./App.css";
import Homepage from "./components/Team/Homepage";
import { Routes, Route } from "react-router-dom";
import Nelson from "./components/Team/nelson/Nelson";
import Jia from "./components/Team/jia/jia";
import Michael from './components/Team/michael/michael';
import Kim from './components/Team/kim/Kim';
import Login from './components/login/Login';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import TodoList from "./components/to-do-list/TodoList";
import Navbar from "./components/navbar/Navbar";
import { connect } from 'react-redux'



  // "proxy": "http://localhost:4000",

  // ^^ IMPORTANT READDDDDDD

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
      {/* Add your path to your component here */}
      <Navbar />
      
      <Routes>

        {/* About Page Route */}
        <Route path="/about" element={<Homepage />} />

        {/* Team Info Routes */}
        <Route path="/chris" element={<Chris />} />
        <Route path="/nelson" element={<Nelson />} />
        <Route path="/rhoanna" element={<Rhoanna />} />
        <Route path="/jia" element={<Jia />} />
        <Route path='/michael' element={<Michael />} />
        <Route path='/kim' element={<Kim />} />

        {/* Todolist Route */}
        <Route path='/' element={<TodoList />} />
        

      </Routes>



    </div>
  );
}



export default App;