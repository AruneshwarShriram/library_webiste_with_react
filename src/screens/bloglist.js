import React from "react";
import Sample from "./blogsample";

const BlogList=(()=>{
    return(
        <div>
            <div class="py-10 px-2 grid gap-2 xl:grid-cols-3">
                
                <Sample/>
                <Sample/>
                <Sample/>
                <Sample />
                <Sample />
                <Sample />
                
                
            </div>
        </div>
    )
})
export default BlogList;