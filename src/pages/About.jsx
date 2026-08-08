import { React } from "react";
import Logo from "../assets/razorpay-icon.webp";
import Logo1 from "../assets/flag-logo.png";

function About() {
  return (
    <>
      <nav class="bg-linear-to-t from-sky-500 to-indigo-500">
        <div class="relative mx-auto flex item-center justify-evenly">
          <a href="/" class="cursor-pointer">
            <img src={Logo} width="80px" class="border w-24  h-14" />
          </a>
          <ul class="flex gap-5 px-6 py-9">
            <li class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group">
              <a href="#">Agentic Stack</a>
              <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group">
              <a href="#">Payments</a>
              <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group">
              <a href="#">Banking+</a>
              <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group">
              <a href="#">Payroll</a>
              <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group">
              <a href="#">Engage</a>
              <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group">
              <a href="#">Partners</a>
              <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group">
              <a href="#">Startups</a>
              <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group">
              <a href="#">Resources</a>
              <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-blue-900 cursor-pointer transition-all-duration-200 relative group">
              <a href="#">Pricing</a>
              <div class="absolute w-full h-1 bg-blue-900 hidden group-hover:block transition-all-duration-200"></div>
            </li>
          </ul>
 
          <div class="flex space-x-6 gap-5">
            <img src={Logo1} width="100px" class="h-16" />
            <button class="py-3 px-5 font-mono text-white border-lime-300  border rounded-sm w-20 h-8 text-sm font-bold gap-5">
              Log in
            </button>
            <button class="py-3 px-4 font-mono w-20 h-8 rounded-sm text-sm font-bold bg-white text-blue-300 border transition-all-duration-200 hover:text-blue-800">
              Sign Up →
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default About;
