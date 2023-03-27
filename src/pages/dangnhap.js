import Navigation from "../components/navigation"
import footer from "../components/footer"
const DangNhap = function() {
    
    return /*html */`
    ${Navigation()}
    <div class="max-w-5xl mx-auto mt-10">
    <form action="" onsubmit="return validate()" class="pl-64" >
        <div class="mt-5">
            <label class="font-bold">User</label>
            <input type="text" id="name" class="hover:border-blue-500 h-[30px] w-[400px] rounded-md px-3 py-1 ml-[82px] border-2 border-black">
            <p style="color: red;" id="check_name"></p>
        </div>
        
        
        <div class="mt-5">
            <label class="font-bold">Password</label>
            <input type="text" id="password" class=" hover:border-blue-500 h-[30px] w-[400px] rounded-md px-3 py-1 ml-[45px] border-2 border-black">
            <p style="color: red;" id="check_password"></p>
        </div>

       
        <div class="btn font-bold ml-[395px] mt-6">
            <button class=" text-white  hover:text-black border  px-5 py-2 bg-orange-500 rounded-lg" type="submit">Đăng Nhập</button>
        </div>
    </form>
    </div>
    ${footer()}
    `
}

export default DangNhap