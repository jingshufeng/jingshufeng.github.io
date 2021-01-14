var imgArr = [
    "123/0121-1.png",
    "123/0121-2.png",
    "123/0207-1.png",
    "123/0207-2.png",
    "123/0217.png",
    "123/0303-1.png",
    "123/0303-2.png",
    "123/0303-3.png",
    "123/0303-4.png",
    "123/0303-5.png",
    "123/0303-6.png",
    "123/0308.png",
    "123/0322-1.png",
    "123/0322-2.png",
    "123/0326.png",
    "456/0409.png",
    "456/0421.png",
    "456/0429-1.png",
    "456/0429-2.png",
    "456/0514.png",
    "456/0519.png",
    "456/0520-1.png",
    "456/0520-2.png",
    "456/0525-1.png",
    "456/0525-2.png",
    "456/0606.png",
    "456/0607.png",
    "456/0621.png",
    "456/0625.png",
    "456/0628.png",
    "789/0701.png",
    "789/0705.png",
    "789/0721-1.png",
    "789/0721-2.png",
    "789/0806.png",
    "789/0813.png",
    "789/0816.png",
    "789/0910.png",
    "789/0921.png",
    "101112/1012.png",
    "101112/1024.png",
];

//写一个修改图片们HTML的拼串儿函数
function getImagesHTML(img) {
    return "<div class='card' id='my-card'>" +
        "<img src='" + img + "' class='card-img-top'>" +
        "</div>"
}
//创建一个变量用来保存所有的HTML
var allHTML = "";
//for循环来增加图片
for (var i = 0; i < imgArr.length; i++) {
    allHTML += getImagesHTML(imgArr[i]);
}

//修改原网页中的HTML
var myCardColumns = document.querySelector("#my-card-columns");
myCardColumns.innerHTML = allHTML;


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

//获取所有的card img
var card = document.querySelector("#my-card");
for (var i = 0; i < card.length; i++) {
    card[i].onclick = function (e) {
        modal.classList.toggle("visiable");
        var imgSrc = this.getElementsByTagName("img")[0].getAttribute('src');
        modalImg.setAttribute("src", imgSrc);
        e.preventDefault();
        index = findImg(imgSrc);
        slide(0);
    };
}
//创建一个函数用来对比index是否相同
function findImg(src) {
    //var一个变量用来保存结果
    var i;
    for (i = 0; i < card.length; i++) {
        if (src === imgArr[i]) {
            break;
        }
    }
    return i;
};
//首先获取两个按钮
// basic paging logic to demo the buttons
var pl = document.querySelector('.paginate.left');
var pr = document.querySelector('.paginate.right');


pl.onclick = function (e) {
    e.stopPropagation();
    slide(-1);
};


pr.onclick = function (e) {
    e.stopPropagation();
    slide(1);
};



var index = 0, total = imgArr.length;

function slide(offset) {
    index = Math.min(Math.max(index + offset, 0), total - 1);

    document.querySelector('.counter').innerHTML = (index + 1) + ' / ' + total;

    pl.setAttribute('data-state', index === 0 ? 'disabled' : '');
    pr.setAttribute('data-state', index === total - 1 ? 'disabled' : '');
    modalImg.src = imgArr[index];
}

slide(0);