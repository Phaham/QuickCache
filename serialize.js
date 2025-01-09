
var serialize=(data)=>{
    var to_return="";
    if(typeof data==='string')
    {
        var from_string=data.split(" ");
        //finding out the length of our array
        var len=from_string.length;
        to_return+=`*${len}\\r\\n`;
        for(let i=0;i<len;i++)
        {
            var temp_length=from_string[i].length;
            to_return+=`$${temp_length}\\r\\n`;
            to_return+=`${from_string[i]}\\r\\n`;

        }
        
    }
    else if(typeof data==='number')
    {
        to_return=`:${data}\\r\\n`;
 
    }
    else if(data===null)
    {
        to_return=`-1\\r\\n`;

    }
    else
    {
        //probably an error
        to_return=`-ERR unknown command ${data} \\r\\n`

    }
    return to_return;
}

module.exports=serialize;

