const Navigation = function() {
    return /*html*/`
    <header class="w-full mx-auto bg-[#1A94FF] h-[100px] flex lg:justify-between space-x-24 lg:pr-10 items-center">
        <div><img src="../../img/luong.png" alt="" class="w-14 ml-10 "></div>
        <a href="/"><img src="../../img/home2.png" alt="" class="w-10 ml-2 bg-[#1A94FF]  hover:bg-orange-500  hover:rounded-lg hover:border"></a>
        <div class=" hidden lg:inline">
            <input type="text" class="h-[30px] w-[400px] rounded-lg px-3 py-1" placeholder="anh iu muốn sách gì ?">
            <input class="bg-[#0D5CB6] text-white h-[30px] w-[90px] hover:bg-green-500 hover:bg-orange-500 rounded-lg " type="submit" value="Tìm Kiếm" >
        </div>
        <div class="flex">
            <div class="flex pr-[10px] ">
                
                <a class="pr-3 text-white  hover:text-black" href="/trangchu"><img class=" hover:bg-orange-500 hover:rounded-lg hover:border" src="../../img/userr.png" alt="" class="w-10"></a>
            </div>
            <div>
                <div class="flex space-x-3">
                    <a class="pr-3 text-white  hover:text-black border  px-4 py-1 bg-orange-500 rounded-lg" href="/dangky">Đăng Ký</a>
                    <a class="text-white  hover:text-black border  px-2 py-1 bg-orange-500 rounded-lg" href="/dangnhap">Đăng Nhập</a>
                </div>
               
            </div>

        </div>
        <div class="flex mr-10">
            
            <a  href="/giohang"><img class=" hover:bg-orange-500  hover:rounded-lg hover:border" src="../../img/giohang.png" alt="" class="w-10"></a>
        </div>
    </header>
    `
}

export default Navigation;
