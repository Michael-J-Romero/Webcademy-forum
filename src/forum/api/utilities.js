import { API } from "aws-amplify";

async function send(mutation, input) {
    const result = await API.graphql({
        query: mutation,
        variables:{input}
    });
    return result
}
async function get(mutation, input) {
    const result = await API.graphql({
        query: mutation,
        variables:input
    });
    return result
}

export {send,get}