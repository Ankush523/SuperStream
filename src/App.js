import "./styles.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import PlanCreate from "./pages/PlanCreate";
import PlanList from "./pages/PlanList";
import StartPage from "./pages/StartPage";
import { CreateFlow } from "./Streams/CreateFlow/CreateFlow";
import { DeleteFlow } from "./Streams/DeleteFlow/DeleteFlow";
import PresentBalance from "./Streams/RealTimeBalance/PresentBalance";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <ConnectButton/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/startpage' element={<StartPage/>}/>
      <Route path='/plancreate' element={<PlanCreate/>}/>
      <Route path='/planlist' element={<PlanList/>}/>
      <Route path='createflow' element={<CreateFlow/>}/>
      <Route path='deleteflow' element={<DeleteFlow/>}/>
      <Route path='presentbalance' element={<PresentBalance/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}
