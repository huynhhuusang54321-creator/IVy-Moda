//---------------------product--------



const gioithieu = document.querySelector(".gioithieu");
const chitiet = document.querySelector(".chitiet");
const baoquan = document.querySelector(".baoquan");

const contentgioithieu = document.querySelector(".product-content-right-bottom-content-gioithieu");
const contentchitiet = document.querySelector(".product-content-right-bottom-content-chitietsanpham");
const contentbaoquan = document.querySelector(".product-content-right-bottom-content-baoquan");
if (gioithieu) {
    gioithieu.addEventListener("click", function () {
        contentgioithieu.style.display = "block";
        contentchitiet.style.display = "none";
        contentbaoquan.style.display = "none";
    });
}
if (chitiet) {
    chitiet.addEventListener("click", function () {
        contentgioithieu.style.display = "none";
        contentchitiet.style.display = "block";
        contentbaoquan.style.display = "none";
    });
}
if (baoquan) {
    baoquan.addEventListener("click", function () {
        contentgioithieu.style.display = "none";
        contentchitiet.style.display = "none";
        contentbaoquan.style.display = "block";
    });
}

const button=document.querySelector(".product-content-right-bottom-top");
if(button){
    button.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB");
    })
}

const bigImg=document.querySelector(".product-content-left-big-img img");
const smallImg=document.querySelectorAll(".product-content-left-small-img img");

smallImg.forEach(function(imgItem,x){
    imgItem.addEventListener("click",function(){
        bigImg.src=imgItem.src;
    })
})