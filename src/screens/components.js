import React from "react";
import EachBlogPage from "./eachblog";
import Nav from "./nav";

function History(){
    return(
        <div >
            <Nav/>
            <Oruorublog/>
            <div class="py-5">
                <h1 class="text-left text-gray-900 font-semibold text-4xl px-10 py-10">
                    Origin
                </h1>
                <p class="font-semibold px-10">
                    In recognition of the importance of the Library Service, it was decided to establish a First True Public Library in Tamil Nadu during the 19th century by an enlightened Administrator Lord Connemara, the then Governor of Madras during 1886-1890. 
                    The Foundation Stone for the Library was laid on 22nd March 1890 and was formally opened on 05-12-1896. 
                    The Library so founded was named after Lord Connemara to perpetuate his memory in Madras in recognition of his efforts.
                </p>
                <h1 class="text-left text-gray-900 font-semibold text-4xl px-10 py-10 ">Buildings</h1>
                <p class="font-semibold px-10" >
                    Designed by H.Irving, the Consulting Architect to the Government of Madras, the Connemara Public Library is a Semi-Circle End oblong building constructed in Indo-saracenic style.
                    It is a magnificent hall with a splendid reading room and beautiful teak wood book-shelves. 
                    To watch its ceiling is an aesthetic appearance to our eyes. 
                    The Roof is truncated semi-circle. The truncated top has a wooden ceiling but the two curved sides are made by colored glass pieces artistically cemented to one another. 
                    Ornamental acanthus leaves and flowers adorn with marble slabs brought from Krishna District through the Buckingham Canal in boats. 
                    This Building is renovated by the Archaeological Survey of India, Chennai with an expenditure of Rs. 1.21 crores, to preserve the cultural heritage of India, with the financial assistance from the State and Central Governments.
                    To cope up with the increasing stock, a three-storied building with 71, 700 sq.ft. was constructed in 1973. Further to accommodate the increased stock of books another three-storied building with 21, 823 sq.ft. was added in 1999.
                </p>
                <h1 class="text-left text-gray-900 font-semibold text-4xl px-10 py-10 ">
                    Growth
                </h1>
                <p class="font-semibold px-10">
                    The Library became the State-Central Library with effect from 1st April 1950 under the provisions of the Tamil Nadu Public Libraries Act, 1948. 
                    And from 10th September 1955, it became one of the Four Depositories for Indian Publications under the Provisions of Delivery of Books and Newspapers (Public Libraries) Act of 1954, as amended. 
                    In 1955, the Library became UNESCO Information Centre to serve as Depository for selected Publications of UN and its allied agencies. I
                    t also serves as Depository for Asian Development Bank Publications since 1992.
                </p>
                <h1 class="text-left text-gray-900 font-semibold text-4xl px-10 py-10 ">Collection</h1>
                <p class="font-semibold px-10">
                    Till the declaration of this library as one of the Four Depository Centers under Delivery of Books Act, 1954 it had received four copies of publications published in the state under the Provisions of the Press and Registration of Books Act. 
                    Under the provisions of Delivery of Books and Newspapers (Public Libraries) Act, every Publisher in India has to send compulsorily a copy of each publication to the Connemara Public Library.

                    Apart from this a good number of books and periodicals of UN and its Specialized organs and Asian Development Bank are also received. 
                    Further a good number of books are added every year by purchasing from the funds made available to this Library in the Budget. 
                    By this, the Collection of this library grew very fast creating the problem of space to accommodate the documents. At present the stock of books in the Library is nearly 9 Lakhs.
                </p>
            </div>

        </div>)
}
function MenuBar(){
    return(
        <div class="py-3 px-3 h-25">
            <nav class="flex justify-between bg-blue-200 items-center">
                <div class="px-10 py-3 justify-evenly font-semibold text-1xl">
                    <div class="flex-col">
                    <div class="py-2"><a class="px-4 text-3xl font-medium" href="/null">About the Library</a>
                            </div></div>
                    <hr class="border-blue-900 border-1"/>
                <div class="px-0 py-4 text-1xl">
                
                <a href="/null" class="py-2 px-3 hover:text-pink-400">Services</a>
                <a class="px-4 hover:text-yellow-400 py-2" href="/null">Sections</a>
                <a class="px-3 py-4 hover:text-pink-400 " href="/null">Reviews</a>
                <a class="px-4 py-4 hover:text-green-400" href="/null">Research</a>
                <a class="px-4 py-4 hover:text-blue-400" href="/null">FAQ</a>
                <a class="px-4 py-4 hover:text-red-400" href="/null">Mail Us</a></div>
                    
                    <hr class="border-blue-900 border-1" />
                    
                </div>
                <div class="flex flex-row">
                <img src="https://i.pinimg.com/originals/9e/38/ab/9e38ab04fc33968643ac727c3e35402d.jpg" height="250" width="250" class="px-2 py-1" alt="as"/>
                <img src="https://i.pinimg.com/564x/f5/a1/9d/f5a19def0c8f87fdf2c327c7f4c1d56d.jpg" height="250" width="250" class="px-4 py-2 left-20" alt="as"/>
                </div>

            </nav>
        </div>
    )
}

function TimingandLoc(){
    return(
        <div class="m-0 px-10 py-20  bg-indigo-900 flex-row">
            <div>
                
                <div class="float-right px-9">
                    <b class="text-2xl">Address</b>
                    <p class="text-1xl font-medium">Museum Compound, Pantheon Road, <br/>Egmore, Chennai, Tamil Nadu 600008</p>
                <br/>
                    <div>
                        <b class="text-2xl">Phone No.</b>
                        <p class="text-1xl font-medium">
                            <a href="call.com">044-28193751</a>
                        </p>
                    </div>
                    <br/>
                <div class="py-2">
                        <b class="text-2xl">E-Mail</b>
                        <p class="text-1xl font-medium">
                            <a href="mailto: lbrncplchn.dopl@tn.gov.in">lbrncplchn.dopl@tn.gov.in</a>
                        </p>
                </div>
                    
                </div>
                
                <h1 class="h1 mb-1 font-bold text-4xl">Hours</h1>
                <ul class="clean">
                    <li>
                        <strong class="text-2xl">All 7 days : </strong>
                        <strong class="text-2xl">8am - 8pm </strong>
                    </li>
                    

                </ul>
                <br/>
                <b class="font-bold  text-4xl py-4">Holiday Hours</b> <br />
                <p class="text-2xl py-3">Library will not function on Government Holidays</p>
                
            </div>
            <br/><br/>
            
        </div>
    )
}
function Sections(){
    return(
        <div>
            <div>

            </div>
        </div>
    )
}
function Oruorublog(){
    var name = "Shriram"
    var id = "13062002";
    var content = "Shriramajayamah";
    return(
        
        <EachBlogPage name={name} id={id} content={content}/>

    )
}

export { History, MenuBar, TimingandLoc, Sections,Oruorublog}