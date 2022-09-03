import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import PlanCreate from "./pages/PlanCreate";
import PlanList from "./pages/PlanList";
import StartPage from "./pages/StartPage";

export default function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/startpage' element={<StartPage/>}/>
      <Route path='/plancreate' element={<PlanCreate/>}/>
      <Route path='/planlist' element={<PlanList/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}
