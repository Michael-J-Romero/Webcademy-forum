import Forum from "./ui"
import {connectToUser} from "./api/actions"

export default ({user})=>{
    console.log(connectToUser(user))
    return <Forum user = {user}/>
}