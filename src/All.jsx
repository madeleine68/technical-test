import React, { useState } from 'react';
import { getTime, getDate, toggle } from './helper';

function All ({ grouped, activityData }){
    const [archive, setArchive] = useState();
 
    return (
        <div>
        <table className='table' > 
            {grouped && Object.keys(grouped).map((call, index) => 
            <div key={index}>
                <th className='tableHeader'>{getDate(call)}</th>
                {grouped[call].map((list) => {
                    if(list.is_archived==false){   
                    return(
                        <div key={list.id} className='tableRow' > 
                            <div className='fromNumber'>
                                {list.from}
                                <div className='toNumber'>tried to call on {list.to}</div>
                                
                            </div>
                            <div>
                                {getTime(list.created_at)}
                                <button onClick={()=>{    
                                    setArchive(toggle(activityData,list.id)) 
                                }}> Archive </button>
                            </div>   
                        </div>
                    )}
                })
                }       
            </div>
            )}      
        </table>
        </div>
        
    )
}

export default All;