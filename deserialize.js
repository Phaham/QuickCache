var deserialize=(val)=>{
    var response_array=[];
    var final_response_array=[];


 
    if(val[0]=='*')
    {
        
        response_array=val.split('\\r\\n');
        var len=response_array.length;
    
        for(let i=2;i<len;i+=2)
        {
            final_response_array.push(response_array[i]);
        }
       
    }
    return final_response_array;


}
module.exports=deserialize;