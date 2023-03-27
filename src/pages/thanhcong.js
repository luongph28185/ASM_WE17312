import {useEffect, useState} from '../../lib'
import axios from 'axios'
import Navigation from "../components/navigation"
import footer from "../components/footer"
import sanphamtt from '../components/sanphamtt'
const ThanhCong = function(id){
    const [book, setBook] = useState({})

   useEffect(function() {
      axios.get(`http://localhost:3000/books/${id}`)
       .then(function(dataAxios) {
           setBook(dataAxios.data)
       })
   }, [])
    return /*html */`
    ${Navigation()}
    <div>
    <section
  class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center max-w-6xl mx-auto mt-10 mb-[100px]"
>
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-xl text-center sm:text-left">
      <h2 class="text-2xl font-bold text-green-900 md:text-3xl">
        Mua Hàng Thành Công
      </h2>

      <p class="hidden font-bold md:mt-4 text-red-500 md:block">
      ${book.original_price}đ
      </p>
      <p class="hidden font-bold md:mt-4 md:block">
        ${book.name}
      </p>

      <div class="mt-4 md:mt-8">
        <a
          href="#"
          class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
        Trạng Thái Đơn Hàng
        </a>
      </div>
    </div>
  </div>

  <img
    alt="Violin"
    src="${book.images?.[0].medium_url}"
    class=" object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
  />
</section>
    </div>
    <section class="max-w-6xl ml-24 mx-auto lg:mx-auto mt-10 mb-24">
<marquee class="my-1 py-2 font-bold bg-green-500 rounded-lg text-white" direction="right" behavior="Alternate">Sản Phẩm Liên Quan ^^</marquee>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-10">
${sanphamtt()}
</div>
</section>
    

    ${footer()}
    `
}
export default ThanhCong