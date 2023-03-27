import {useEffect, useState} from '../../lib'
import axios from 'axios'
import Navigation from "../components/navigation"
import footer from "../components/footer"
const GioHang = function(id){
    const [book, setBook] = useState({})

   useEffect(function() {
      axios.get(`http://localhost:3000/books/${id}`)
       .then(function(dataAxios) {
           setBook(dataAxios.data)
       })
   }, [])


    return/*html */ `
    ${Navigation()}
    <div max-w-6xl mx-auto mt-10>
    <!-- component -->
<!-- Create By Joker Banny -->
<style>
    @layer utilities {
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
</style>

<body>
  <div class="h-screen bg-gray-100 pt-20">
    <h1 class="mb-10 text-center text-2xl font-bold">Giỏ Hàng</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src="${book.images?.[0].medium_url}" />
          <div class="sm:ml-4  sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">${book.name}</h2>
              <p class="mt-5 text-xs text-gray-700">Đã bán 1000+</p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100 mt-5">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="1" min="1" />
                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div class="flex text-left">
              <p>Giá: </p>
                <p class="text-red-500 pl-4">${book.original_price}đ</p>
              </div>
              <div class="flex">
              <p class="pr-4">Xóa: </p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6  cursor-pointer duration-150 hover:bg-green-500 border px-1 py-1 bg-red-500 font-bold">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              
              
            </div>
          </div>
        </div>
        
      </div>
      <!-- Sub total -->
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Đơn Vị Vận Chuyển</p>
          <p class="text-gray-700">GHTK</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Phí Ship</p>
          <p class="text-gray-700">30.000đ</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Tổng Tiền</p>
          <div class="">
            <p class="mb-1 ml-24 text-lg font-bold">${book.original_price}đ</p>
            <p class="text-sm ml-4 text-gray-700">đừng bom hàng bạn nhé</p>
          </div>
        </div>
        <a href="/thanhcong/books/${book.id}"><button class="mt-6  w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Mua Hàng</button></a>
      </div>
    </div>
  </div>
</body>
    
    </div>
    ${footer()}
    `
}
export default GioHang