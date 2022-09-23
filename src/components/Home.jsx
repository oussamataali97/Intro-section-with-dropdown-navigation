import React from 'react'
import logo from '../assets/logo.svg'
import { IoMdArrowDropdown } from 'react-icons/io'
import calendar from '../assets/icon-calendar.svg'
import planing from '../assets/icon-planning.svg'
import reminder from '../assets/icon-reminders.svg'
import todo from '../assets/icon-todo.svg'
import banner from '../assets/image-hero-desktop.png'
import client1 from '../assets/client-audiophile.svg'
import client2 from '../assets/client-databiz.svg'
import client3 from '../assets/client-maker.svg'
import client4 from '../assets/client-meet.svg'
import iconmenu from '../assets/icon-menu.svg'



function Home() {
    return (
        <div>

            <section className='bg-almostWhite flex w-full justify-between px-6 py-4 items-center'>
                <div className="left flex space-x-10 text-MediumGray ">
                    <img src={logo} alt="" />
                    <div className="links space-x-10 hidden md:block">
                        <div className="dropdown hover:text-almostBlack">
                            <label tabIndex={0} className="cursor-pointer">Features <IoMdArrowDropdown className='inline' /></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a> <img src={todo} alt="" />Todo List</a></li>
                                <li ><a > <img src={calendar} alt="" /> Calendar </a></li>
                                <li><a> <img src={reminder} alt="" />Reminders</a></li>
                                <li><a> <img src={planing} alt="" /> Planing </a></li>
                            </ul>
                        </div>
                        <div className="dropdown hover:text-almostBlack">
                            <label tabIndex={0} className="cursor-pointer ">Company <IoMdArrowDropdown className='inline' /></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>History </a></li>
                                <li><a>Our Team</a></li>
                                <li><a>Blog</a></li>
                            </ul>
                        </div>
                        <a href="#" className='hover:text-almostBlack'>Careers</a>
                        <a href="#" className='hover:text-almostBlack'>About</a>

                    </div>

                </div>
                <div className="buttons flex space-x-10 text-MediumGray hidden md:block">
                    <button className='hover:text-almostBlack'>Login</button>
                    <button className='outline outline-1 rounded-lg py-2 px-5 hover:text-almostBlack'>Register</button>

                </div>
                <div className="menu md:hidden cursor-pointer">
                    <img src={iconmenu} alt="" />
                </div>

            </section>


            <div className='grid md:grid-cols-2 md:gap-20 md:px-32 py-8  justify-center items-center  '>
            <div className="  space-y-6 text-center md:text-left">
                    <p className='font-[700] md:text-7xl text-5xl text-almostBlack'>Make <span>remote work</span> </p>
                    <p className='text-[18px] text-MediumGray py-5'>   Get your team in sync, no matter your location. Streamline processes,
                        create team rituals, and watch productivity soar.</p>
                    <button className='bg-almostBlack rounded-lg py-2 px-5 text-white hover:bg-white hover:text-black outline outline-1'>Learn more</button>
                    <div className="pt-16 flex justify-between  items-center mx-5 md:mx-0 py-5 ">
                        <img src={client1} alt=""  />
                        <img src={client2} alt="" />
                        <img src={client3} alt="" />
                        <img src={client4} alt="" />
                    </div>
                </div>

                <div className="imae mt-5 md:mt-0">
                <img src={banner} alt="" className='md:h-[37rem] w-full object-cover md:object-contain	   '/>

                </div>
                
            </div>






        </div>
    )
}

export default Home