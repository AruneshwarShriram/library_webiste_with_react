import React from "react";

const Sample=(()=>{
    var title="Balakumaran's Writing Style"
    return(
        <div class="px-5 py-5 ">
            <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 border-2" style={{borderRadius: '15px'}}>
                <div class="xl:w-6/9 h-100 md:w-3/3 h-100 p-4 border-indigo-300">
                    <div class="bg-white p-6 rounded-lg ">
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
                        <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6 hover:bg-white" src="https://i.pinimg.com/564x/84/58/0d/84580d13ddf1644245979e6e5a3a1ae6.jpg" alt="a"/>
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">"13 October 2021"</h3>
                        
                        <p class="leading-relaxed text-base">Balakumaran started his writing career as a poet. There was little or no money in it, and therefore he branched out as a short story writer, finally ending up as a novelist.</p>
                        <br/>
                        <font class="text-1xl  text-blue-600 font-sans">Continue Reading...</font>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Sample