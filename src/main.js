import { render, router } from "../lib"
import BookAdd from "./pages/admin/book-add"
import BookUpdate from "./pages/admin/book-update"
import DashBoard from "./pages/admin/dashboard"
import TrangChu from "./pages/admin/trangchu"
import DangKy from "./pages/dangky"
import DangNhap from "./pages/dangnhap"
import GioHang from "./pages/giohang"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import ThanhCong from "./pages/thanhcong"
import thanhcong from "./pages/thanhcong"
import './style/main.css'

// DOM declaration
var app = document.querySelector('#app')



router.on('/', function() {
    render(HomePage ,app)
})

router.on('/home', function() {
    render(HomePage, app)
})
router.on('/dangky', function() {
    render(DangKy, app)
})
router.on('/dangnhap', function() {
    render(DangNhap, app)
})
router.on('/giohang', function(){
    render(GioHang, app)
})
router.on('/giohang/books/:id', function({data}) {
    render(() => GioHang(data.id), app)
})
router.on('/thanhcong', function() {
    render(ThanhCong, app)
})
router.on('/thanhcong/books/:id', function({data}) {
    render(() => ThanhCong(data.id), app)
})
router.on('/trangchu', function(){
    render(TrangChu, app)
})
router.on('/products/:id', function({data}) {
    render(() => ProductPage(data.id), app)
})

router.on('/admin', function() {
    render(DashBoard, app)
})
router.on('/admin/books/:id', function({data}) {
    render(() => BookUpdate(data.id), app)
})
router.on('/book-add', function() {
    render(BookAdd, app)
})


// router.on('/products', function(e) {
//     render(ProductPage(e), app)
// })
router.resolve()



