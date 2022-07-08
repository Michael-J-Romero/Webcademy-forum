import { addDiscussion, addUser, addReply, addPost } from "./set"

 
const introduction = (title)=>{
   return [
    {
        title:`About this forum`,
        content:`This is the ${title} lesson forum. Feel free to post a discussion 
        about anything regarding the current lesson.`,
        type:"discussion",
    },
    {
        title:`First discussion`,
        content:`This is a test discussion`,
        type:"discussion",
    }
   ]
}
const discussion = (threadID)=>({
    title:`how do I nest react component expressions`,
    content:`what's the correct syntax?`,
    type:"discussion",
    threadID
})
function walk(forumData,fn){
    function traverse(node) {
        if(!node.children)return
        node.children.forEach((e)=>{
            fn(e)
            traverse(e)
        })
    }
    traverse(forumData)
}
function category(id,title,children) {
    const leaf= !children
    if (leaf){
        children = introduction(title)
    }
    let o={
        type:"category",
        children,title,id,disabled:false
    }
    for (const i in children) {
        if (Object.hasOwnProperty.call(children, i)) {
            const e = children[i];
            // if(e.type == "discussion") {
                if(typeof e !=='string' && typeof e !=='number')
                e.parent=o
            // }
        }
    }
    return o
}

const forumStructure = category('0','root',[
    category('1',"generalDiscussions",[
            category('1.1',"help",[
                category('1.1.1',"membership"),
                category('1.1.2',"other")
            ]),
            category('1.2',"misc")
    ]),
    category('2',"lessonDiscussions",[
            category('2.1',"intro to react",[
                category('2.1.0',"#1.0: introduction",[discussion(992)]),
                category('2.1.1',"#1.1: components"),
                category('2.1.2',"#1.2: hierarchy"),
                category('2.1.3',"#2.0: state"),
                category('2.1.4',"#2.1: hooks"),
                category('2.1.5',"#2.2: lifecycle"),
            ]),
            category('2.2',"react styling",[
                category('2.2.0',"#1.0"),
                category('2.2.1',"#1.1"),
                category('2.2.2',"#2"),
                category('2.2.3',"#2.1"),
            ]),
            category('2.3',"JavaScript Fundamentals",[
                category('2.3.0',"membership"),
                category('2.3.1',"membership"),
                category('2.3.2',"membership"),
                category('2.3.3',"membership"),
                category('2.3.4',"membership"),
                category('2.3.5',"membership"),
                category('2.3.6',"membership"),
                category('2.3.7',"membership"),
        
            ])
    ])
]) 
console.log(forumStructure,'forumStructure');
async function initiate() {
    const userIds = []
    const users = ["Michael", "Trixie", "Megan"]
    console.log("started initializing")
 

    for (const name of users) {
        const i = await addUser({name})
        userIds.push(i)
    }
    console.log("created users", userIds)
    walk(forumStructure,async(node)=>{
        
        console.log("creating category discussion",node,node.type)
        if ((node.type != "discussion"))return;

        const {title,content} = node
        console.log(title,content,node.type)
        const threadID = await addDiscussion({
            userId: userIds[0],//threadID:node.id,
            title,content,category:node.parent.id
        })

        console.log("created thread")
        addPost({ postUserId: userIds[1], threadID, content: "first post" })
        const postid = await addPost({ postUserId: userIds[2], threadID, content: "second post" })
        console.log("created posts")
        // addReply({
        //     content: "reply to second post",
        //     postid,
        //     userId: userIds[0]
        // })
        // console.log("created reply")

    })
}
export { initiate,forumStructure }