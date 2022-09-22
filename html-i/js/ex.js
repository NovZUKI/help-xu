let idcart = {};
let bircart={};
let worldcart={};
let sexcart={};

let id='';
let bir='';
let world='';
let sex='';

const btn=document.querySelector("#a1");
btn.addEventListener("click",()=>{
	addCart();
})
function addCart(){
  //入力された品名と個数をオブジェクトに追加
  var name=document.querySelector("#name").value;
  var number=1;//parseInt(document.querySelector("#number").value);
  var bo=0;
  if(bo==0){
    idcart[name]=number;
  }
  bo=0;
  sC();
}

function del(name){
  delete idcart[name];
  sC();
}

function change(name){
  changeSC();
  idcart[name]=id;

  sC();
}
//全局show
function sC(){
  let str="";
  for (key in idcart){
    if(key!='')
      str+="<tr><td>"+idcart[key]+"</td><td>"+key+"</td><td>"+bircart[key]+"</td><td>"+worldcart[key]+"</td><td>"+sexcart[key]+"</td><td><button onclick='del("+key+")'>删除</button></td><td><button onclick='change("+key+")'>变更</button></td></tr>";
  }
  //let key;让key赋上idcart值
  var table1=document.querySelector("#table1");
  table1.innerHTML="<table><tr><th>id</th><th>name</th><th>bir</th><th>world</th><th>sex</th><th colspan='2'>操作</th></tr>"+str+"</table>";
}

function changeSC(){

  id,bir,world,sex;
}

function show(){
  var key=document.querySelector("#name").value;
  str="<tr><td>"+idcart[key]+"</td><td>"+key+"</td><td>"+bircart[key]+"</td><td>"+worldcart[key]+"</td><td>"+sexcart[key]+"</td><td><button onclick='del("+key+")'>删除</button></td><td><button onclick='change("+key+")'>变更</button></td></tr>";
  var table1=document.querySelector("#table1");
  table1.innerHTML="<table><tr><th>id</th><th>name</th><th>bir</th><th>world</th><th>sex</th><th colspan='2'>操作</th></tr>"+str+"</table>";
}