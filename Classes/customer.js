
var ItemlIst=require("./menuData.ja")
class Customer  {
    constructor(){
      this.customername;
      this.contactNumber;
      this.customerId;
    };
    addOrder(id){
        ItemlIst.menuCatalige.forEach(element => {
            if(id==element.id){
                this.order.push({
                 id: element.id,
                 name:element.name,
                 price: element.price
                })
    
            }
        });
        return this.order;
    }
   modifyOrder(oldId,newId){
    for(var i=0;i<this.order.length;i++){
        if(oldId==this.order[i].id){
   this.order.splice(i,1);
   this.addOrder(newId);
    //this.order.slice(i,++i);
    }
   };
   //return this.order;
   //console.log(this.order)
}
}
var customer=new Customer();
ItemlIst.menuCatalige.forEach(element => {
    customer.id.push(element.id);
    customer.name.push(element.name);
    customer.price.push( element.price);
});
module.exports={Customer};