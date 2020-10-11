import React from 'react';
import { Button } from 'semantic-ui-react'
import '../css/Footerbar.css'

const Footerbar =() =>{
    return(     
        <footer>
            <div className='newsletter'>
                <span id='newthing'> SEARCH FOR NEW THINGS</span>
                <input type='email' placeholder='Enter Keywords' id='email'></input>
                <Button id='button'>Subscribe</Button >
                </div>
                <div className='Connect'>
                    <nobr className="connect">CONNECT US</nobr>
                    <ul>
                    <li>
                    <img src={require('../image/facebook.jpg')} id='facebook'></img>
                    </li>
                    <li>
                    <img src={require('../image/twitter-logo.png')} id='twitter'></img>
                    </li>
                    <li>
                    <img src={require('../image/Instagram.png')} id='instagram'></img>
                    </li>
                    </ul>
                </div>
            </footer>
    );
}

export default Footerbar;