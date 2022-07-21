export default (type,data)=>{
    return type=='post'?
    {
        ...data,
        User: { name: data.username },
        replyCount: 0,
        ReplyThread: {
            Thread: {
                id: data.postReplyThreadId,
                Posts: {
                    scannedCount: 0,
                    items: []
                }
            }
        }
    }
    :{error:'not a valid model'}
}