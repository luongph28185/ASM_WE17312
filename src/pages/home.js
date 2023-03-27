import { useEffect, useState } from "../../lib";
import Navigation from "../components/navigation";
import footer from "../components/footer";
import axios from "axios";
// import sanpham from "../components/sanpham";


var HomePage = function() {
    
    // Tạo state cho component
    const [data, setData] = useState([])

    useEffect(function() {
        axios.get(`http://localhost:3000/books`)
        .then(function(dataAxios) {
            setData(dataAxios.data)
            
        })
    }, []) // Tham số xác định trạng thái render lại components
    
    let maxdata = data.slice(0, 16);
    return /*html*/`
    ${Navigation()}
    <section class="max-w-5xl mx-auto">
        <div class="lg:flex">
            <div class="hidden lg:inline w-[675px]">
                <h2 class="font-bold  border  pl-3 mt-5 py-2 py-1 bg-orange-600 rounded-lg text-white hover:text-black" href="">Danh Mục Sản Phẩm</h2>
               <div class="content-center py-3">
               <div class="py-4"> <a class="border  px-7 py-1 font-bold bg-orange-400 rounded-lg text-white hover:text-black" href="#">English Books</a><br></div>
               <div class="py-4"><a class="border  px-6 py-1 font-bold bg-orange-400 rounded-lg text-white hover:text-black" href="#">Sách tiếng Việt</a><br></div>
               <div class="py-4"><a class="border  px-4 py-1 font-bold bg-orange-400 rounded-lg text-white hover:text-black" href="#">Văn phòng phẩm</a><br></div>
               <div class="py-4"><a class="border  px-7 py-1 font-bold bg-orange-400 rounded-lg text-white hover:text-black" href="#">Quà lưu niệm</a><br></div>
                </div>
            </div>
            <div class="ml-[50px]">
                <div>
                    <marquee class="my-5 py-2 font-bold bg-green-500 rounded-lg text-white" direction="right" behavior="Alternate">Nhà Sách Tiki Kính Chào Quý Khách Hàng ^^</marquee>
                    <img src="img/banner.png" alt="" class="w-[800px] h-[300px]">
                </div>
                <div class="flex space-x-8 pl-5 mt-3">
                    <a href="" class="hover:text-green-500 hover:font-bold font-bold">Phổ biến</a>
                    <a href="" class="hover:text-green-500 hover:font-bold font-bold">Bán chạy</a>
                    <a href="" class="hover:text-green-500 hover:font-bold font-bold">Hàng mới</a>
                    <a href="" class="hover:text-green-500 hover:font-bold font-bold">Giá thấp</a>
                    <a href="" class="hover:text-green-500 hover:font-bold font-bold">Giá cao</a>
                </div>
                <div class="flex pl-5 mt-10">
                    <img src="img/tiki.png" alt="">
                    <img class="pl-6" src="img/freeship.png" alt="">
                </div>
                <!--sp-->

                <div class=" grid grid-cols-4 gap-8">
                    ${maxdata.map(function(book, index) {
                    return /*html*/`
                    <div href="/products/${book.id}">
    <div class="py-3 pl-3 hover:shadow-2xl  hover:shadow-indigo-400 rounded-lg">
    <a href="/products/${book.id}"><img src="${book.images[0].medium_url}"/></a>
        <img src="img/tiki.png" alt="">
    </div>
    <p class="pt-1 text-green-400">GIAO SIÊU TỐC 2H</p>
    <a href="/products/${book.id}">${book.name}</a>
    <div class="flex pt-1">
        <div class="flex pr-2">
            <img src="img/Vector.png" alt="">
            <img src="img/Vector.png" alt="">
            <img src="img/Vector.png" alt="">
            <img src="img/Vector.png" alt="">
            <img src="img/Vector.png" alt="">
        </div>
        <div>
            <p class="text-[#787878]">Đã bán 1000+</p>
        </div>
    </div>
    <div class="flex pt-1  text-red-400">
        <p>${book.original_price}</p>
        <p class="pl-2">-23%</p>
    </div>
    <img src="img/re.png" alt="">
</div>
                    `
                }).join('')}
                </div>
                
            </div>
        </div>
    </section>
    ${footer()}
    `
}

export default HomePage