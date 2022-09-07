// 观察者模式 是基于发布订阅的
// 发布订阅有一个调度中心,但是观察者不需要调度中心,被观察者中直接存储所有的观察者,当情况发生变化的时候去通知所有的观察者

// 那么被观察者中就有两个函数,一个是收集观察者的函数,一个更新自身状态的函数

class Subject{
    constructor(name){
        this.state = 'happy';//状态
        this.observers = [];//存储观察者
        this.name = name;//被观察者名称
    }
    attach(o){
        this.observers.push(o);
    }
    setState(newState){
        this.state = newState;
        this.observers.forEach(o=>o.update(this));
    }
}

class Observer{
    constructor(name){
        this.name = name;//观察者名称
    }
    update(subject){
        console.log('当前观察者'+this.name+'被通知了,当前被观察者'+subject.name+'状态是'+subject.state)
    }
}

let student = new Subject('学生');
let parent = new Observer("父母");
let teacher = new Observer("老师");

// 被观察者存储观察者的前提，需要先接纳观察者
student.attach(parent);
student.attach(teacher);
student.setState("被欺负了");