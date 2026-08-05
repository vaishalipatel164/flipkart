import {React} from "react";
import Logo from "../assets/razorpay-icon.webp"

function About(){

    return (
    <>
     <nav class="bg-linear-to-t from-sky-500 to-indigo-500">
      <div class="relative w-1000px mx-auto flex item-center justify-evenly">
        <a href="/" class="cursor-pointer">
          <img src={Logo} width="70px" />
        </a>
        <ul class="flex gap-4">


          <li
            class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group"
          ><a href="#">Agentic Stack</a>
        <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
      </li>

            <li
            class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group"
          ><a href="#">Payments</a>
        <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
      </li>

      <li
            class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group"
          ><a href="#">Banking+</a>
        <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
      </li>

      <li
            class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group"
          ><a href="#">Payroll</a>
        <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
      </li>

       <li
            class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group"
          ><a href="#">Engage</a>
        <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
      </li>

       <li
            class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group"
          ><a href="#">Partners</a>
        <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
      </li>

       <li
            class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group"
          ><a href="#">Startups</a>
        <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
      </li>

       <li
            class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group"
          ><a href="#">Resources</a>
        <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
      </li>

         <li
            class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group"
          ><a href="#">Pricing</a>
        <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
      </li>

        </ul>

        
      </div>
    </nav>
    </>
    );
}

export default About;