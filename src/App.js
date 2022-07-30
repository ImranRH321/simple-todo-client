
import "./App.css";
import Todo from "./page/Todo/Todo";
import Home from "./page/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./page/Shared/Navbar";
import DayList from "./page/Todo/DayList";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/dayList" element={<DayList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
