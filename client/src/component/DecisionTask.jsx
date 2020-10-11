import React from 'react';
import InputExample from './Input'
import Form from 'react-bootstrap/Form'

import '../css/DecisionTask.css'

const DecisionTask = (props) => {
    return(
    <div style={{background:"#CCCCFF", border:"#CCCCFF", color:"black"}}>
        <div className='title3' style={{background:"#99CCCC", border:"#99CCCC", color:"black"}}>
            <h2>Setting up your Task</h2>
        </div>
        <div className='Decision'>
        <h3 style={{paddingTop:"20px"}}>Please set up your task question</h3>
            <InputExample inputid='decision' text='Please set up your task question' type='text' onChange={props.DecisionTask} name='TaskQuestion'/>
            <InputExample  type='radio' text2='Yes' name = 'Judgement' onChange={props.YesDecision} value='Yes'/>
            <InputExample  type='radio' text2='No' name = 'Judgement' onChange={props.NoDecision} value='No'/>
        </div>
        </div>
    )
}

export default DecisionTask