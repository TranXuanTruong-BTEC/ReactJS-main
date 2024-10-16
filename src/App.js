import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from "./siderbar/siderbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;