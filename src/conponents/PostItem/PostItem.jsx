import React, {useContext, useMemo, useRef, useState} from 'react';
import Button from "../Button/button";
import {useNavigate, useParams} from 'react-router-dom'
import classes from './PostItem.module.css'
import PostList from "../PostList/PostList";
import {PostContext} from "../../Pages/Posts";
import MyModal from "../MyModal/MyModal";
import ProductInfo from "../ProductInfo/ProductInfo";


const PostItem = ({post, ...props}) => {

    const [bodyLength, setBodyLength] = useState(1)
    const [timeToRead, setTimeToRead] = useState(1)
    const navigate = useNavigate();
    const {setModalvisible, modalvisible, setIdproductClicked, idproductClicked} = useContext(PostContext);



    const CalcTimeToRead = (readPerMin) => {

        const minToRead = (Math.round(bodyLength / readPerMin) > 0) ? Math.round(bodyLength / readPerMin) : 1;
        setTimeToRead(minToRead);
    }

    useMemo(() => {
        CalcTimeToRead(50)
    }, [])

    const OpenModal = () => {

        setIdproductClicked(post)
        setModalvisible(true)
    }


    return (

        <div onClick={() => OpenModal()} className={classes.post}>

                <div className={classes.image_container}>
                    <img  src={post.imageLink}/>
                </div>

            <div className={classes.post__content}>
                <p><strong>{post.title}</strong></p>
                <p>{post.price.toFixed(2).replace('.', ',')} PLN</p>
            </div>

            <div className={classes.btn_container}>
                <Button className={classes.post_btns}>
                    Add to cart
                </Button>
            </div>


        </div>

    );
};

export default PostItem;