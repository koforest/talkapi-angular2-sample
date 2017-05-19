"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var message_service_1 = require("./message-service");
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritaqs' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ!' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Toranado' }
];
var AppComponent = (function () {
    function AppComponent(messageService) {
        this.messageService = messageService;
        this.title = 'Ture of Heroes';
        this.hero = {
            id: 1,
            name: 'windstorm'
        };
        this.heroes = HEROES;
        this.talks = [
            { by: 'system', message: 'test' },
            { by: 'system', message: 'test' }
        ];
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    ;
    ;
    AppComponent.prototype.addMessage = function (getmessage) {
        var _this = this;
        var sendtalk = {
            by: 'me',
            message: getmessage
        };
        this.talks[this.talks.length] = sendtalk;
        var message;
        this.messageService.getMessage()
            .subscribe(function (message) { return _this.message = message; });
        var gettalk = {
            by: 'AI',
            message: this.message
        };
        this.talks[this.talks.length] = gettalk;
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <h1>{{title}}</h1>\n        <h2>Talk with TALKAPI</h2>\n        <ul>\n\t\t<li *ngFor=\"let talk of talks\">\n\t\t\t<span>{{talk.by}}:   </span>{{talk.message}}\n\t\t</li>\n        </ul>\n        <label>New message: <input #newMessage /></label>\n        <button (click)=\"addMessage(newMessage.value); newMessage.value=''\">Send Message</button>\n\n        <h2>My Heroes</h2>\n        <ul class= \"heroes\">\n          <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">\n            <span class=\"badge\">{{hero.id}}</span>\n             {{hero.name}}\n          </li>\n        </ul>\n        <hero-detail [hero]=\"selectedHero\"><hero-detail>\n        ",
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n "],
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], AppComponent);
exports.AppComponent = AppComponent;
var Talk = (function () {
    function Talk() {
    }
    return Talk;
}());
exports.Talk = Talk;
//# sourceMappingURL=app.component.js.map