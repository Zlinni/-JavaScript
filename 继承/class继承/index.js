class Parent{
    constructor(value){
        this.val = value
    }
    getValue(){
        console.log(this.val);
    }
    static getStaticData(){
        console.log('this is StaticMethod Data')
    }
}

class Child extends Parent{
    constructor(value){
        super(value)
        this.age = '17'
    }
    getAge(){
        console.log(this.age)
    }
}
const children = new Child('2233');
children.getValue()
children.getAge()
Child.getStaticData();
