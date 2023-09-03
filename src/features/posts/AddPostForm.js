import React, {useState} from 'react';
import { useDispatch } from "react-redux";

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content)
            )
            setTitle("");
            setContent("");
        }
    }

    return (
        <section>
            <h2>Add New Post</h2>
            <form>
                <label htmlFor="postTytle" >Post Title: </label>
                <input
                    id="postTytle"
                    type="text"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />

                <label htmlFor="postContent" >Post Content: </label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                />

                <button
                    type="button"
                    onClick={onSavePostClicked}
                >
                    Save Post
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;