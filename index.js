import Express from "express"
import { Server } from "socket.io"
import cors from "cors"
import http from "http"

const App= Express()

// 1. Create server using http
    const server = http.createServer(App)
// 2. Create server using Socket
    const io=new Server(server,{
        cors:{
            origin:'*',
            methods:["GET","POST"]
        }
    })

// 3.use socket events
io.on('connection',(socket)=>{
    console.log("Connection is established")

    socket.on('encryptedMessage', (msg) => {
        console.log('message: ' + msg);
      });

    // socket.on('message', (msg) => {
    //     console.log('message: ' + msg);
    //   });
    socket.on('disconnect',()=>{
        console.log("connection disconnected")
    })
    
      
})


const PORT=8005
server.listen(PORT,(err)=>{
    if(err){
        console.log("error while starting Server")
    }
    console.log(`server is running at port ${PORT}`)
})



