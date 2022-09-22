import React from 'react';
import styles from "./testComponents/styles.module.css";

const TestStopProp = () => {
    return (
        <div className={styles.first_div} onClick={() => { console.log('first') }}>
            <div className={styles.second_div} onClick={e => { console.log('second'); }}>
                <div className={styles.third_div} onClick={e => {  console.log('third')}}>

                </div>
            </div>
        </div>
    );
};

export default TestStopProp;