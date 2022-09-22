const btn=document.querySelector("#a1");
btn.addEventListener("click",()=>{
	addCart();
})
let cart = {};

            
function addCart(){
    //入力された品名と個数をオブジェクトに追加
    var name=document.querySelector("#name").value;
    var number=1;//parseInt(document.querySelector("#number").value);
    var bo=0;
    if(cart!=null)
        if(name in cart){
            cart[name]=cart[name]+number;
            bo=1;
        }
    if(bo==0){
        cart[name]=number;
    }
    bo=0;
    showCart();
}
function showCart(){
    //買い物かごの中を出力する
    let str="";
    
    for(key in cart){
        if(key!='')
            str+="<tr><td>"+key+"</td><td>"+cart[key]+"</td><td><input type='button' value='变更' id='a2'></td><tr>";
    }
    var table=document.querySelector("#table");
       table.innerHTML="<table><tr><th>物品名</th><th>数量</th></tr>"+str+"</table>";

}
function changeCart(){
    let str1="";
    for(key in cart){
        str1+="<tr><td>"+key+"</td><td>"+cart[key]+"</td><tr>";
    }
    var table=document.querySelector("#table");
       table.innerHTML="<table><tr><th>物品名</th><th>数量</th></tr>"+str1+"</table>";
}
function deleteCart(){
    for(key in cart){
        cart[key]='';
    }
    
}