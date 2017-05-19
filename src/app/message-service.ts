import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Message } from './message';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MessageService {
        private messageUrl = 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk';
        constructor (private http: Http) {}
        getMessage(): Observable<Message> {
                return this.http.get(this.messageUrl)
                        .map((response:any) => response.json() as Message)
                        .catch(this.handleError);
        }
        private handleError(error: any): Observable<any> {
                console.error('An error occurred', error);
                return Observable.throw(error.message || error);
        }
}

