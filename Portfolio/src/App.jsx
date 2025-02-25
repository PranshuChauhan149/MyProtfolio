import { Outlet } from "react-router-dom";
import "./App.css";
import Aside from "./compouents/Aside";
import Navbar from "./compouents/Navbar";

const App =()=>{
  return <>
   <Aside></Aside>
  <div className="main-content">
 
   <Navbar/>
    <section style={{
      scrollBehavior:"smooth"
    }}>
      <Outlet></Outlet>
    </section>
  </div>
  </>
  
}

export default App;