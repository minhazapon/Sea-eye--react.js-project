import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';


const Slide = () => {
    return (
        <div className=" ml-10 mr-10 mt-10 mb-10 bg-slate-100 p-10 ">


            <div className=' flex-col md:flex-row lg:flex-row'>
              

            <>

            
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                <SwiperSlide>   
                   
                   <div className=' flex justify-center'>
                   <div className=" bg-no-repeat bg-contain  p-36 rounded-xl text-white     "  style={{
                   backgroundImage: "url(  https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1370.jpg?t=st=1721107459~exp=1721111059~hmac=22034720beeb2489be7c69b9cac2bfd0f31e8b7ed30acd3135be4daaff8dc7bd&w=740  )",
                   }} >
                   <div className=" bg-gradient-to-r from-black p-5 mb-10">
                   <h1 className=" text-center  text-xl">Lorem ipsum dolor, sit amet <br></br>consectetur adipisicing elit. Eos quasi<br></br> laudantium est neque esse optio nesciunt mollitia ab.</h1>
                   <p className="  text-center mt-3 ">NICK ANDERSON<br></br>
                   B4 LOGISTICS, INC.</p>
                   <div className=' flex justify-center mt-10'>
                    <button className=' btn  bg-[#00b3fc] text-white '>Read More</button>
                   </div>
                   </div>
                   </div>
                   </div>


                </SwiperSlide>

                  


                <SwiperSlide>   

                <div className=' flex justify-center'>
                   <div className=" bg-no-repeat bg-contain  p-36 rounded-xl text-white     "  style={{
                   backgroundImage: "url(  https://img.freepik.com/premium-photo/rear-view-warehouse-engineer-worker-working-industrial-container-yard_693425-13930.jpg?w=826  )",
                   }} >
                   <div className=" bg-gradient-to-r from-black p-5 mb-10">
                   <h1 className=" text-center  text-xl">Lorem ipsum dolor, sit amet <br></br>consectetur adipisicing elit. Eos quasi<br></br> laudantium est neque esse optio nesciunt mollitia ab.</h1>
                   <p className="  text-center mt-3 ">NICK ANDERSON<br></br>
                   B4 LOGISTICS, INC.</p>
                   <div className=' flex justify-center mt-10'>
                    <button className=' btn  bg-[#00b3fc] text-white '>Read More</button>
                   </div>
                   </div>
                   </div>
                   </div>
             
                </SwiperSlide>


                <SwiperSlide>  

                    <div className=' flex justify-center'>
                   <div className=" bg-no-repeat bg-contain  p-36 rounded-xl text-white     "  style={{
                   backgroundImage: "url(  https://img.freepik.com/premium-photo/loaded-container-cargo-ship-is-seen-front-as-it-speeds-ocean-generative-ai_438099-11666.jpg?w=740  )",
                   }} >
                   <div className=" bg-gradient-to-r from-black p-5 mb-10">
                   <h1 className=" text-center  text-xl">Lorem ipsum dolor, sit amet <br></br>consectetur adipisicing elit. Eos quasi<br></br> laudantium est neque esse optio nesciunt mollitia ab.</h1>
                   <p className="  text-center mt-3 ">NICK ANDERSON<br></br>
                   B4 LOGISTICS, INC.</p>
                   <div className=' flex justify-center mt-10'>
                    <button className=' btn  bg-[#00b3fc] text-white '>Read More</button>
                   </div>
                   </div>
                   </div>
                   </div> 

                </SwiperSlide>


                <SwiperSlide>   

                <div className=' flex justify-center'>
                   <div className=" bg-no-repeat bg-contain  p-36 rounded-xl text-white     "  style={{
                   backgroundImage: "url(  https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1374.jpg?t=st=1721109343~exp=1721112943~hmac=9e3df022b8239924d516d31958b58963ef07ca529b4d84b8605aac041d5826ab&w=740  )",
                   }} >
                   <div className=" bg-gradient-to-r from-black p-5 mb-10">
                   <h1 className=" text-center  text-xl">Lorem ipsum dolor, sit amet <br></br>consectetur adipisicing elit. Eos quasi<br></br> laudantium est neque esse optio nesciunt mollitia ab.</h1>
                   <p className="  text-center mt-3 ">NICK ANDERSON<br></br>
                   B4 LOGISTICS, INC.</p>
                   <div className=' flex justify-center mt-10'>
                    <button className=' btn  bg-[#00b3fc] text-white '>Read More</button>
                   </div>
                   </div>
                   </div>
                   </div>

                </SwiperSlide>
             
              </Swiper>
            </>

            













            </div>
            
        </div>
    );
};

export default Slide;