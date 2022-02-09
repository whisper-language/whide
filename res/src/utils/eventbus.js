
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.pipline = new Map();
    }
    //订阅
    EventBus.prototype.on = function (clientId, eventName, handler) {
        console.log("注册:" + clientId + "事件:" + eventName);
        var clientList = this.pipline.get(eventName);
        if (clientList == undefined) {
            this.pipline.set(eventName, new Map());
            clientList = this.pipline.get(eventName);
        }
        clientList === null || clientList === void 0 ? void 0 : clientList.set(clientId, handler);
        this.pipline.set(eventName, clientList);
    };
    //取消订阅
    EventBus.prototype.off = function (clientId, eventName) {
        var clientList = this.pipline.get(eventName);
        clientList === null || clientList === void 0 ? void 0 : clientList["delete"](clientId);
    };
    //注册事件
    EventBus.prototype.install = function (eventName) {
        this.pipline.set(eventName, new Map());
    };
    //注销事件
    EventBus.prototype.uninstall = function (eventName) {
        this.pipline["delete"](eventName);
    };
    //触发
    EventBus.prototype.fire = function (clientId, eventName, payload) {
        // console.log("来源: "+clientId+"\n事件: "+eventName,"\n负载: "+JSON.stringify(payload))
        var clientList = this.pipline.get(eventName);
        // console.log(this.pipline);
        clientList === null || clientList === void 0 ? void 0 : clientList.forEach(function (handler, idx) {
            if (idx != clientId) {
                handler(payload);
            }
        });
    };
    return EventBus;
}());
var ev = new EventBus();
export default ev;
