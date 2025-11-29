const fs=require('fs');
fs.readFile('sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error reading",err);
        
    }else{
        console.log(data);
        
    }

    const lineCount=data.split('\n');
    console.log("total lines are:",lineCount.length);
    
});