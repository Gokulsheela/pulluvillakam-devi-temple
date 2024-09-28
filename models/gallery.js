const mongoose= require("mongoose");
const Schema=mongoose.Schema;

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

const gallerySchema=new Schema({
    titel:{
        type:String,
        required:true
    },
    img:{
        type:String,
    }
});

const gallery= mongoose.model("gallery",gallerySchema);

// const add=async()=>{
//     let data1=new gallery({
//         titel:"maholsavam 2024",
//     img:"/images/6c92869f95c089563fc86aae4a1bc318.jpg"
//     })
//    await data1.save();
// };
// add();

module.exports=gallery;