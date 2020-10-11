import React from 'react';
import InputExample from './Input'

import '../css/SentenceTask.css'

const SentenceTask = (props) => {
    return(
    <div>
        <div className='title3'>
            <h2>Setting up your Task</h2>
        </div>
        <div className='Sentence'>
        <h3 style={{paddingTop:"20px"}}>Please set up your task question</h3>
            <InputExample inputid='questioninput' text='Please set up your task question' type='text' onChange={props.SentenceTask} name='TaskQuestion'/>
        </div>
        </div>
    )
}

export default SentenceTask