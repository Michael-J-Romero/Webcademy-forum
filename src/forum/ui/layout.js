// import Discussion from "./mock/discussion.json"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import  {getPath,theme} from "../utilities"
import { Snackbar } from "@mui/material"
import MuiAlert from '@mui/material/Alert';

const StyledForum = styled.div`
background: #1b1b1b;

`
const StyledBar = styled.div`
margin:auto;
display:flex;
flex-direction: column;
padding: 20px;
align-items: stretch;
text-align: left;
background: #212121;
max-width: ${theme.w};
& .discussion-button{
    border: 1px solid #3c3c3c;
    display: block;
    padding: 8px;
    cursor: pointer;
    margin-top: 2px;
    background:#333;

    transition-duration: 300ms;
    &:hover{
        background:#555;
    }
} 
& .discussion-bar{
    display:flex;

    & .discussion-path{
    } 
    & div{
        padding:8px;
    } 
} 
`

function Bar({ category, setCategory }) {
    let path = getPath(category)

    return <StyledBar>
        <div className="discussion-bar">
            <div className="discussion-button"
                onClick={() => {
                    if (category.parent)
                        setCategory(category.parent)
                }}>
                back
            </div>
            <div className="discussion-path">
                {path.reverse().join(' / ')}
            </div>
        </div>
    </StyledBar>
}

export default({children,category, setCategory,setScrolledToBottom,scrolledToBottom})=>{
    let[m,sm]=useState("updating post")
    useEffect(()=>{
        setTimeout(() => {
            sm('test')
        }, 3000);
    },[])
    return <StyledForum onScroll={(e) => {
        let {scrollHeight, scrollTop, clientHeight}=e.target
        const l = Math.abs(scrollHeight - (scrollTop + clientHeight))
            const bottom = l <= 500;
            // console.log(bottom,{l,scrollHeight,scrollTop , clientHeight})
            if (bottom) { 
                if (!scrolledToBottom)setScrolledToBottom(true)
             }
             else if (scrolledToBottom)setScrolledToBottom(false)
             window.addEventListener('resize',()=>{
                setScrolledToBottom(false)
             })
    }} >

    <Bar {...{ category, setCategory }} />
    {children}
    <Snackbar
        key={m}
        open={true}
        // autoHideDuration={6000}
        // onClose={handleClose}
        message={m}
        anchorOrigin={{ vertical:'bottom', horizontal:'center' }} 
        // action={action}
      >
          <Alert
        //    onClose={handleClose} 
           severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
    </Snackbar>
</StyledForum>
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert anchorOrigin='BOTTOM-CENTER' elevation={6} ref={ref} variant="filled" {...props} />;
  });