class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}


class linkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    add(data){
        let newNode=new Node(data)
        if (!this.head) {
            newNode.next=this.head;
            this.head=newNode;
            this.tail=newNode;
            
        } else {
            newNode.next=this.head
            this.tail.next=newNode;
            this.tail=newNode
            
        }
    }

    display(){
        if(this.head==this.tail.next){
            console.log(true);
        }
        let curent=this.head;
        let c=0;
        while (c<=6) {
            console.log(curent.data);
            curent=curent.next;
            c++
        }

    }
}


let ar=[1,2,3,4,5,6]

let list=new linkedlist()
ar.forEach((a)=>{
    list.add(a)
})

list.display()