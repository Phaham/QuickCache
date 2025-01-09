# **Redis Clone in Node.js**

## **Project Description**  
This project is a simplified **Redis** functionality implemented in **Node.js**. It replicates core Redis functionalities such as key-value storage and command handling over a TCP server. The project supports basic commands like `PING`, `ECHO`, `SET`, and `GET`, closely following the Redis communication protocol (RESP).

---

## **Features**  
- **PING Command**: Responds with `PONG`, similar to Redis.  
- **ECHO Command**: Returns the input string back to the client.  
- **SET Command**: Stores a key-value pair in memory. Optional support for **expiry** can be added.  
- **GET Command**: Retrieves the value of a key. If the key does not exist, it returns `nil`.  
- **RESP Protocol Compliance**: Structured responses for compatibility with Redis-like clients.  

---

## **How It Works**  
1. The project creates a **TCP server** using Node.js's `net` module.  
2. Commands are received from the client, deserialized, and processed.  
3. The server uses an in-memory **`Map`** to store key-value pairs efficiently.  
4. Responses are sent back to the client in Redis RESP protocol format.  

---

## **Technologies Used**  
- **Node.js**: For server-side implementation.  
- **`net` Module**: To handle TCP client-server communication.  
- **Map Data Structure**: For efficient in-memory key-value storage.  

---

## **Supported Commands**  
| Command        | Description                              | Example                   |
|----------------|------------------------------------------|---------------------------|
| **PING**       | Responds with `PONG`.                   | `PING` → `PONG`           |
| **ECHO**       | Returns the input string.               | `ECHO Hello` → `Hello`    |
| **SET**        | Sets a key-value pair.                  | `SET mykey myvalue` → OK  |
| **GET**        | Retrieves the value of a key.           | `GET mykey` → `myvalue`   |

---

## **Setup Instructions**  

### Prerequisites  
- Node.js installed (v14 or above).

