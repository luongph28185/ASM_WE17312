import {useState, useEffect, router} from '../../../lib'
import axios from 'axios'

const BookAdd = function(){
   useEffect(function() {
      const form = document.getElementById("form-add");
      const name = document.getElementById("name");
      const price = document.getElementById("price");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const newBook={
            name:name.value,
            original_price:Number(price.value)
        };
        console.log(newBook);
        // fetch("http://localhost:3000/books",{
        //     method: "POST",
        //     headers: {"conten-Type":"application/json",},
        //     body:JSON.stringify(newBook),
        // }).then(router.navigate("/admin"))

        axios.post("http://localhost:3000/books", newBook)
        .then(router.navigate("/admin"));
    })
       
   }, [])


   
    return /*html*/`
    <!-- component -->
    <style>
      /* Compiled dark classes from Tailwind */
      .dark .dark\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
        border-color: rgba(55, 65, 81);
      }
      .dark .dark\:bg-gray-50 {
        background-color: rgba(249, 250, 251);
      }
      .dark .dark\:bg-gray-100 {
        background-color: rgba(243, 244, 246);
      }
      .dark .dark\:bg-gray-600 {
        background-color: rgba(75, 85, 99);
      }
      .dark .dark\:bg-gray-700 {
        background-color: rgba(55, 65, 81);
      }
      .dark .dark\:bg-gray-800 {
        background-color: rgba(31, 41, 55);
      }
      .dark .dark\:bg-gray-900 {
        background-color: rgba(17, 24, 39);
      }
      .dark .dark\:bg-red-700 {
        background-color: rgba(185, 28, 28);
      }
      .dark .dark\:bg-green-700 {
        background-color: rgba(4, 120, 87);
      }
      .dark .dark\:hover\:bg-gray-200:hover {
        background-color: rgba(229, 231, 235);
      }
      .dark .dark\:hover\:bg-gray-600:hover {
        background-color: rgba(75, 85, 99);
      }
      .dark .dark\:hover\:bg-gray-700:hover {
        background-color: rgba(55, 65, 81);
      }
      .dark .dark\:hover\:bg-gray-900:hover {
        background-color: rgba(17, 24, 39);
      }
      .dark .dark\:border-gray-100 {
        border-color: rgba(243, 244, 246);
      }
      .dark .dark\:border-gray-400 {
        border-color: rgba(156, 163, 175);
      }
      .dark .dark\:border-gray-500 {
        border-color: rgba(107, 114, 128);
      }
      .dark .dark\:border-gray-600 {
        border-color: rgba(75, 85, 99);
      }
      .dark .dark\:border-gray-700 {
        border-color: rgba(55, 65, 81);
      }
      .dark .dark\:border-gray-900 {
        border-color: rgba(17, 24, 39);
      }
      .dark .dark\:hover\:border-gray-800:hover {
        border-color: rgba(31, 41, 55);
      }
      .dark .dark\:text-white {
        color: rgba(255, 255, 255);
      }
      .dark .dark\:text-gray-50 {
        color: rgba(249, 250, 251);
      }
      .dark .dark\:text-gray-100 {
        color: rgba(243, 244, 246);
      }
      .dark .dark\:text-gray-200 {
        color: rgba(229, 231, 235);
      }
      .dark .dark\:text-gray-400 {
        color: rgba(156, 163, 175);
      }
      .dark .dark\:text-gray-500 {
        color: rgba(107, 114, 128);
      }
      .dark .dark\:text-gray-700 {
        color: rgba(55, 65, 81);
      }
      .dark .dark\:text-gray-800 {
        color: rgba(31, 41, 55);
      }
      .dark .dark\:text-red-100 {
        color: rgba(254, 226, 226);
      }
      .dark .dark\:text-green-100 {
        color: rgba(209, 250, 229);
      }
      .dark .dark\:text-blue-400 {
        color: rgba(96, 165, 250);
      }
      .dark .group:hover .dark\:group-hover\:text-gray-500 {
        color: rgba(107, 114, 128);
      }
      .dark .group:focus .dark\:group-focus\:text-gray-700 {
        color: rgba(55, 65, 81);
      }
      .dark .dark\:hover\:text-gray-100:hover {
        color: rgba(243, 244, 246);
      }
      .dark .dark\:hover\:text-blue-500:hover {
        color: rgba(59, 130, 246);
      }
    
      /* Custom style */
      .header-right {
          width: calc(100% - 3.5rem);
      }
      .sidebar:hover {
          width: 16rem;
      }
      @media only screen and (min-width: 768px) {
          .header-right {
              width: calc(100% - 16rem);
          }        
      }
    </style>
    <div x-data="setup()" :class="{ 'dark': isDark }">
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
    
          <!-- Header -->
          <div class="fixed w-full flex items-center justify-between h-14 text-white z-10">
            <div class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
              <img class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src="../../img/luongdz.jpg" />
              <a href="/trangchu" class="hidden md:block">LƯƠNG</a>
            </div>
            <div class="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
              <div class="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
                <button class="outline-none focus:outline-none">
                  <svg class="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
                <input type="search" name="" id="" placeholder="Tìm Kiếm" class="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
              </div>
              <ul class="flex items-center">
                <li>
                  <button
                    aria-hidden="true"
                    @click="toggleTheme"
                    class="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
                  >
                    <svg
                      x-show="isDark"
                      width="24"
                      height="24"
                      class="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke=""
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    <svg
                      x-show="!isDark"
                      width="24"
                      height="24"
                      class="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke=""
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <div class="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                </li>
                <li>
                  <a href="/" class="flex items-center mr-4 hover:text-blue-100">
                    <span class="inline-flex mr-1">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    </span>
                    Thoát
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- ./Header -->
        
          <!-- Sidebar -->
          <div class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
            <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
              <ul class="flex flex-col py-4 space-y-1">
                <li class="px-5 hidden md:block">
                  <div class="flex flex-row items-center h-8">
                    <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Chính</div>
                  </div>
                </li>
                <li>
                  <a href="/admin" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Quản Lý Hàng</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Hàng Nhập</span>
                    <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">Mới</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Tin Nhắn</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Thông Báo</span>
                    <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                  </a>
                </li>
                <li class="px-5 hidden md:block">
                  <div class="flex flex-row items-center mt-5 h-8">
                    <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Cài Đặt</div>
                  </div>
                </li>
                <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Hồ Sơ</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Cài Đặt</span>
                  </a>
                </li>
              </ul>
              <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">Lương Book store</p>
            </div>
          </div>
<!-- ./Sidebar -->
<div class="max-w-4xl ml-[350px] mt-[70px]">
<!-- component -->
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

<!-- ====== Contact Section Start -->
<section class=" py-20 lg:py-[120px] overflow-hidden relative z-10">
<div class="container">
  <div class="flex flex-wrap lg:justify-between -mx-4">
     <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
        <div class="max-w-[570px] mb-12 lg:mb-0">
           <span class="block mb-6 text-base text-primary font-semibold pl-28 text-[25px]">
           Thêm Sách
           </span>
        <div>
        <a>
        <a href=""> <img class="px-6 py-3" src=""/></a>
        </a>
        </div>

        </div>
     </div>
     <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
        <div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg ">
           <form id="form-add">
              <div class="mb-6">
                 <input  id="name" type="text"
                    placeholder="Tên sách"
                    class="
                    hover:border-blue-500
                    w-full
                    rounded
                    py-3
                    px-[14px]
                    text-body-color text-base
                    border border-[f0f0f0]
                    outline-none
                    focus-visible:shadow-none
                    focus:border-primary
                    "
                    />
              </div>
              <div class="mb-6">
                 <input
                     id="price"
                    type="number"
                    placeholder="Giá"
                    class="
                    hover:border-blue-500
                    w-full
                    rounded
                    py-3
                    px-[14px]
                    text-body-color text-base
                    border border-[f0f0f0]
                    outline-none
                    focus-visible:shadow-none
                    focus:border-primary
                    "
                    />
              </div>
              <div class="mb-6">
                 <textarea
                    id="description"
                    rows="6"
                    placeholder="Mô Tả"
                    class="
                    hover:border-blue-500
                    w-full
                    rounded
                    py-3
                    px-[14px]
                    text-body-color text-base
                    border border-[f0f0f0]
                    resize-none
                    outline-none
                    focus-visible:shadow-none
                    focus:border-primary"></textarea>
              </div>
              <div>
                 <button
                    type="submit"
                    class="
                    hover:bg-green-500
                    w-full
                    text-white
                    bg-primary
                    rounded
                    border border-primary
                    p-3
                    transition
                    hover:bg-opacity-90
                    "
                    >
                 Cập Nhật
                 </button>
              </div>
           </form>
           <div>
              <span class="absolute -top-10 -right-9 z-[-1]">
                 <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                       fill-rule="evenodd"
                       clip-rule="evenodd"
                       d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                       fill="#3056D3"
                       />
                 </svg>
              </span>
              <span class="absolute -right-10 top-[90px] z-[-1]">
                 <svg
                    width="34"
                    height="134"
                    viewBox="0 0 34 134"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <circle
                       cx="31.9993"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 31.9993 132)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 31.9993 117.333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 31.9993 102.667)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 31.9993 88)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 31.9993 73.3333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 31.9993 45)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 31.9993 16)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 31.9993 59)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 31.9993 30.6666)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 31.9993 1.66665)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 17.3333 132)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 17.3333 117.333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 17.3333 102.667)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 17.3333 88)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 17.3333 73.3333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 17.3333 45)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 17.3333 16)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 17.3333 59)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 17.3333 30.6666)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 17.3333 1.66665)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 2.66536 132)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 2.66536 117.333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 2.66536 102.667)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 2.66536 88)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 2.66536 73.3333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 2.66536 45)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 2.66536 16)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 2.66536 59)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 2.66536 30.6666)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 2.66536 1.66665)"
                       fill="#13C296"
                       />
                 </svg>
              </span>
              <span class="absolute -left-7 -bottom-7 z-[-1]">
                 <svg
                    width="107"
                    height="134"
                    viewBox="0 0 107 134"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <circle
                       cx="104.999"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 104.999 132)"
                       fill="#13C296"
                       />
                    <circle
                       cx="104.999"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 104.999 117.333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="104.999"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 104.999 102.667)"
                       fill="#13C296"
                       />
                    <circle
                       cx="104.999"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 104.999 88)"
                       fill="#13C296"
                       />
                    <circle
                       cx="104.999"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 104.999 73.3333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="104.999"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 104.999 45)"
                       fill="#13C296"
                       />
                    <circle
                       cx="104.999"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 104.999 16)"
                       fill="#13C296"
                       />
                    <circle
                       cx="104.999"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 104.999 59)"
                       fill="#13C296"
                       />
                    <circle
                       cx="104.999"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 104.999 30.6666)"
                       fill="#13C296"
                       />
                    <circle
                       cx="104.999"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 104.999 1.66665)"
                       fill="#13C296"
                       />
                    <circle
                       cx="90.3333"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 90.3333 132)"
                       fill="#13C296"
                       />
                    <circle
                       cx="90.3333"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 90.3333 117.333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="90.3333"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 90.3333 102.667)"
                       fill="#13C296"
                       />
                    <circle
                       cx="90.3333"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 90.3333 88)"
                       fill="#13C296"
                       />
                    <circle
                       cx="90.3333"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 90.3333 73.3333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="90.3333"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 90.3333 45)"
                       fill="#13C296"
                       />
                    <circle
                       cx="90.3333"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 90.3333 16)"
                       fill="#13C296"
                       />
                    <circle
                       cx="90.3333"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 90.3333 59)"
                       fill="#13C296"
                       />
                    <circle
                       cx="90.3333"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 90.3333 30.6666)"
                       fill="#13C296"
                       />
                    <circle
                       cx="90.3333"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 90.3333 1.66665)"
                       fill="#13C296"
                       />
                    <circle
                       cx="75.6654"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 75.6654 132)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 31.9993 132)"
                       fill="#13C296"
                       />
                    <circle
                       cx="75.6654"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 75.6654 117.333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 31.9993 117.333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="75.6654"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 75.6654 102.667)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 31.9993 102.667)"
                       fill="#13C296"
                       />
                    <circle
                       cx="75.6654"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 75.6654 88)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 31.9993 88)"
                       fill="#13C296"
                       />
                    <circle
                       cx="75.6654"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 75.6654 73.3333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 31.9993 73.3333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="75.6654"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 75.6654 45)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 31.9993 45)"
                       fill="#13C296"
                       />
                    <circle
                       cx="75.6654"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 75.6654 16)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 31.9993 16)"
                       fill="#13C296"
                       />
                    <circle
                       cx="75.6654"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 75.6654 59)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 31.9993 59)"
                       fill="#13C296"
                       />
                    <circle
                       cx="75.6654"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 75.6654 30.6666)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 31.9993 30.6666)"
                       fill="#13C296"
                       />
                    <circle
                       cx="75.6654"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 75.6654 1.66665)"
                       fill="#13C296"
                       />
                    <circle
                       cx="31.9993"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 31.9993 1.66665)"
                       fill="#13C296"
                       />
                    <circle
                       cx="60.9993"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 60.9993 132)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 17.3333 132)"
                       fill="#13C296"
                       />
                    <circle
                       cx="60.9993"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 60.9993 117.333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 17.3333 117.333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="60.9993"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 60.9993 102.667)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 17.3333 102.667)"
                       fill="#13C296"
                       />
                    <circle
                       cx="60.9993"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 60.9993 88)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 17.3333 88)"
                       fill="#13C296"
                       />
                    <circle
                       cx="60.9993"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 60.9993 73.3333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 17.3333 73.3333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="60.9993"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 60.9993 45)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 17.3333 45)"
                       fill="#13C296"
                       />
                    <circle
                       cx="60.9993"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 60.9993 16)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 17.3333 16)"
                       fill="#13C296"
                       />
                    <circle
                       cx="60.9993"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 60.9993 59)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 17.3333 59)"
                       fill="#13C296"
                       />
                    <circle
                       cx="60.9993"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 60.9993 30.6666)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 17.3333 30.6666)"
                       fill="#13C296"
                       />
                    <circle
                       cx="60.9993"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 60.9993 1.66665)"
                       fill="#13C296"
                       />
                    <circle
                       cx="17.3333"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 17.3333 1.66665)"
                       fill="#13C296"
                       />
                    <circle
                       cx="46.3333"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 46.3333 132)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 2.66536 132)"
                       fill="#13C296"
                       />
                    <circle
                       cx="46.3333"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 46.3333 117.333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 2.66536 117.333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="46.3333"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 46.3333 102.667)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 2.66536 102.667)"
                       fill="#13C296"
                       />
                    <circle
                       cx="46.3333"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 46.3333 88)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 2.66536 88)"
                       fill="#13C296"
                       />
                    <circle
                       cx="46.3333"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 46.3333 73.3333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 2.66536 73.3333)"
                       fill="#13C296"
                       />
                    <circle
                       cx="46.3333"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 46.3333 45)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 2.66536 45)"
                       fill="#13C296"
                       />
                    <circle
                       cx="46.3333"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 46.3333 16)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 2.66536 16)"
                       fill="#13C296"
                       />
                    <circle
                       cx="46.3333"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 46.3333 59)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 2.66536 59)"
                       fill="#13C296"
                       />
                    <circle
                       cx="46.3333"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 46.3333 30.6666)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 2.66536 30.6666)"
                       fill="#13C296"
                       />
                    <circle
                       cx="46.3333"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 46.3333 1.66665)"
                       fill="#13C296"
                       />
                    <circle
                       cx="2.66536"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 2.66536 1.66665)"
                       fill="#13C296"
                       />
                 </svg>
              </span>
           </div>
        </div>
     </div>
  </div>
</div>
</section>
<!-- ====== Contact Section End -->
</div>
   
    `
}
export default BookAdd