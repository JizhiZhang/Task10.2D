import React from 'react';
import InputExample from './Input'
import '../css/ChoiceTask.css'

const ChoiceTask = (props) => {
    return(
    <div style={{background:"#CCCCFF", border:"#CCCCFF", color:"black"}}>
        <div className='title3' style={{background:"#99CCCC", border:"#99CCCC", color:"black"}}>
            <h2>Setting up your Task</h2>
        </div>
        <div className='SetChoice'>
        <h3 style={{paddingTop:"20px"}}>Please set up your task question and options</h3>
            <InputExample classname='option' inputid='questioninput' text='Please set up your task question' type='text' name='TaskQuestion' onChange={props.ChoiceTask}/>
            <InputExample inputid='oneinput' labelid = 'one' classname='option' text='Option one' type='text' name='OptionOne' onChange={props.OptionOne}/>
            <InputExample inputid='twoinput' labelid = 'two' classname='option' text='Option Two' type='text'  name='OptionTwo' onChange={props.OptionTwo}/>
            <InputExample inputid='threeinput' labelid = 'three' classname='option' text='Option three' type='text'  name='OptionThree' onChange={props.OptionThree}/>
        </div>
        </div>
    )
}

export default ChoiceTask