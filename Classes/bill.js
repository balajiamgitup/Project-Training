
class BIll{
    constructor(){
          this.billId;
          this.customerId;
          this.paymentType;
    }
    pay(){
        if(this.orderStatus=="Booked"){
            console.log(this.price)
            var bill=0;
       order.obj.price.forEach(value=>{
             bill+=value;
            console.log(value);
            })
            return bill;
        }
    }
};
module.exports=BIll;
// var bill=new BIll(401,"Booked",101,111,"online");
 //bill.obj.
// order.obj.addMenu(102);
// var x=bill.pay();
// console.log(x);
