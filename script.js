const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText=(e)=>{
e.preventDefault();

coupon.select();
coupon.setSelectionRange(0,9999);//تعیین رنج کپی شده توسط کاربر
document.execCommand("copy");

btn.textContent="copied!!!!!!";

setTimeout(()=>{

    btn.textContent="copy";

},5000)
};




btn.addEventListener("click",copyText);