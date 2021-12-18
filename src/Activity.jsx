import React from 'react';
function getDate(iso){
    return new Date(Date.parse(iso)).toDateString().substr(4)
}
function getTime(iso){
    return new Date(Date.parse(iso)).toLocaleTimeString()
}

function Activity ({ activityData}){
    if (activityData) {
        const iso = activityData.map(call => call.created_at)
        console.log(iso)
        // const date = new Date(iso)
    }
    return (
        <div> {activityData && activityData.map(call => 
            <h1 key={call.id}>{getDate(call.created_at)} {getTime(call.created_at)}</h1>
            )}
             {/* <h1> {iso && iso.map(date => date.getFullYear())}</h1> */}
            </div>
           
           

    )
}

export default Activity;