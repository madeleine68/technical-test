import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faGear } from '@fortawesome/free-solid-svg-icons'
import {  faUser, faCircleDot  } from '@fortawesome/free-regular-svg-icons';
library.add(faPhone, faUser, faGear, faCircleDot);


function Footer({ activityData }){
        
    const numberOfCall = activityData ? Object.keys(activityData).length : null
    
    return (
        <div className='footer'>
            <div style={{ position: "relative" }}>
                <FontAwesomeIcon icon={ faPhone } size="2x" />
                <span className="callNumber"style={{ position: "absolute" }}>{numberOfCall}</span>
            </div>
            <FontAwesomeIcon icon={ faUser } size="2x" />
            <img src="public/images/keypad.png" alt="keypad" className='keypad'/>
            <FontAwesomeIcon icon={ faGear } size="2x" />
            <FontAwesomeIcon icon={ faCircleDot } size="2x" color="#3FBC20"/>
        </div>
    )
}

export default Footer;


