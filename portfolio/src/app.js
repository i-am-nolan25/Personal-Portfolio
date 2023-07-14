import Main from "./pages/main/main"
import NavBar from "./pages/nav-bar/nav_bar";
// import Resume from "./pages/resume/resume"
import Project from "./pages/project/project"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
    Routes
  } from "react-router-dom";

function App()  {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/navbar" element = {<NavBar/>}/>
                <Route path = "/main" element = {<Main/>}/>
                <Route path = "/project" element = {<Project/>}/>
                {/* <Route path = "/resume" element = {<Resume/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App;