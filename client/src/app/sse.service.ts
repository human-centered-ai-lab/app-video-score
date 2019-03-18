
import { Injectable, OnInit } from '@angular/core';
import { Observable, Observer, Subject, of, fromEvent } from 'rxjs';


@Injectable({ providedIn: 'root'})
export class SseService implements OnInit {

  private sseSource: EventSource;
  public  sseEvent: Observable<MessageEvent>;

  constructor() {
    this.sseSource = new EventSource('/stream');
  }

  ngOnInit() {
    this.sseEvent = this.getEvent();
    this.sseEvent.subscribe (v => console.log(v))
  }

  getEvent(): Observable<MessageEvent> {
    const observable: Observable<MessageEvent>  = new Observable(observer => {
      const handler = (event) => observer.next(event);
      this.sseSource.addEventListener('greeting', handler);
      return () => this.sseSource.removeEventListener('greeting', handler);
    });
    return observable;
  }

}



/*
@Injectable({ providedIn: 'root'})
export class SseService {

  constructor() { }

  private subject: Subject<MessageEvent>;

  public connect(url): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  private create(url): Subject<MessageEvent> {
    
    const observable = new Observable(observer => {
      const source = new EventSource(url);
      const handler = (event) => observer.next(event);
      source.addEventListener('greeting', handler);
      return () => source.removeEventListener('greeting', handler);
    });

    console.log(observable);
    return Subject.create(observable);
  }

}
*/