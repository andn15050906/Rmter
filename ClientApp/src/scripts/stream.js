import { HubConnectionBuilder } from '@microsoft/signalr';
import * as glob from './global';

export const ConnectionConstructor = (url) => {
    const connection = new HubConnectionBuilder().withUrl(url).build();

    connection.on("ReceiveStream", (data) => {
        glob.setStream(data);
    })

    /*connection.on("AskedOnline", function (sender) {
        connection.invoke("ShowOnline", sender);
        Glob.markOnline(sender, true);
    });*/

    connection.start();
    return connection;
}