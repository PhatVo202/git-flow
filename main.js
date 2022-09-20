
var btnTinhTienLuong = document.getElementById('btnTinhTienLuong');
btnTinhTienLuong.onclick = function() {
    var tienLuong1h = document.getElementById('tienLuong1h').value;
    var soGioLam = document.getElementById('soGioLam').value;
    var tongLuong = 0;
    tongLuong = tienLuong1h * soGioLam;
    document.getElementById('tongLuong').innerHTML = tongLuong;
}

function Inra(){
    var tagNhap = document.getElementById('giatriNhap').value;
    var outPut = tagNhap;
    var giatriIn = document.getElementById('giatriIn');
    giatriIn.innerHTML = outPut;
}

var btnDangNhap = document.getElementById('btnDangNhap');
btnDangNhap.onclick = function(){
    var taiKhoan = document.getElementById('taiKhoan').value;
    var matKhau = document.getElementById('matKhau').value;
    // console.log('tai khoan', taiKhoan);
    // console.log('mat khau', matKhau);
    let thongBao = '';
    thongBao = '-TaiKhoan: ' + taiKhoan + '-MatKhau: ' + matKhau;
    var ketQua = document.getElementById('ketQua');
    ketQua.innerHTML = thongBao;
    ketQua.className = 'feffefe';
    ketQua.style.backgroundColor = 'gray';
    ketQua.style.color = 'white';
    ketQua.style.padding = '15px';
    ketQuan.style.margin = "15px";
}

function soTuoi(){
    var tuoiNhap = document.getElementById('soTuoi').value; 
    var thongbaoTuoi = '';
    thongbaoTuoi = "Tuoi cua ban la: " + tuoiNhap;
    var xuatKq = document.getElementById('ketQua');
    xuatKq.innerHTML = thongbaoTuoi;
    if(tuoiNhap >0){
        return xuatKq.innerHTML; 
    }else{
        return  xuatKq.innerHTML = 'Lúc đó mày chưa đẻ ra nữa bắt t tính';
    }
}


var btnTinhTien = document.getElementById('btnTinhTien');
btnTinhTien.onclick = function(){
    var tongTienThanhToan = document.getElementById('tongTienThanhToan').value;
    var phanTramTip = document.getElementById('phanTramTip').value;
    var soNguoiDcTip = document.getElementById('soNguoiDcTiep').value;
    console.log(tongTienThanhToan);
    console.log(phanTramTip);
    console.log(soNguoiDcTip);
    var tienTipTrenDauNguoi = 0;
    tienTipTrenDauNguoi = (tongTienThanhToan * phanTramTip / 100) / soNguoiDcTip;
    document.getElementById('tienTipTrenDauNguoi').innerHTML = tienTipTrenDauNguoi + '$';
}


// Trung binh cong tong 3 ki so 
var so = 592;
var hangTram = Math.floor(so /100);
var hangChuc = Math.floor(so % 100 / 10);
var hangDonVi = Math.floor(so % 100 % 10);
var tbc = hangTram + hangChuc + hangDonVi ;
console.log(tbc);

