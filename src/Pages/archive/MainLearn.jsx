import React, {useState} from 'react';
import styles from './testComponents/styles.module.css'
import {pagesList} from "../PagesList";


const MainLearn = () => {


    const pages =  pagesList ;
    console.log(pages)


    return (
        <div>
            <h1>This is main page</h1>
            <h2>Learn post list </h2>
            {pages.map(page =>
                <page.componentName key={page.id}/>
            )}
        </div>
    );
};

export default MainLearn;