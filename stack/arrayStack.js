class stack{
    constructor(){
        this.items=[];
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if (this.items.length==0) {
            console.log('stack underflow');
        }
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }
    display(){
        for(let i=this.items.length-1;i>=0;i--){
            console.log(this.items[i]);
        }
    }
}


let mystack=new stack()

mystack.push(10)
mystack.push(100)
mystack.push(1000)
mystack.push(10000)

mystack.display()
console.log('first');
console.log(mystack.pop());
console.log(mystack.peek());

