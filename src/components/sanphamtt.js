import { useEffect, useState } from "../../lib";

const sanphamtt = function() {
    // Tạo state cho component
    const [data, setData] = useState([])

    useEffect(function() {
        fetch('http://localhost:3000/books')
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            setData(data)
        })
    }, [])
    let maxdata = data.slice(0, 6)
    return `
    ${maxdata.map(function(book, index) {
        return /*html*/`
        <div >
    <div class="shadow-2xl shadow-gray-400 hover:shadow-indigo-500 rounded-lg  py-10 px-2">
    <a href="/products/${book.id}"><img src="${book.images?.[0].medium_url}"/></a>
    <img  class="-mt-8 " src="../img/fr.png" alt="">
    </div>
    <h3 class="font-medium">${book.name}</h3>
    <div class="flex mt-2">
        <div class="flex">
            <img src="../img/Vector.png" alt="">
            <img src="../img/Vector.png" alt="">
            <img src="../img/Vector.png" alt="">
            <img src="../img/Vector.png" alt="">
            <img src="../img/Vector.png" alt="">
        </div>
        <div>
            <p class="text-[#787878] pl-2">Đã bán 1000+</p>
        </div>
    </div>
    <div class="flex pt-1  text-red-400 mt-2">
    <p>${book.current_seller?.price}</p>
        <p class="pl-2">-23%</p>
    </div>
    <img src="../img/re.png" alt="">
</div>
        `
    }).join('')}
    `
   
}
export default sanphamtt;
