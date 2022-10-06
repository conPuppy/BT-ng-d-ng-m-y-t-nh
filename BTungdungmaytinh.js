function Cong() {
    let a= +document.getElementById("a").value;
    let b= +document.getElementById("b").value;
    let tong=a+b;
    document.getElementById("c").innerHTML= "Kết quả: " + tong
}
function Tru() {
    let a= +document.getElementById("a").value;
    let b= +document.getElementById("b").value;
    let hieu=a-b;
    document.getElementById("c").innerHTML= "Kết quả: " + hieu;
}function Nhan() {
    let a= +document.getElementById("a").value;
    let b= +document.getElementById("b").value;
    let nhan=a*b;
    document.getElementById("c").innerHTML= "Kết quả: "+ nhan;
}function Chia() {
    let a= +document.getElementById("a").value;
    let b= +document.getElementById("b").value;
    let chia=a/b;
    document.getElementById("c").innerHTML="Kết quả: " + chia;
}