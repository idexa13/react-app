import React from 'react';
import SortPosts from "../SortPosts/SortPosts";
import classes from './filter.module.css'
import Search from "../Search/Search";

const Filter = ({filter}) => {
    return (
        <div  className={classes.filter_wrapper} >
            {/*<input placeholder={"Search posts"} value={filter.query} onChange={e => setFilter({...filter,query:e.target.value})}/>*/}
            <Search placeholder={"Search"} filter={filter} value={filter.query} />
            <SortPosts default_value={'Sort'}
                        options={[{value: 'title', text: 'Sort by title'},
                            {value: 'body', text: 'Sort by body'}
                        ]}
                        value={filter.sort}
                        filter={filter}
            />
        </div>
    );
};

export default Filter;