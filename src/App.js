import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from "@aws-amplify/ui-react"
 import config from "../src/aws-exports";
 import Amplify from "aws-amplify"
 import Test from "./test"
 Amplify.configure(config);
function App() {
  return (
    <div style = {{background:"#222",height:"100%",color:"#999"}} className="App">
     <Test/>
    </div>
  );
}

export default App;
