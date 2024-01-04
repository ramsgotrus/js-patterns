/* with the observer pattern we can subscribe certain objects to another object that called observer. 
whenever an event occur , the observer notifies all the its observers 
It has 3 important parts 1) observers 2) subscribe 3) unsubscribe 4) notify
*/

class Observable {
  constructor() {
    this.observer = [];
  }
  subscribe(f) {
    this.observer.push(f);
  }
  ubsubscribe(f) {
    this.observer = this.observer.filter((sub) => sub !== f);
  }
  notify(data) {
    this.observer.forEach((observer) => observer(data));
  }
}

export default Observable;

/* 
Pros
Using the observer pattern is a great way to enforce separation of concerns and the single-responsiblity principle.

Cons
If an observer becomes too complex, it may cause performance issues when notifying all subscribers.

*/
