// SIMPLE 1ST CODE

 const fs=require('fs');
 const path=require('path');

 let oldPath= path.join(__dirname,"archieve","spidey.jpeg"); 
 let newPath= path.join(__dirname,"images","spidey.jpeg");

fs.rename(oldPath,newPath,(err)=>{
                           
    if(err){
         console.log("error moving file",err);
     }else{
         console.log("file oved succssfully");
                                
         }

  });


  // SECOND                  
  
  
  const { log } = require('console');
const fs=require('fs');
  const path=require('path');

  let oldPath= path.join(__dirname,"archieve","spidey.jpeg");
  let newPath= path.join(__dirname,"","spidey.jpeg");


  if(!fs.existsSync(path.join(__dirname,"images"))){
     fs.mkdirSync(path.join(__dirname,"images"));
  }

  fs.rename(oldPath,newPath,(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("file moved successfully");
        
    }
  })