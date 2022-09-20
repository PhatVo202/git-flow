



// function Tinhluong(){
//     var tienLuong = document.getElementById('tienLuong1h').value;
//     var gioLam = document.getElementById('soGioLam').value;
    
//     var Tongluong = 0;
//     Tongluong = tienLuong * gioLam;
//     document.getElementById('Tongluong').innerHTML = Tongluong.toLocaleString();
// }

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
