import React, {useContext, useEffect, useMemo, useRef, useState} from "react";
import "../styles/App.css"
import PostList from "../conponents/PostList/PostList";
import AddPostItem from "../conponents/AddPostItem/AddPostItem";
import Button from "../conponents/Button/button";
import Filter from "../conponents/Filter_component/filter";
import {UseFilteredPosts} from '../hooks/useSort'

import {CountPages} from '../utils/CountPages'
import Pagination from "../conponents/Pagination/pagination";
import PostService, {ItemsData} from "../API/PostService";
import MyModal from "../conponents/MyModal/MyModal";
import ProductInfo from "../conponents/ProductInfo/ProductInfo";
import {CartContext} from "../App";
import {v4 as uuid4} from 'uuid' ;


export const PostContext = React.createContext('')

function Posts() {


    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({query: '', sort: ''})
    const [modalvisible, setModalvisible] = useState(false)
    const sortedList = UseFilteredPosts(posts, filter.sort, filter.query)
    const [isPostLoaded, setIsPostLoaded] = useState(false)

    // product added to cart {id,size}
    const {cartItems, setCartItems} = useContext(CartContext);


    // Grab id of clicked product to render modal
    const [idproductClicked, setIdproductClicked] = useState();

    // selected value of size
    const [productOptions, setProductOptions] = useState('');

    // limits and page number for DB request
    const [postsLimit, setPostsLimit] = useState(15);

    // Count of pages to draw
    const [pagesCount, setPagesCount] = useState(0);
    const [actualPage, setActualPage] = useState(1);
    const pagesCountArr = []


    const AddPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalvisible(false)
    };

    const CalculateContent = (posts,limit,page) => {

        if (page === 1) {
            posts.slice(0,limit)
        }

        const start =  limit*page - limit
        const end = limit*page ;

        return posts.slice(start,end)


    }


    async function fetchPosts() {

        setIsPostLoaded(false)




        // const ownPosts = PostService.GetOwnPosts()
        // const response = await PostService.getAll(postsLimit, actualPage)

        // const responseWithImage = response.data.map(element => {
        //     return {
        //         ...element,
        //         imageLink: postImage,
        //         isFeatured: false,
        //         price: 79.90,
        //         size,
        //         material: '100% cotton'
        //     }
        // })
        const response1 = ItemsData
        const response2 = response1.map((element) => {
                return {...element, id: uuid4()}
            }
        )
        const response = [...response1,...response2]

        const result = CalculateContent(response,postsLimit,actualPage)

        setPosts(result)
        // // only featured posts
        // if (ownPosts.length >= responseWithImage.length) {
        //
        //     setPosts(ownPosts)
        // }
        // // featured + other posts
        // else if (ownPosts.length < responseWithImage.length) {
        //     const normalPostsLeft = responseWithImage.length - ownPosts.length;
        //     const result = [];
        //     for (let i = 0; i < normalPostsLeft; i++) {
        //         result.push(responseWithImage[i])
        //     }
        //     setPosts([...ownPosts, ...result])
        // }
        //
        // // no featured posts
        // else if (ownPosts.length === 0) {
        //     setPosts(responseWithImage)
        // } else {
        //     throw new Error('posts merge error')
        // }

        setIsPostLoaded(true)
        const totalCount = Object.keys(response).length
        setPagesCount(CountPages(totalCount, postsLimit))

    }

    for (let i = 0; i < pagesCount; i++) {
        pagesCountArr.push(i + 1)
    }


    useEffect(() => {
        fetchPosts()
    }, [actualPage])


    const DeletePost = (posts_toDelete, e) => {
        let result = posts.filter(e => e.id !== posts_toDelete.id)
        setPosts(result);
        e.stopPropagation();

    };

    const TextFunction = () => {
        console.log(sortedList);
    }

    return (

        <PostContext.Provider
            value={{
                setFilter,
                setModalvisible,
                modalvisible,
                setIdproductClicked,
                productOptions,
                setProductOptions,
                cartItems,
                setCartItems
            }}>

            <div className="App">


                <MyModal setModalvisible={setModalvisible} modalvisible={modalvisible}>
                    <ProductInfo post={idproductClicked}/>
                </MyModal>


                <Button onClick={TextFunction}>Console.log</Button>

                
                <hr/>

                <Filter filter={filter}/>
                {isPostLoaded
                    ? <div>
                        <PostList delete_post={DeletePost} posts={sortedList} key={posts.id}
                                  title="Products list"/>
                        <Pagination pagesCountArr={pagesCountArr} actualPage={actualPage}
                                    setActualPage={setActualPage}/>
                    </div>

                    : <h1 style={{textAlign: 'center'}}>Is loading</h1>
                }

            </div>
        </PostContext.Provider>

    );
}

export default Posts;
