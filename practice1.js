//1.#checkedAllBtn
//当点击全选按钮时，所有的checkbox都被选中
//首先选中全选按钮
var checkedAllBtn = document.getElementById("checkedAllBtn");
//然后为其绑定一个单击响应函数
checkedAllBtn.onclick = function () {
    //获取四个多选框items
    var items = document.getElementsByName("items");
    //alert(items.length);
    //遍历items
    for (var i = 0; i < items.length; i++) {
        //通过多选框的checked属性可以获取或设置多选框的选中状态,选中时返回true，未选中时返回false
        //alert(items[i].checked);
        //设置四个多选框变成选中状态
        items[i].checked = true;
    };

    //2.#checkedNoBtn
    //当点击全不选按钮时，所有的checkbox都不被选中
    //首先选中全不选按钮
    var checkedNoBtn = document.getElementById("checkedNoBtn");
    //然后为其绑定一个单击响应函数
    checkedNoBtn.onclick = function () {
        //获取四个多选框items
        var items = document.getElementsByName("items");
        //alert(items.length);
        //遍历items
        for (var i = 0; i < items.length; i++) {
            //通过多选框的checked属性可以获取或设置多选框的选中状态,选中时返回true，未选中时返回false
            //alert(items[i].checked);
            //设置四个多选框变成选中状态
            items[i].checked = false;
        };



    };

    //3.#checkedRevBtn
    //当点击反选按钮时，选中所有没有被选择的多选框
    //首先选中反选按钮
    var checkedRevBtn = document.getElementById("checkedRevBtn");
    //然后为其绑定一个单击响应函数
    checkedRevBtn.onclick = function () {
        //获取四个多选框items
        var items = document.getElementsByName("items");
        //alert(items.length);
        //遍历items
        for (var i = 0; i < items.length; i++) {
            //通过多选框的checked属性可以获取或设置多选框的选中状态,选中时返回true，未选中时返回false
            //alert(items[i].checked);
            //通过if..else进行判断
            /*if (items[i].checked === true) {
                items[i].checked = false;
            } else if (items[i].checked === false) {
                items[i].checked = true;
            }
            */
            var isChecked = items[i].checked;
            items[i].checked = !isChecked;

        };



    };

};
//4.#sendBtn
//5.#checkedAllBox
//6.items

