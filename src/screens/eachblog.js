import React from "react";
import pic1 from "../images/pic1.jpg";
const EachBlogPage=((props)=>{
    return(
        <div>
            
            <div>
                <center>
                <img src={pic1} class=" py-10" height="50%" width="50%" alt="as"/></center>
                <div>
                    {props.name}
                </div>
                <div>
                    props.id
                </div>
                <div>
                    props.content
                </div>
            </div>
        </div>
        )
})
export default EachBlogPage;