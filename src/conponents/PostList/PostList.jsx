import React,{useContext} from 'react';
import PostItem from "../PostItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import classes from './Postlist.module.css'
import MyModal from "../MyModal/MyModal";
import {PostContext} from "../../Pages/Posts";


const PostList = ({posts, title,delete_post}) => {

    if(!posts.length) {
      return  <h1 style={{textAlign: "center"}}>Posts not found</h1>
    }

    return (
        <div  >


            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            <TransitionGroup className={classes.posts_container} >
                {posts.map( (post,index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    <PostItem delete_post={delete_post}  post={post} key={post.id} number={index+1} />
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;