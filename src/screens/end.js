import React from "react";
import chennai from "../images/chennai.png";

const End=(()=>{
    return(
        <div>
            <div class="flex-col bg-gray-500 flex-1">
            <div>
                    <div class="flex-col float-right p-10 font-normal ">
                        <div class="flex-row py-2">
                            Terms and Conditions
                        </div>
                        <div class="flex-row py-2">
                            About
                        </div>
                        <div class="flex-row  py-2">
                            Governance
                        </div>
                    </div>
                    <div class="flex-col float-right p-10 font-normal">
                        <div class="flex-row py-2">
                            Privacy & Policy
                        </div>
                        <div class="flex-row py-2">
                            Cookies
                        </div>
                        <div class="flex-row py-2">
                            About Tamil Libraries
                        </div>
                        <br/>
                        <div class="py-1"><a href="www.com">Insta</a></div>
                        <div class="py-1"><a href="www.com">FB</a></div>
                        <div class="py-1"><a href="www.com">Twitter</a></div>
                        <div class="py-1"><a href="www.com">Pinterest</a></div>
                        
                    </div>
                    
                <div class="flex-row">
                <div class=" font-normal text-4xl px-20 py-10 font-family: 'Josefin Sans', cursive;">
                    Connemara<br/>Library<br/><font class="font-semibold">Chennai</font>
                </div>
                <div class=" flex-col m-0">
                    <img  class="px-20 py-4" src={chennai} alt="hk" height="500" width="500"/>
                </div>
                        
                </div>
                
                

            </div>
                
                
            <div>
            
                
            </div>

            </div>
        </div>

    )
})
export default End;