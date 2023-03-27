import Navigation from "../components/navigation"
import footer from "../components/footer"
const DangKy = function() {
    
    return /*html */`
    ${Navigation()}
    <div class="max-w-5xl mx-auto mt-10">
    <form action="" onsubmit="return validate()" class="pl-64" >
        <div class="pl-[210px] mb-10">
            <h3 class="pr-3 text-white  hover:text-black border  px-4 py-1 bg-orange-500 w-[170px] rounded-lg">Đăng kí thành viên</h3>
        </div>
        <div class="mt-5">
            <label class="font-bold">User</label>
            <input type="text" id="name" class="hover:border-blue-500 h-[30px] w-[400px] rounded-md px-3 py-1 ml-[82px] border-2 border-black">
            <p style="color: red;" id="check_name"></p>
        </div>
        
        <div class="mt-5">
            <label class="font-bold">Email</label>
            <input type="text" id="email"  class="hover:border-blue-500 h-[30px] w-[400px] rounded-md px-3 py-1  ml-[75px]  border-2 border-black">
            <p style="color: red;" id="check_email"></p>
        </div>
        
        <div class="mt-5">
            <label class="font-bold">Password</label>
            <input type="text" id="password" class="hover:border-blue-500 h-[30px] w-[400px] rounded-md px-3 py-1 ml-[45px] border-2 border-black">
            <p style="color: red;" id="check_password"></p>
        </div>

        <div class="mt-5">
            <label class="font-bold">tuổi</label>
            <input type="text" id="year" class="hover:border-blue-500 h-[30px] w-[400px] rounded-md px-3 py-1 ml-[87px] border-2 border-black">
            <p style="color: red;" id="check_year"></p>
        </div>
        <div class="btn font-bold ml-[270px] mt-6">
            <button class=" text-white  hover:text-black border  px-5 py-2 bg-orange-500 rounded-lg" type="submit">Gửi</button>
        </div>
    </form>
    </div>
    ${footer()}
    `
}

export default DangKy