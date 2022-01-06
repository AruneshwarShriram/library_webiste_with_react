/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import Nav from "./nav";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
//import logo from "../logo.svg";

import tnicon from "../images/tnicon.png";
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import End from "./end";
import ReviewsonPage from "./reviewsonpage";
import Blog from "./blog";
import { MenuBar, TimingandLoc } from "./components";
/* https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react/ */
const Home = (()=>{
   
    return(
        <div>
            <Nav/>
            <MenuBar />
            <header>
            <div>

            
            </div>
            </header>
            <div class="flex px-2 py-1">
                <img src={pic2} alt="iu" width="100%"/>
                
            </div>
            
            <br/>
            <div>
                <div class="border-2 border-red-400 bg-red-200">
                    <div class="flex justify-evenly py-10  border-2 border-pink-400">
                    <div>
                        <h1 class="text-purple-400 font-bold text-3xl">Blog</h1> 
                    </div>
                    
                    </div>
                    <div class="flex-wrap px-20 py-0  justify-evenly m-0">
                        <div class=" flex justify-evenly">
                            <div>
                        <a href="youtube.com">
                        <div class="px-20 ">
                            <img src={tnicon} height="250" width="250"/>
                            <br/>
                            <div class=" text-left font-semibold text-xl">History of Connemara Library</div>
                                    </div></a></div>
                            <br />
                                    
                        <div class="py-0">
                                
                                <div class="py-4">
                                    <a href="youtube.com">
                                        <div class="px-20 flex-row">
                                            <img class="float-left" src={tnicon} height="100" width="100" />
                                            <br />
                                            <div class=" px-5 py-1 font-semibold text-xl">Kalki's Writing Style</div>
                                        </div>
                                    </a>
                                </div>
                                <br/>
                                
                                
                                <div class="py-4">
                                    <a href=".com">
                                        <div class="px-20 flex-row">
                                            <img class=" float-left"src={tnicon} height="100" width="100" />
                                            <br />
                                            <div class=" px-10 py-2 font-semibold text-xl">October Recomendations</div>
                                        </div>
                                    </a>
                                </div>
                                <br />
                                <div class="py-4">
                                    <a href="youtube.com">
                                        <div class="px-20 flex-row">
                                            <img class="float-left" src={tnicon} height="100" width="100" />
                                            <br />
                                            <div class=" px-5 py-0 font-semibold text-xl">What is your next book?</div>
                                        </div>
                                    </a>
                                </div>
                                <br />
                               
                        </div>
                        </div>

                    </div>
                    <div class="py-4">
                        <center class=" justify-center font-semibold text-2xl text-yellow-600">
                            <button class="border-4  px-4 py-2 border-gray-800 font-semibold" style={{ borderRadius: 10 }}>
                                See More...
                            </button>

                        </center></div>
                </div>
            </div>
            <br/>
            <div>
                <div class="border-2 border-red-400 bg-pink-200">
                    <div class="flex justify-evenly py-10  border-2 border-pink-400">
                        <div>
                            <h1 class="text-purple-400 font-bold text-3xl">News</h1>
                        </div>

                    </div>
                    <div class="flex-wrap px-10 py-20  justify-evenly m-0">
                        <div class=" flex justify-evenly">
                            <div>
                                <a href="youtube.com">
                                    <div class="px-20 ">
                                        <img src="https://cdn.shopify.com/s/files/1/0285/2821/4050/products/9780062943477.jpg" height="250" width="250" />
                                        <br />
                                        <div class=" text-left font-semibold text-xl">History of Connemara Library</div>
                                    </div></a></div>
                            <br />

                            <div class="py-0">

                                <div class="py-4">
                                    <a href="youtube.com">
                                        <div class="px-20 py-6 flex-row">
                                            <img class="float-left " src="https://cdn.shopify.com/s/files/1/0285/2821/4050/products/9780062316110_d94828c6-e290-4124-89ae-a4614b5c7a82.jpg" height="100" width="100" />
                                            <br />
                                            <div class=" px-5 py-1 font-semibold text-xl">Works of Balakumaran</div>
                                        </div>
                                    </a>
                                </div>
                                <br />


                                <div class="py-4">
                                    <a href="youtube.com">
                                        <div class="px-20  py-5 flex-row">
                                            <img class=" float-left" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593231524_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D.jpg" height="100" width="100" />
                                            <br />
                                            <div class=" px-10 py-2 font-semibold text-xl">October Recomendations</div>
                                        </div>
                                    </a>
                                </div>
                                <br />
                                <div class="py-4">
                                    <a href="youtube.com">
                                        <div class="px-20 py-6 flex-row">
                                            <img class="float-left" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593530290_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D.jpg" height="100" width="100" />
                                            <br />
                                            <div class=" px-5 py-2 font-semibold text-xl">What is your next book?</div>
                                        </div>
                                    </a>
                                </div>
                                <br />

                            </div>
                        </div>

                    </div>
                    <div class="py-4">
                        <center class=" justify-center font-semibold text-2xl text-yellow-600">
                            <button class="border-4  px-4 py-2 border-gray-800 font-semibold" style={{borderRadius:10}}>
                                See More...
                            </button>

                        </center></div>
                </div>
            </div>
            <ReviewsonPage/>
            <TimingandLoc/>
            <End/>
        </div>
        
        
)})
export default Home;