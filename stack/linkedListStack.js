class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}


class stack{
    constructor(){
        this.top=null;
    }
    push(data){
        let newNode=new Node(data)
        newNode.next=this.top;
        this.top=newNode;
    }

    pop(){
        if(this.top==null){
            console.log('empty');
        }
        let top=this.top;
        this.top=this.top.next;
        return top
    }
    display(){
        let current=this.top;
        while(current){
            console.log(current.data);
            current=current.next
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


