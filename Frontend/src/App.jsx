import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Create from "./Pages/Create";

const App = () => {
  return (
    <>
          <Routes>
              
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
