
import io from "socket.io-client";

const socket = io("http://localhost:9000", {
  autoConnect: false,
  transportOptions: {
    polling: {
      extraHeaders: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  },
});

export default socket;




 
   
