const net = require("net");
const serialize = require("./serialize.js");


const client = net.createConnection({ port: 6379, host: "127.0.0.1" }, () => {
  console.log("Connected to server");
  
  // Send commands to the server
  var to_send=serialize(`GET NAME`);  
  client.write(to_send,'utf8');
});

client.on("data", (data) => {
  console.log("Response from server:", data.toString());
  client.end();
});

client.on("end", () => {
  console.log("Disconnected from server");
});
