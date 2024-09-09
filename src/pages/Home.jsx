import React from 'react'
import NavBar from '../components/NavBar'
import Ai from '../images/AI.png'
import videochat from '../images/videochat.png'
import users from '../images/users.png'
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/16/solid'
import shopify from '../images/Shopify.com svg.png'
import coinbase from '../images/Coinbase svg.png'
import dropbox from '../images/Dropbox .png'
import intercom from '../images/Intercom svg.png'
import marvel from '../images/Marvel svg.png'
import automatic from '../images/Automattic svg.png'
import arrow from '../images/Hand-drawn arrow.png'
import video from '../images/video-recorder.png'
import record from '../images/recording-01.png'
import people from '../images/people.png'
import calendar from '../images/calendar.png'
import lock from '../images/lock-unlocked.png'
import content from '../images/Contents.png'
import avatar from '../images/Avatar.png'
import minus from '../images/minuscircle.png'
import plus from '../images/pluscircle.png'
import check from '../images/check.png'
import screen from '../images/Screen mockup (REPLACE FILL).png'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import apple from '../images/Mobile app store badge.png'
import google from '../images/google.png'
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import discord from '../images/discord.png'
import youtube from '../images/youtube.png'





const Home = () => {
  return (
   <div className='bg-hero-image'>
    <NavBar />
    <div className='md:flex justify-between mx-10 mt-16 p-2 gap-9'>
            <aside className=' mt-[2rem]'>
                 <h1 className='font-bold leading-10 md:w-96 text-4xl'>Uniting the world, one video call at a time</h1>
                 <p className='mt-[1rem] text-lg text-[#667085]'>Experience the future of communication with ClearLink–<br/>where crystal-clear video conferencing meets<br/>unparalleled simplicity.</p>

                <div className='flex gap-7 mt-9'>
                <button className='bg-[#175CD3] py-2 px-3 rounded-3xl text-sm font-semibold text-slate-50'>Start your free trial</button>
                 <button className='flex gap-3 text-[#175CD3] text-sm mt-2 font-semibold'>
                    <img src={Ai} alt='' className=''/>
                    Discover AI assistant
                 </button>
                </div>
                <div className='flex mt-9 gap-2'>
                    <div>
                    <img src={users} alt='' width='100'/>
                    </div>
                    <div className=''>
                        <div className='flex text-[#FDB022]'>
                        <StarIcon className='w-4'/>
                        <StarIcon className='w-4'/>
                        <StarIcon className='w-4'/>
                        <StarIcon className='w-4'/>
                        <StarIcon className='w-4'/>
                         <span className='text-black text-xs font-semibold ml-1'>5.0</span>
                        </div>
                        <p className='text-sm'>from 3,000+ reviews</p>
                    </div>
                </div>
            </aside>
            <aside>
                 <img src={videochat} alt='' width='500'/>
            </aside>
        </div>
    <div className='text-center'>
            <p className='text-[#475467]'>Join 1,500+ companies already video conferencing the ClearLink way</p>
            <div className='flex flex-wrap justify-center gap-9 mt-8'>
               <div><img src={shopify} alt=''/></div>
               <div><img src={coinbase} alt=''/></div>
               <div><img src={dropbox} alt=''/></div>
               <div><img src={intercom} alt=''/></div>
               <div><img src={marvel} alt=''/></div>
               <div className='mt-2'><img src={automatic} alt=''/></div>
            </div>
        </div>
        <div className='flex mt-[5rem] gap-[7rem]'>
           <div className='pl-[4rem]'>
           <h3 className='text-[#1730d3] text-sm font-semibold'>The ClearLink Advantage</h3>
            <h1 className='text-4xl font-semibold mt-3'>Why choose ClearLink?</h1>
            <p className='mt-[1rem]'>In a world where connection is everything, ClearLink takes the lead. Our<br/> cutting-edge video conferencing app offers:</p>
           </div>
           <div>
          <img src={arrow} alt='' className='hidden md:flex'/>
           </div>
        </div>
        <div className='md:flex gap-[3rem] ml-7 mt-5'>
           <aside className=' pl-[2rem]'>
                <div className='md:flex gap-[4rem]'>
                <div>
                   <div className='border bg-slate-200 w-8 h-8 rounded-full'>
                    <img src={video} alt='' className='p-1'/>
                   </div>
                   <h2 className='font-bold mt-6'>Crystal-clear HD video</h2>
                   <p className='text-[#475467] mt-2'>No more pixelation or blurriness – just<br/>stunning, lifelike clarity that brings <br/>your team closer in meetings.</p>
                </div>
                <div className=''>
                    <div className='border bg-slate-200 w-8 h-8 rounded-full'>
                          <img src={record} alt='' className='p-1'/>
                    </div>
                    <h2 className='font-bold mt-6'>Noise-canceling audio</h2>
                    <p className='text-[#475467] mt-2'>Say goodbye to distractions with our<br/>advanced audio tech for crisp,<br/> interruption-free conversations.</p>
                </div>
                </div>
                <div className='md:flex gap-[2rem] mt-[3rem] mb-5'>
                    <div>
                       <div className='border bg-slate-200 w-8 h-8 rounded-full '>
                       <img src={calendar} alt='' className='p-1'/>
                       </div>
                       <h2 className='font-bold mt-6'>Scheduling made easy</h2>
                       <p className='text-[#475467] mt-2'>Streamline your agenda with ClearLink's<br/>intuitive scheduling. Set up meetings,<br/>send invitations, and receive reminders in<br/>one place.</p>
                    </div>
                    <div>
                        <div className='border bg-slate-200 w-8 h-8 rounded-full'>
                        <img src={lock} alt='' className='p-1'/></div>
                        <h2 className='font-bold mt-6'>Bank-grade security</h2>
                        <p className='text-[#475467] mt-2'>Your privacy is our priority with bank-<br/>grade security protocols safeguarding<br/>your meetings and data from unwanted <br/>intruders.</p>
                    </div>

                </div>
           </aside>
           <aside>
            <img src={people} alt='' width='400'/>
           </aside>
        </div>
        <div className='md:flex mt-[5rem] pl-[3rem] gap-[8rem]'>
            <div className=''>
               <div><img src={shopify} alt='' width='80'/></div>
               <div className='flex text-[#FDB022] mt-9'>
                <StarIcon className='w-4'/>
               <StarIcon className='w-4'/>
               <StarIcon className='w-4'/>
              <StarIcon className='w-4'/>
              <StarIcon className='w-4'/>
               </div>
               <h1 className='font-semibold text-3xl mt-8 md:w-96'>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and<br/>top-notch security make it essential for our team.</h1>
               <div className='flex mt-10'>
                <div className=''>
                    <img src={avatar} alt='' className=''/>
                </div>
                <div className='ml-2'>
                    <h3 className='font-bold'>Sarah Thompson</h3>
                    <p className='text-sm'>Project Manager, Shopify</p>
                </div>
                <div className='ml-[7rem] border w-8 h-8 rounded-full bg-white p-2 border-sky-300'>
                    <ArrowLeftIcon className='w-4 text-blue-600'/>
                </div>
                <div className='ml-[2rem] border w-8 h-8 rounded-full bg-white p-2 border-sky-300'>
                    <ArrowRightIcon className='w-4 text-blue-600'/>
                </div>

               </div>
            </div>
            <div>
            <img src={content} alt='' width='400'/>
            </div>
        </div>
        <div className='md:flex mt-[4rem] ml-[3rem] gap-[5rem]'>
            <div>
               <h3 className='text-[#175CD3] font-semibold'>Support</h3>
               <h1 className='font-semibold text-4xl mt-5'>FAQs</h1>
               <p className='mt-5 text-[#667085]'>Everything you need to know about the product<br/>and billing. Can’t find the answer you’re looking for? Please <u>chat to our friendly team.</u></p>
            </div>
            <div className=''>
               <div className='flex border border-slate-200 p-5 bg-[#F9FAFB] mr-[2rem] rounded-2xl mt-5'>
                 <div>
                     <h2 className='font-bold'>How many participants can join a ClearLink video conference?</h2>
                     <p className='mt-2 text-[#667085]'>ClearLink offers flexible meeting options. Depending on your subscription<br/> plan, you can host meetings with varying numbers of participants. Our plans<br/>are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
                 </div>
                 <div>
                   <img src={minus} alt='' width='30'/>
                 </div>
               </div>
               <div className='flex gap-[21.5rem] mt-6'>
                <h2 className='font-bold'>Can I use ClearLink on multiple devices?</h2>
                 <div>
                    <img src={plus} alt=''/>
                 </div>
               </div>
               <hr className='mt-7 mr-6'/>
               <div className='flex gap-[9.5rem] mt-6'>
                 <h2 className='font-bold'>Is ClearLink compatible with other video conferencing platforms?</h2>
                 <div>
                    <img src={plus} alt=''/>
                 </div>
               </div>
               <hr className='mt-7 mr-6'/>
               <div className='flex gap-[9.5rem] mt-6'>
                 <h2 className='font-bold'>How does ClearLink ensure the security of my video conferences?</h2>
                 <div>
                 <img src={plus} alt=''/>
                 </div>
               </div>
               <hr className='mt-7 mr-6'/>
               <div className='flex gap-[15rem] mt-6'>
                 <h2 className='font-bold'>Do I need to download any software to use ClearLink?</h2>
                 <div>
                 <img src={plus} alt=''/>
                 </div>
               </div>
               <hr className='mt-7 mr-6'/>
               <div className='flex gap-[14rem] mt-6'>
                <h2 className='font-bold'>What kind of customer support does ClearLink provide?</h2>
                <div>
                    <img src={plus} alt=''/>
                </div>
               </div>
            </div>
        </div>
        <div className='md:flex mt-[7rem] ml-[2rem] gap-[3rem]'>
            <div>
                <h1 className='font-bold text-3xl'>Ready to clear the path to perfect communication?</h1>
                <div className='mt-7'>
                    <div className='flex gap-4'>
                        <div><img src={check} alt=''/></div>
                        <div><h3>30 days free trial</h3></div>
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <div><img src={check} alt=''/></div>
                        <div><h3>Cancel at any time</h3></div>
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <div><img src={check} alt=''/></div>
                        <div><h3>Access to all features</h3></div>
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <div><img src={check} alt=''/></div>
                        <div><h3>Peronalized onboarding</h3></div>
                    </div>
                </div>
                <div className='mt-6'>
                <button className='bg-[#FFFFFF] py-2 rounded-3xl px-3 border border-slate-400 text-[11px] font-semibold'>Talk to sales</button>
                <button className='ml-3 bg-[#175CD3] text-[11px] px-3 py-2 rounded-3xl font-semibold text-slate-50'>Start your free trial</button>
                </div>
            </div>
            <div>
                <img src={screen} alt='' className='mt-5'/>
            </div>
        </div>
        <div className='md:flex justify-between mt-[4rem] mx-5'>
            <div>
                <img src={logo} alt='' width='100'/>
                <p className='text-xs text-[#475467] font-semibold mt-6'>ClearLink is your gateway to effortless, high-<br/>quality video conferencing. Join us in shaping<br/>the future of communication!</p>
            </div>
             <div className='flex gap-9 mt-5'>
                <div>
               <ul className='text-[#667085] text-sm font-semibold'>
                <li className=''>
                    <Link>Product</Link>
                </li>
                <li className='mt-2'>
                    <Link>Overview</Link>
                </li>
                <li className='mt-2'>
                    <Link>Features</Link>
                </li>
                <li className='mt-2'>
                    <Link>Solutions</Link>
                </li>
                <li className='mt-2'>
                    <Link>Tutorials</Link>
                </li>
                <li className='mt-2'>
                    <Link>Pricing</Link>
                </li>
            </ul>
            </div>
            <div>
             <ul className='text-[#667085] text-sm font-semibold'>
                <li>
                    <Link>Company</Link>
                </li>
                <li className='mt-2'>
                    <Link>About us</Link>
                </li>
                <li className='mt-2'>
                    <Link>Careers</Link>
                </li>
                <li className='mt-2'>
                    <Link>Press</Link>
                </li>
                <li className='mt-2'>
                    <Link>News</Link>
                </li>
                <li className='mt-2'>
                    <Link>Contact</Link>
                </li>
            </ul>
            </div>
            <div>
            <ul className='text-[#667085] text-sm font-semibold'>
                <li>
                    <Link>Resources</Link>
                </li>
                <li className='mt-2'>
                    <Link>blog</Link>
                </li>
                <li className='mt-2'>
                    <Link>Events</Link>
                </li>
                <li className='mt-2'>
                    <Link>Help center</Link>
                </li>
                <li className='mt-2'>
                    <Link>Tutorials</Link>
                </li>
                <li className='mt-2'>
                    <Link>Support</Link>
                </li>
            </ul>
            </div>
            <div>
            <ul className='text-[#667085] text-sm font-semibold'>
                <li>
                    <Link>Legal</Link>
                </li>
                <li className='mt-2'>
                    <Link>Terms</Link>
                </li>
                <li className='mt-2'>
                    <Link>Privacy</Link>
                </li>
                <li className='mt-2'>
                    <Link>Cookies</Link>
                </li>
                <li className='mt-2'>
                    <Link>Licenses</Link>
                </li>
                <li className='mt-2'>
                    <Link>Contact</Link>
                </li>
            </ul>
            </div>
             </div>
            <div className='mt-5'>
                <h3 className='text-[#004EEB] text-sm font-semibold'>Get the app</h3>  
                <img src={apple} alt='' className='mt-4 h-6'/>
                <img src={google} alt='' className='mt-5 h-6'/>
            </div>
        </div>
        <footer className='bg-[#F9FAFB] md:flex justify-between mt-5 p-6'>
            <div>
                <p className='text-sm text-[#667085] text-center'>© 2023 ClearLink. All rights reserved.</p>
            </div>
            <div className='flex gap-6 justify-center mt-5'>
                 <div>
                    <img src={linkedin} alt=''className='h-4'/>
                 </div>
                 <div>
                    <img src={twitter} alt='' className='h-4'/>
                 </div>
                 <div>
                    <img src={facebook} alt='' className='h-4'/>
                 </div>
                 <div>
                    <img src={instagram} alt='' className='h-4'/>
                 </div>
                 <div>
                    <img src={discord} alt='' className='h-4'/>
                 </div>
                 <div>
                    <img src={youtube} alt='' className='h-4'/>
                 </div>
            </div>
        </footer>
    </div>
        
   
         
  
  )
}

export default Home