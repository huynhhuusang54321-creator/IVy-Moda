

// hover menu
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    x = window.pageYOffset;
    if (x > 0) {
        header.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
    }
})





// slide
const imgContainer = document.querySelector('.slider-container');
const imgPosition = document.querySelectorAll(".slider-container img");
const dotItem = document.querySelectorAll(".dot");

let index = 0;
let imgNumber = imgPosition.length;
// anhslide ten tu dat    
imgPosition.forEach(function (anhslide, vtri) {
    anhslide.style.left = vtri * 100 + "%";

    dotItem[vtri].addEventListener("click", function () {
        slider(vtri);
    });
});
function imgslider() {
    index++;
    if (index >= imgNumber) {
        index = 0;
    }
    slider(index);
}
function slider(index) {
    // khong co "-" anh di chuyen ve ben phai 
    imgContainer.style.left = "-" + index * 100 + "%"

    dotItem.forEach(function (dot) {
        dot.classList.remove("active");
    });

    dotItem[index].classList.add("active");
}
slider(0);
setInterval(imgslider, 5000);

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
