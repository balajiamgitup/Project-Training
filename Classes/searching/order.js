var ItemlIst=require("./menuData.ja");
var {MenuItem}=require("./menuItem");
 function itemView(){
    console.log("       Menu     \n*******************");
    console.log("ID     NAME       PRICE  ");
    ItemlIst.forEach(value=>{
        console.log(value.id+"    "+value.name+"    "+value.price);
    });
  }
class Order extends MenuItem{
constructor(){
     super();
 this.orderId=234;
 this.orderStatus="Booked";
 //super.menuView();
};
        addMenu(id,name,price){
            this.id.push(id);
            this.name.push(name);
            this.price.push(price);
        };
        removeMenu(id){
           // ItemlIst.menuView(this.id,this.name,this.price);
            for(var i=0;i<this.id.length;i++){
                if(id==this.id[i]){
              this.id.splice(i,1);
              this.name.splice(i,1);
              this.price.splice(i,1);
            }
        }
        console.log("Your order cancel");
        //ItemlIst.menuView(this.id,this.name,this.price);
};
}
var obj=new Order();
ItemlIst.menuCatalige.forEach(element => {
    obj.id.push(element.id);
  obj.name.push(element.name);
  obj.price.push( element.price);
});
//  obj.addMenu(107,"Gobi",80);
// obj.addMenu(101,"Chapathi",40)
// obj.removeMenu(101);
// ItemlIst.menuView(obj.id,obj.name,obj.price);
module.exports={Order,obj};