import {useEffect, useState} from '../../lib'
import Navigation from "../components/navigation";
import footer from "../components/footer";
import axios from 'axios';
// import data from '../../db.json' assert {type: 'json'}
import sanphamtt from "../components/sanphamtt";



var ProductPage = function(id) {
    const [book, setBook] = useState({})

    useEffect(function() {
        axios.get(`http://localhost:3000/books/${id}`)
        .then(function(dataAxios) {
            setBook(dataAxios.data)
        })
    }, [])
    

    // optional chaining
    return /*html*/`
    ${Navigation()}
    <section class="max-w-6xl mx-auto mt-10">
    <div class="lg:flex text-center ">
        <div class="mt-1">
            <div class="">
                <img src="${book.images?.[0].large_url}" alt="" class="w-[450px] h-[450px]">
                <img src="../img/Group.png" alt="" class="bg-black -mt-1 rounded-full px-2 py-2">
            </div>
            <div class="lg:flex hidden space-x-4 ">
                <img src="../img/Rectangle-1.png" alt="" class="py-2 px-2  hover:border-green-500  hover:shadow-2xl hover:shadow-indigo-800"">
                <img src="../img/Rectangle-3.png" alt="" class="py-2 px-2  hover:border-green-500  hover:shadow-2xl hover:shadow-indigo-800"">
                <img src="../img/Rectangle-5.png" alt="" class="py-2 px-2  hover:border-green-500  hover:shadow-2xl hover:shadow-indigo-800"">
                <img src="../img/Rectangle-7.png" alt="" class="py-2 px-2  hover:border-green-500  hover:shadow-2xl hover:shadow-indigo-800"">
                <img src="../img/Rectangle-9.png" alt="" class="py-2 px-2  hover:border-green-500  hover:shadow-2xl hover:shadow-indigo-800"">
            </div>
        </div>
        <div class="lg:text-left ml-10">
            <p>Tác giả: <a href="" class="text-[#0D5CB6] pr-3">Ca Tây</a>Đứng thứ 13 trong
                <a href="" class="text-[#0D5CB6]">Top 1000 Sách tư duy - Kỹ năng sống bán chạy tháng này</a>
                </p>
            <h2 class="font-bold text-[23px]">${book.name}</h2>
            <div class="flex mt-4 ml-48 lg:ml-1">
                <div class="flex space-x-1">
                    <img src="../img/Vector.png" alt="">
                    <img src="../img/Vector.png" alt="">
                    <img src="../img/Vector.png" alt="">
                    <img src="../img/Vector.png" alt="">
                    <img src="../img/Vector.png" alt="">
                </div>
                <div>
                    <p class="text-[#787878] mx-5">(Xem 2942 đánh giá)</p>
                </div>
                <div>
                    <p class="text-[#787878]">Đã bán 1000+</p>
                </div>
            </div>
            <div class="flex space-x-2  items-center bg-slate-50 mt-8 ml-64 lg:ml-0.5">
                <p class="text-red-400 font-weight text-[32px]">${book.original_price} ₫</p>
                <p class="text-[#787878] text-[13px] pt-4">109.000 ₫</p>
                <p class="text-red-400 pt-4">-23%</p>
            </div>
            <div class="mt-20">
                <p>Số Lượng</p>
                <div class="flex space-x-12 my-4 ml-80 lg:ml-0.5">
                    <p class="border-1 px-2 font-bold bg-slate-200 hover:bg-green-500">-</p>
                    <p class="border-1 px-2 font-bold bg-slate-200 hover:bg-green-500">+</p>
                </div>
            </div>
            <button class="btn check bg-[#FF3945] text-white w-[200px] rounded-lg py-2 mb-4 mt-4 hover:bg-green-500 shadow-2xl shadow-red-800 hover:shadow-green-800">Mua Ngay</button></br>
            <a href="/giohang/books/${book.id}"><button class="btn check bg-blue-500 text-white w-[200px] rounded-lg py-2 hover:bg-green-500 shadow-2xl shadow-indigo-800 hover:shadow-green-800">Thêm Giỏ Hàng</button></a>
            
        </div>
    </div>
</section>
<section class="max-w-6xl ml-24 mx-auto lg:mx-auto mt-10">
<marquee class="my-1 py-2 font-bold bg-green-500 rounded-lg text-white" direction="right" behavior="Alternate">Sản Phẩm Tương Tự ^^</marquee>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-10">
${sanphamtt()}
</div>
</section>
<!--content2-->

<section class="max-w-6xl mx-auto mt-10">
    <p class="text-[29px] font-bold py-5">Thông tin chi tiết</p>
    <div class="grid grid-cols-4">
        <div class="grid grid-cols-[200px] font-medium  text-[15px] bg-[#EFEFEF] px-3 py-2 space-y-5">
            ${book.specifications?.[0].attributes.map((atr)=>`<p>${atr.name}</p>`).join("")}
        </div>
        <div class="grid text-[13px] px-3 py-2 space-y-5">
            ${book.specifications?.[0].attributes.map((atr)=> `<p>${atr.value}</p>` ).join("")}
        </div>
    </div>
    <p class="text-[29px] font-bold py-5">Mô Tả Sản Phẩm</p>
    ${book.description}
    <div class="text-center mt-10">
        <button class="border-2 border-[#189EFF] px-10 py-4 text-[#189EFF] rounded-lg align-center hover:border-green-500">Xem Thêm Nội Dung</button>
    </div>
</section>

    ${footer()}
    `
}

export default ProductPage;


