import React,{useState,} from 'react';
const ShowHideDetails = () => {
    const [showText,hideText]=useState(false);
    const[add,minus]=useState(true);
    return(
        <div>
            <h2>Hide and show</h2>
            <button className="plus" onClick={()=>{hideText(!showText);minus(!add)}}>{add? 'ShowDetails':'HideDetails'}</button>{showText&&
        <div >
            <p>See my number :+48 9876543210</p>
        </div>
        }
        </div>
    )
}

export default ShowHideDetails;
