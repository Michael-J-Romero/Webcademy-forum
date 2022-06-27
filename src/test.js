import React, { useEffect, useState } from 'react';
import './App.css';
import {
  defaultDarkModeOverride,
  ThemeProvider, 
} from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { listData } from './graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import {initiate} from "./forum/api/initializers"
 import Forum from "./forum/index"
const apiName = 'forumApi';
const path = '/items';


/* create a todo */
function Cc({user,setData}) {
console.log(user.username);
  useEffect(() => {
// initiate()
    API
    .get(apiName, path)
    .then(response => {
      console.log(response)
      setData(response)
      // Add your code here
    })
    .catch(error => {
      console.log('unauthorized',error);
    });


  }, [])
  return <div></div>
}
function App() {
  useEffect(() => {
  console.log("mounting3")
},[])
  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };
  return (
    <ThemeProvider style = {{width:"100%",height:"100%"}} theme={theme} colorMode={"dark"}>
      <div className="App">
        <Authenticator theme={theme} colorMode={"dark"}>
          {/* <Authenticated /> */}
          
         {({signOut, user})=> {
          console.log(user)
          return <Authenticated {...{signOut, user}}/>
         }}
        </Authenticator>
      </div>
    </ThemeProvider>
  );
}
function Authenticated({signOut, user}) {
  console.log("update",user)
  const [data, setData] = useState()
  let users
  if (data){
    users = data.map((e)=><li>{e.name}</li>)
  }
  if (!user)return<div>no user</div>
  return<> <Cc {...{user,setData}}/>
  {users}
   <p>
   hello {user.attributes.given_name || user.username}, welcome to the discussion!
   </p>
   <Forum user = {user}/>
   <button onClick={signOut}>Sign out</button></>
}
export default App;