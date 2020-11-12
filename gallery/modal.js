//切换toggle: document.getElementsByClassName("原本的className")[0].classList.toggle("新的样式名称");//

//首先获取modal和modalCloseBtn
var modal = document.getElementsByClassName("modal")[0];
var modalCloseBtn = document.getElementsByClassName("modalCloseBtn")[0];

var modalImg = document.querySelector("#modalImg>img");
modalImg.onclick = function (e) {
    e.stopPropagation();
};
modal.onclick = function () {
    modal.classList.toggle("visiable");
};

//获取所有的gallery
var galleries = document.getElementsByClassName("gallery");
for (var i = 0; i < galleries.length; i++) {
    galleries[i].onclick = function (e) {
        modal.classList.toggle("visiable");
        var imgSrc = this.getElementsByTagName("img")[0].getAttribute('src');
        modalImg.setAttribute("src", imgSrc);
        e.preventDefault();
    };
}
