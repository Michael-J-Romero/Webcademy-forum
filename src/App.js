import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from "@aws-amplify/ui-react"
import config from "../src/aws-exports";
import Amplify from "aws-amplify"
import Test from "./test"
import { ReactQueryDevtools, ReactQueryDevtoolsPanel } from 'react-query/devtools'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import React, { useState } from "react"
const queryClient = new QueryClient()
Amplify.configure(config);

function App() {
  const [show, setShow] = useState(false)
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <div style={{ position: "relative",    height: "100%" }}>
        <div onClick={() => setShow((e) => !e)} style={{ position: "absolute" }}>tools</div>
        <div style={{ display: "flex", flexDirection: "row", background: "#1b1b1b", height: "100%", color: "#999" }} className="App">
          <div style={{ display: show ? "block" : "none" }}>
            <ReactQueryDevtoolsPanel initialIsOpen={false} />
          </div>
          <Test />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
