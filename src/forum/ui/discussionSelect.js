import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPath, theme } from "../utilities"
import { getDiscussionsByCategory } from "../api/get"
import { useQuery, useQueryClient, useMutation, useInfiniteQuery } from 'react-query'
import { Button, Input, Icon, TextField,LinearProgress } from "@mui/material"

const StyledSelectD = styled.div`
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
    &.discussion{
        background:#444;
    }
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

export default function DiscussionSelect({   category, setCategory, setDiscussion }) {
    const { children } = category
    console.log(category)
    const { data, isLoading } = useQuery(['getCategories', category.id], async () => {
        if(!children[0].type == "discussion")return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([])
            }, 500);
        })
        let discussions = await getDiscussionsByCategory(category.id)
        const d = discussions.data.DiscussionByCategory.items.map((e) => ({ ...e, parent: category, type: "discussion" }))
        return d
    }, {
        staleTime: 30000,
        refetchInterval: 1000 * 60 * 3
    })
    let discussions = data || []

    useEffect(() => {
        // setDiscussion()
        console.log("mount discussion select", category)
    }, [])
    const content = [...children.filter((e) => e.type == "category"), ...discussions]
    let path = getPath(category)
    return <StyledSelectD>
        {isLoading?<LinearProgress/>:content ?
            content.map((e, i) =>
               <><div  className={"discussion-button " + e.type}
                    onClick={() => {
                        if (e.type == "discussion") {
                        }

                        setCategory(content[i])
                    }}>
                    {e.title} {e.content ? <><br />{e.content}</> : ''}
                </div></> )
            : 'leaf'}
    </StyledSelectD>
}