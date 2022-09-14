var connection;
var home = [];

export function getHome() { return home; }

export function init(signalRConnection) {
    connection = signalRConnection;
}









export function setStream(data) {
    home[0].setStream(data);
}

export function sendLeftClick(x, y) { connection.invoke("SendLeftClick", x, y); }
export function sendRightClick(x, y) { connection.invoke("SendRightClick", x, y); }
export function sendMouseMove(x, y) { connection.invoke("SendMouseMove", x, y); }
export function sendKeyPress(key) { connection.invoke("SendKeyPress", x, y); }