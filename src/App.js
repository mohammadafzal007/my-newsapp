
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App=()=>{
  let pageSize=12;
  
 
    return (
      <>
        <div>
          <Router>
          <Navbar style={{height:"100px"}}/>
  
            <Routes>
          <Route exact path="/"  element={<News  pageSize={pageSize} key="general" category="general" country="in" />}></Route>
          <Route exact path="/general"  element={<News  pageSize={pageSize} key="general" category="general" country="in" />}></Route>
          <Route exact path="/business"  element={<News  pageSize={pageSize} category="business" key="business" country="in" />}></Route>
          <Route exact path="/entertainment"  element={<News  pageSize={pageSize} category="entertainment" key="entertainment" country="in" />}></Route>
          <Route exact path="/health"  element={<News  pageSize={pageSize} category="health" key="health" country="in" />}></Route>
          <Route exact path="/science"  element={<News  pageSize={pageSize} category="science" key="science" country="in" />}></Route>
          <Route exact path="/sports"  element={<News  pageSize={pageSize} category="sports" key="sports" country="in" />}></Route>
          <Route exact path="/technology"  element={<News  pageSize={pageSize} key="technology" category="technology" country="in" />}></Route>
          
          </Routes>
          </Router>
        </div>
        
      </>
    );
  }


export default App;

