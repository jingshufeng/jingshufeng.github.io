//切换toggle: document.getElementsByClassName("原本的className")[0].classList.toggle("新的样式名称");//

//写一个修改图片们HTML的拼串儿函数
function getImagesHTML(img, description) {
    return "<div class='gallery'>" +
        "<a href='" + img + "'>" +
        "<img src='" + img + "'>" +
        "</a>" +
        "<div class='description'><a href='" + img + "'>" + description + "</a></div>" +
        "</div>"
}
//创建一个变量用来保存所有的HTML
var allHTML = "";
//for循环来增加图片
for (var i = 0; i < images.length; i++) {
    //var image = images[i];
    //var img = image[0];
    //var description = image[1];
    allHTML += getImagesHTML(images[i][0], images[i][1]);
}
//修改原网页中的HTML
var galleryContainer = document.getElementById("galleryContainer");
galleryContainer.innerHTML = allHTML;


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

//首先获取两个按钮
// basic paging logic to demo the buttons
var pr = document.querySelector('.paginate.left');
var pl = document.querySelector('.paginate.right');

pr.onclick = slide.bind(this, -1);
pl.onclick = slide.bind(this, 1);

var index = 0, total = 5;

function slide(offset) {
    index = Math.min(Math.max(index + offset, 0), total - 1);

    document.querySelector('.counter').innerHTML = (index + 1) + ' / ' + total;

    pr.setAttribute('data-state', index === 0 ? 'disabled' : '');
    pl.setAttribute('data-state', index === total - 1 ? 'disabled' : '');
}

slide(0);

