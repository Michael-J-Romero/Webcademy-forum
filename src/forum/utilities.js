function getPath(category) {
    let path = []
    let c = category
    if (c.title == 'root') path.push('forum')
    else path.push(c.title)
    let cc = 0
    while (c.parent && cc < 2) {
        cc++

        c = c.parent
        if (c.title == 'root') path.push('forum')
        else path.push(c.title)
    }
    if (c.parent) path.push('... ')
    return path
}
let theme = {
    w: '750px'
}
export{getPath,theme}