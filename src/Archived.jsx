import React, { useState } from 'react';
import { getTime, getDate, toggle } from './helper';

function Archived ({ grouped, activityData }){
    const [archive, setArchive] = useState();
 
    return (
        <div>
        <table className='table' > 
            {grouped && Object.keys(grouped).map((call, index) => 
            <div key={index}>
                <th className='tableHeader'>{getDate(call)}</th>
                {grouped[call].map((list) => {
                    if(list.is_archived==true){   
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
                                }}> Unarchive </button>
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

export default Archived;