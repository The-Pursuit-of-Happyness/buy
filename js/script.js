//获取class节点
function getByClass(parent,classname){ 
	if(parent.getElementsByClassName){ 
       return parent.getElementsByClassName(classname);
	}else{
        var results = new Array();//用来存储所有取到的class为box的元素
        var elems = parent.getElementsByTagName("*");
        for(var i =0;i<elems.length;i++){ 
       		if(elems[i].className.indexOf(classname) !=- 1){ 
            	results.push(elems[i]);
            }
        }
       return results;  
    }
} 


//实现点击每个标题选框 下面的选框全被选中函数
function sectionChecked(){ 
	var checkboxAll1= getByClass(content,"checkbox1");
	for(var i=0;i<checkboxAll1.length;i++){ 
        checkboxAll1[i].onclick = function(){ 
          alert(1);

        }
	}
	

}



 //单行删除函数
function del(){ 
	var items = getByClass(content,"item");//获取所有的单行商品
	var gabs = getByClass(content,"gab");//获取所有的垃圾桶
	for(var i=0;i<gabs.length;i++){
		gabs[i].onclick = function(){ 
			var parent =  this.parentNode.parentNode.parentNode.parentNode.parentNode;
			var child = this.parentNode.parentNode.parentNode.parentNode;
			var dPrice = parseInt(getByClass(child,"d-price")[0].innerHTML);
	   		var fPrice = parseInt(getByClass(child,"f-price")[0].innerHTML);
	    	parent.removeChild(child);
	        sum();
	    }
	}
}

function del2(){ 
	var del = document.getElementById("del");
	var checkboxAll2 = getByClass(content,"checkbox2");
	del.onclick = function(){ 
        for(var i =0;i<checkboxAll2.length;i++){ 
		    if(checkboxAll2[i].checked){
        	    checkboxAll2[i].parentNode.parentNode.removeChild(checkboxAll2[i].parentNode);
            }
        }
    }
}



//选择购买个数
function subAdd(){ 
	var subAll = getByClass(content,"sub");
	var addAll = getByClass(content,"add");
	for(var i=0;i<addAll.length;i++){ 
		addAll[i].onclick = function(){ 
	     	var parent= this.parentNode.parentNode.parentNode.parentNode;
	     	var num = this.previousElementSibling;
	      	num.innerHTML = parseInt(num.innerHTML)+1;
	      	var dPrice = getByClass(parent,"d-price")[0];
	     	var fPrice =getByClass(parent,"f-price")[0];
	      	fPrice.innerHTML = parseInt(num.innerHTML)*parseInt(dPrice.innerHTML);
	     	sum();
	    }

    }
   for(var i=0;i<subAll.length;i++){ 
		subAll[i].onclick = function(){ 
		    var parent= this.parentNode.parentNode.parentNode.parentNode;
    		var num0 = this.nextElementSibling;
     	    num0.innerHTML = parseInt(num0.innerHTML)-1;
     	     var dPrice = getByClass(parent,"d-price")[0];
            var fPrice =getByClass(parent,"f-price")[0];
           fPrice.innerHTML = parseInt(num0.innerHTML)*parseInt(dPrice.innerHTML);
         	if(parseInt(num0.innerHTML)<1){ 
       		    num0.innerHTML = 1;
			}
           if(parseInt(fPrice.innerHTML)<=1){ 
       		    fPrice.innerHTML = 1;
           }
           
           sum();
        }
    }

}


//全选
function selectAll(){ 
	var checkboxAll = getByClass(content,"checkbox");//获取所有的单选按钮
	checkedAll.onclick = function(){ 
        for(var i=0;i<checkboxAll.length;i++){ 
			if(!checkboxAll[i].checked){
				for(var j=0;j<checkboxAll.length;j++){ 
          		  	checkboxAll[j].checked = true;
       		 	}
       		 	
        	}else{ 
        		for(var j=0;j<checkboxAll.length;j++){ 
          			checkboxAll[j].checked = false;
       		    }
       		}
	    }
		sum();
    }
}

//计算总价
function sum(){
	var fPriceAll = getByClass(content,"f-price")//获取所有的单行总价格
	var checkboxAll2 = getByClass(content,"checkbox2");
	var sum = document.getElementById("sum");
	sum.innerHTML =0;
	var sumInt=parseInt(sum.innerHTML);
	for(var i =0;i<checkboxAll2.length;i++){ 
		if(checkboxAll2[i].checked){
        	sumInt = sumInt + parseInt(fPriceAll[i].innerHTML);
        }
    }
    sum.innerHTML = sumInt;
}