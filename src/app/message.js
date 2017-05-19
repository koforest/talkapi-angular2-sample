"use strict";
var Message = (function () {
    function Message(status, message, reply) {
        this.status = status;
        this.message = message;
        this.reply = reply;
    }
    return Message;
}());
exports.Message = Message;
var Results = (function () {
    function Results() {
    }
    return Results;
}());
//# sourceMappingURL=message.js.map