import { HubConnection } from "@aspnet/signalr-client";

let connection = new HubConnection(window["__HUB_ENDPOINT__"]);

connection.send('send', data => {
    console.log(data);
});

connection.start()
    .then(() => connection.invoke('send', 'Hello'));