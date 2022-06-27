import { addDiscussion, addUser, addReply, addPost } from "./set"
import { getUser, } from "./get"

async function connectToUser(user1) {
    if (!user1){
        return
    }
    const name = user1.attributes.name || user1.username
    const id = user1.attributes.sub
    let user =  await getUser(id)
    let userData
    if (user.data.getUser){
        console.log("found",user)
        const {name,id} = user.data.getUser
        userData = {name,id}
    }
    else{
        console.log("not found",{name,id},user1)
       user =  await addUser({name,id})
       
       console.log(user)
       userData = {name,id}
    }
}
export{connectToUser}