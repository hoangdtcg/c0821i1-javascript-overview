//Chú thích - Ctrl + /
// Thay đổi nội dung của thẻ
document.getElementById("tieu-de").innerText = "<strong>Chỉnh sửa tiêu đề</strong>"; //Hiển thị chữ
document.getElementById("tieu-de").innerHTML = "<strong>Chỉnh sửa tiêu đề</strong>"; //Hiểu được html
document.getElementById('tieu-de').style.fontSize = "20px";

//Xử lý sự kiện
//Click
//Hover : đưa chuột qua
//MouseExit: đưa chuột ra khỏi vùng đó

//function dùng để đóng gói 1 khối lệnh
function doiMau() {
    // Thay đổi giao diện style
    document.getElementById('tieu-de').style.color = "green";
    document.getElementById('tieu-de').style.fontSize = "40px";
}

function caiDatGoc() {
    document.getElementById('tieu-de').style.color = "black";
    document.getElementById('tieu-de').style.fontSize = "20px";
}

function thongBao(){
    alert("Hiển thị thông báo")
}