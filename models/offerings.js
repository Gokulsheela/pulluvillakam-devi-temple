const mongoose= require("mongoose");
 const Schema= mongoose.Schema;
 main()
    .then(()=>{
        console.log("db connection success")
    })
    .catch((err)=>{
        console.log(err);
    });
async function main(){
        await mongoose.connect("mongodb://127.0.0.1:27017/pulluvillakam");
}

 const offeringsSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }

 });

 const offerings= mongoose.model("offerings",offeringsSchema);

//  const add=async ()=>{
//     let offer1= new offerings({
//         title:"Choroon (Child)",
//         content:"Its expense is only Rs.40.00."
//     });
//    let result=await offer1.save();
//  }
//  add();
 module.exports=offerings;