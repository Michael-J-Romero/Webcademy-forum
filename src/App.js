import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from "@aws-amplify/ui-react"
 import config from "../src/aws-exports";
 import Amplify from "aws-amplify"
 import Test from "./test"
  import { ReactQueryDevtools } from 'react-query/devtools'
  import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
  
  const queryClient = new QueryClient()
  Amplify.configure(config);

function App() {
 return (
   <QueryClientProvider client={queryClient}>
 {/* The rest of your application */}
    <div style = {{background:"#222",height:"100%",color:"#999"}} className="App">
     <Test/>
    </div>
 <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
  );
}

export default App;
