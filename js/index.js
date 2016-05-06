window.onload = function(){ 
var content = document.getElementById("content");//获取主要内容节点
var fPriceAll = getByClass(content,"f-price");//获取所有的单行总价格
var dPriceAll = getByClass(content,"d-price");//获取所有的商品单价
for(var i=0;i<fPriceAll.length;i++){ 
	fPriceAll[i].innerHTML = dPriceAll[i].innerHTML;
}
var checkedAll = document.getElementById("checkedAll");//获取全选按钮
var checkboxAll = getByClass(content,"checkbox");//获取所有的单选按钮
sectionChecked();//实现点击每个标题选框 下面的选框全被选中
del();//单行删除  
subAdd();//选择购买个数函数
selectAll();//全选
del2();
for(i=0;i<checkboxAll.length;i++){ 
   checkboxAll[i].onclick = function(){
   sum(); 
}

}

}