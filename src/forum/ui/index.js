import React, { useState } from 'react';
import { forumStructure } from '../api/initializers'
import Layout from "./layout"
import DiscussionSelect from "./discussionSelect"
import Discussion from "./discussion"
export default Forum

function Forum({ user }) {
    let [category, setCategory] = useState(forumStructure)
    const [scrolledToBottom, setScrolledToBottom] = useState(false)
    const { threadID } = category
    return (
        <Layout {...{category, setCategory,setScrolledToBottom, scrolledToBottom
        }}>
            {category.type == "category" ?
                <DiscussionSelect {...{ category, setCategory, }} />
                : <Discussion {...{ scrolledToBottom, threadID, user }} />
            }
        </Layout>
    )
}