// 发布订阅者模式
// 一种对象间一对多的依赖关系,其中一个对象的状态发生改变的时候,所依赖他的对象都将得到状态改变的通知

class EventEmitter {
  constructor() {
    this.event = {};
  }
  subscribe(type, callback) {
    if (!this.event) this.event = Object.create(null);
    if (!this.event[type]) {
      this.event[type] = [callback];
    } else {
      this.event[type].push(callback);
    }
  }
  unsubscribe(type, callback) {
    if (!this.event) return;
    this.event[type] = this.event[type].filter((item) => item !== callback);
  }
  once(type, callback) {
    function fn(...args) { //因为是绑定完之后移除 所以要触发 触发的方式通过cb传参注意!
      callback(args);
      this.unsubscribe(type, fn);
    }
    this.subscribe(type, fn);
  }
  publish(type, ...args) {
    if (!this.event) return;
    this.event[type] && this.event[type].forEach((fn) => fn.apply(this, args));
  }
}

let myevent = new EventEmitter(); // 创建一个调度中心

let task1 = function (...args) {
  console.log("发布任务 任务信息", args);
};
let task2 = function (...args) {
  console.log("发布任务2 任务信息", args);
};

// case1 在调度中心中的任务只要订阅了就一直可以发布 除非解除订阅
myevent.subscribe('task1',task1)//订阅任务
myevent.publish('task1','ko no dio da');//发布任务
myevent.publish('task1','ko no dio da2');//发布任务
myevent.unsubscribe("task1", task1); // 解除订阅
myevent.publish('task1','ko no dio da3');//发布任务
// 结果
// 发布任务 任务信息 [ 'ko no dio da' ]
// 发布任务 任务信息 [ 'ko no dio da2' ]

// case2 在调度中心中的任务只要如果执行once那么只能发布一次
myevent.once('task2',task2)//订阅任务
myevent.publish('task2','ko no jojo da');//发布任务
myevent.publish('task2','ko no jojo da2');//发布任务
myevent.unsubscribe("task2", task2); // 解除订阅
myevent.publish('task2','ko no jojo da3');//发布任务
// 结果
// 发布任务2 任务信息 [ [ 'ko no jojo da' ] ]

