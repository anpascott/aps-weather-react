import Form from "./Form.js";
import Overview from "./Overview.js";
import Weather from "./Weather.js";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div className="container" style={{ 
      backgroundImage: `url("https://images.theconversation.com/files/232705/original/file-20180820-30593-1nxanpj.jpg?ixlib=rb-1.1.0&q=200&auto=format&w=1000")` 
    }}>
          < Weather />
    </div>
    <small id="repository">
<a href="https://github.com/anpascott/react-weather-app.git" target="_blank">Open-source code </a>
 by Andrea P.
</small>
    </div>
  );
}

export default App;