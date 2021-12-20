import { useState, useEffect } from "react";

export function getDate(iso){
    return new Date(Date.parse(iso)).toDateString().substr(4)
}
export function getTime(iso){
    return new Date(Date.parse(iso)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
}

export function group(activityData){
    const result = activityData.reduce((groups,item) => {
            const date = item.created_at.split('T')[0];
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(item);
            return groups;
        }, [])
        return result;
}

export function toggle (activityData,id){   
    for (const item of activityData){
        if (item.id == id){
            item.is_archived =! item.is_archived
        }
    }
    return activityData 
} 

// export function archivedHandler(index) {
//    const [archived, setArchived] = useState(false);
//    const newArchived = [...archived];
//    console.log('+++++++',newArchived)
//    newArchived[index].is_archived =! newArchived[index].is_archived;
//    setArchived(newArchived)
    // const updatedCall = {...selectedCall, is_archived: !item.is_archived };
    // setArchived(prev =>({
    //     ...prev,
    //     updatedCall
    // }))
    // setArchived(activityData && activityData.map(item => {
    //     if (item.id === archived.id) {
    //         return {
               
    //              ...item,is_archived: !item.is_archived 
    //         } 
    //     }
    //     return item
    // }))

//    const selectedCall = activityData.find(call => call.id === id);
//    selectedCall.is_archived = !selectedCall.is_archived
//    return selectedCall
// }