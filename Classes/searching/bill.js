var customer=require("./customer");
class BIll extends customer.Customer{
    constructor(orderId,orderStatus,billId,customerId,paymentType){
          super(orderId,orderStatus);
          this.billId=billId;
          this.customerId=customerId;
          this.paymentType=paymentType;
    }
    pay(){
        if(this.orderStatus=="Booked"){
           // console.log(this.price)
            var bill=0;
       this.customerOrder.forEach(value=>{
             bill+=value.price;
          //  console.log(value);
            })
            return bill;
        }
    }
};
var bill=new BIll(401,"Booked",101,111,"online");
 bill.addOrder(101);
 bill.addOrder(102);
 bill.addOrder(102);
// order.obj.addMenu(102);
var x=bill.pay();
console.log(x);
