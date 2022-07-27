var menuData=require("./menuData.ja");
// console.log( menuData[0].id);
class MenuItem{
    constructor(){
   this.id=[];
   this.name=[];
   this.price=[];
};
    setupdatePrice(oldPrice,newPrice){
        for(var i=0;i<this.price.length;i++){
            if(oldPrice==this.price[i]){
        this.price.splice(i,1,newPrice);
        }
        return this.price;
    }
    };
    menuView(){
        for(var i=0;i<this.id.length;i++){
            console.log(this.id[i]+"  "+this.name[i]+"  "+this.price[i]);
        }
    }
}
var menu=new MenuItem();
menuData.menuCatalige.forEach(element => {
        menu.id.push(element.id);
      menu.name.push(element.name);
      menu.price.push( element.price);
    });
  //  menu.menuView();
    // menu.setupdatePrice(150,200);
    // menu.menuView();
module.exports={MenuItem};
