const net = require("node:net");
const serialize = require("./serialize.js");
const deserialize = require("./deserialize.js");
 let newMap=new Map();

const server = net.createServer((socket) => {
    console.log('Client connected');

    // Attach the 'data' event to the socket, not the server
    socket.on('data', (data) => {
        var response=(data.toString());
        response=deserialize(response);
        if(response[0]=="PING"){
            socket.write("+PONG\r\n");
        }
        else if(response[0]==="ECHO")
        {
            var resp_len=response.length;
            var temp_str_resp="";
            for(var i=1;i<resp_len;i++)
            {
                temp_str_resp+=response[i];
                temp_str_resp+=" ";
            }
            socket.write(temp_str_resp);
        }
        else if(response[0]=== "SET")
        {
           
            newMap.set(response[1],response[2]);
            socket.write("OK");
        
        }
        else if(response[0]==="GET")
        {
            if(newMap.has(response[1]))
            {
                var temp=newMap.get(response[1]);
                socket.write(temp);
            }
            else
            {
                socket.write("nil");
            }
         
        }

      
    });

  

}).on('error', (error) => {
    console.error('Server error:', error);
});

// Port to listen on
const PORT = 6379;

// Start the server
server.listen(PORT, () => {
    console.log(`Redis server running on the port ${PORT}`);
});
