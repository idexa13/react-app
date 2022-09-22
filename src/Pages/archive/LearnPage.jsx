import React from 'react';
import {pagesList} from '../PagesList'
import {useParams} from "react-router-dom";
import TestStopProp from "./TestStopProp";


const LearnPage = () => {


    const params = useParams()


    return (
        <div>
            {pagesList.filter(e => e.link === params.name).map(e =>
                < e.componentName key={e.id}/>
            )}
            <div>commnets</div>

        </div>
    );
};

export default LearnPage;