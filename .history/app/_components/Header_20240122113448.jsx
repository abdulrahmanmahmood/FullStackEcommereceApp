'use client'
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  const {user} = useUser()
  return user && (
    
    <header className="bg-white dark:bg-gray-900  sm:w-full">
      <div className="mx-auto flex h-16  items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
        <a className="block text-teal-600 dark:text-teal-300" href="/">
          <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Explore
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Contact Us
                </a>
              </li>

            
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {user? <div>
               <UserButton/> 
               <svg fill="#34b9da" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="165px" height="165px" viewBox="-60.43 -60.43 408.62 408.62" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#34b9da" stroke-width="0.0028775500000000004"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.57551"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M134.16,279.13c-15.24,0-26.715-12.31-26.715-27.544c0-15.162,11.475-26.638,26.715-26.638 c15.162,0,27.472,11.476,27.472,26.638C161.626,266.821,149.316,279.13,134.16,279.13z"></path> <path d="M265.515,176.575c-1.682,7.085-2.275,19.503-6.762,25.244c-2.708,3.465-6.773,5.626-11.943,5.626H92.21 c-9.962,0-18.056-8.022-18.056-18.003c0-6.461-18.507-98.199-25.497-132.633c-1.453-7.146-8.551-12.995-15.834-13.061 l-14.711-0.141c-19.786,0-18.075-18.774-18.075-18.774c0.384-6.626,2.642-10.581,5.434-12.911 c5.597-4.668,18.231-3.008,25.347-3.02l12.874-0.024c22.146,0,30.883,12.661,34.317,22.929c2.312,6.917,3.495,18.735,5.05,25.857 l22.104,100.829c1.561,7.122,8.737,12.893,16.021,12.893H222.31c7.29,0,14.412-5.771,15.907-12.91l16.507-78.486 c2.132-9.217,5.566-13.627,9.086-15.501c6.425-3.444,19.882,1.63,22.416,8.455c3.759,10.157-0.595,27.37-0.595,27.37 S272.691,146.484,265.515,176.575z"></path> <path d="M224.382,279.13c-15.18,0-26.649-12.31-26.649-27.544c0-15.162,11.47-26.638,26.649-26.638 c15.162,0,27.525,11.476,27.525,26.638C251.908,266.821,239.544,279.13,224.382,279.13z"></path> <path d="M135.085,153.335c-4.984,0-9.025-4.053-9.025-9.043c0-4.978,4.042-9.031,9.025-9.031c4.996,0,9.031,4.053,9.031,9.031 C144.116,149.283,140.087,153.335,135.085,153.335z"></path> <path d="M171.209,153.335c-4.983,0-9.024-4.053-9.024-9.043c0-4.978,4.041-9.031,9.024-9.031c4.979,0,9.031,4.053,9.031,9.031 C180.241,149.283,176.188,153.335,171.209,153.335z"></path> <path d="M207.323,153.335c-4.99,0-9.031-4.053-9.031-9.043c0-4.978,4.041-9.031,9.031-9.031c4.978,0,9.025,4.053,9.025,9.031 C216.348,149.283,212.3,153.335,207.323,153.335z"></path> <path d="M117.022,117.21c-4.972,0-9.037-4.035-9.037-9.021c0-4.981,4.065-9.035,9.037-9.035c5.008,0,9.043,4.053,9.043,9.035 C126.06,113.175,122.024,117.21,117.022,117.21z"></path> <path d="M153.147,99.161c4.984,0,9.025,4.044,9.025,9.028c0,4.986-4.041,9.028-9.025,9.028c-4.989,0-9.031-4.042-9.031-9.028 C144.116,103.205,148.158,99.161,153.147,99.161z"></path> <path d="M189.266,99.161c4.984,0,9.025,4.044,9.025,9.028c0,4.986-4.041,9.028-9.025,9.028c-4.99,0-9.031-4.042-9.031-9.028 C180.235,103.205,184.276,99.161,189.266,99.161z"></path> <path d="M225.379,99.161c4.983,0,9.024,4.044,9.024,9.028c0,4.986-4.041,9.028-9.024,9.028c-4.99,0-9.031-4.042-9.031-9.028 C216.348,103.205,220.389,99.161,225.379,99.161z"></path> <path d="M207.323,81.104c-4.99,0-9.031-4.053-9.031-9.022c0-4.993,4.041-9.031,9.031-9.031c4.978,0,9.025,4.032,9.025,9.031 C216.348,77.051,212.3,81.104,207.323,81.104z"></path> <path d="M171.209,81.104c-4.983,0-9.024-4.053-9.024-9.022c0-4.993,4.041-9.031,9.024-9.031c4.979,0,9.031,4.032,9.031,9.031 C180.241,77.051,176.188,81.104,171.209,81.104z"></path> <path d="M135.085,81.104c-4.984,0-9.025-4.053-9.025-9.022c0-4.993,4.042-9.031,9.025-9.031c4.996,0,9.031,4.032,9.031,9.031 C144.116,77.051,140.087,81.104,135.085,81.104z"></path> </g> </g></svg>
            </div>   
            
:
<div className="sm:flex sm:gap-4">
<a
  className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500 dark:hover:bg-teal-500"
  href="/"
>
  Login
</a>

<a
  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 sm:block"
  href="/"
>
  Register
</a>
</div>}


            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
