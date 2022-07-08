import React, { useEffect, useState } from 'react';
import './App.css';
import {
  defaultDarkModeOverride,
  ThemeProvider, 
} from '@aws-amplify/ui-react';
import { Authenticator,withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { listData } from './graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import {initiate} from "./forum/api/initializers"
import {getDiscussion,getDiscussion2} from "./forum/api/get"
 import Forum from "./forum/index"
const apiName = 'api2';
const path = '/posts';


/* create a todo */
function Cc({user,setData}) {
  console.log(user);
  useEffect(() => {
    // setTimeout(()  => {


          const token = user.signInUserSession.idToken.jwtToken
          console.log(token);
      API
      .get(apiName, path,{
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        console.log(response,'responsee')
        // setData(response)
        // Add your code here
      })
      .catch(error => {
        console.log('unauthorized',error);
      });
      console.log('ttttyyy2');
    
      getDiscussion().then((yy)=>{
    
        console.log(yy,'yyy');
      })
    // }, 7000);
// initiate() 

    fetch('https://c5lazy2vhozcqfk6cu5ynzyzye0diexw.lambda-url.us-east-1.on.aws/')
    .then((e)=>{
      console.log(e,'eee')
    })


  }, [])
  return <></>
}
function App({signOut, user}) {
  useEffect(() => {
  console.log("mounting3") 
// }, 6000);
},[])
  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };
  return (
    <ThemeProvider style = {{width:"100%",height:"100%"}} theme={theme} colorMode={"dark"}>
      <div className="App">
        {/* <Authenticator theme={theme} colorMode={"dark"}> */}
          {/* <Authenticated /> */}
          
         {/* {({signOut, user})=> {
          console.log(user) */}
          <Authenticated {...{signOut, user}}/>
         {/* }} */}
        {/* </Authenticator> */}
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
   <button onClick={signOut}>Sign out</button>
   </p>

   <Forum user = {user}/>
   </>
}
export default withAuthenticator(App);