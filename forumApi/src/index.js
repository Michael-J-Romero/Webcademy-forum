/* Amplify Params - DO NOT EDIT
	API_WEBCADEMY_GRAPHQLAPIENDPOINTOUTPUT
	API_WEBCADEMY_GRAPHQLAPIIDOUTPUT
	API_WEBCADEMY_GRAPHQLAPIKEYOUTPUT
	AUTH_WEBCADEMY_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */


 let fetch1 = require ('node-fetch');
 const {Request,default:fetch} = fetch1
 //  import fetch, {  Request } from 'node-fetch';
 let a=33
  const GRAPHQL_ENDPOINT = process.env.API_amplifyforum_GRAPHQLAPIENDPOINTOUTPUT;
  const GRAPHQL_API_KEY = process.env.API_amplifyforum_GRAPHQLAPIKEYOUTPUT;
  //https://jwcgcaxcavem3o6njz3l23brmy.appsync-api.us-east-1.amazonaws.com/graphql
  //da2-trzlpsuzwfgxlbiaiyeoehlnza	
  const query = /* GraphQL */ `
    query LIST_TODOS {
      listData {
        items {
          id
          name
        }
      }
    }
  `;
  const variables = {
   input: {
     name: 'Hello, Todo!'
   }
 };
  
  /**
   * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
   */
  const handler = async (event) => {
    console.log(`EVENTTT: ${JSON.stringify(process?.env)}`);
  
    /** @type {import('node-fetch').RequestInit} */
    const options = {
      method: 'POST',
      headers: {
        'x-api-key': GRAPHQL_API_KEY
      },
      body: JSON.stringify({ query, variables })
    };
  console.log(GRAPHQL_ENDPOINT,GRAPHQL_API_KEY);
    const request = new Request(GRAPHQL_ENDPOINT, options);
  console.log('ddddd');
    let statusCode = 200;
    let body;
    let response;
  
    try {
      response = await fetch(request);
      body = await response.json();
      if (body.errors) statusCode = 400;
    } catch (error) {
      statusCode = 400;
      body = {
        errors: [
          {
            status: response.status,
            message: error.message,
            stack: error.stack
          }
        ]
      };
    }
  
    return {
      statusCode,
      body: JSON.stringify(body)
    };
  };
  module.exports = {handler}