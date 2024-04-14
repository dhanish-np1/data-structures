class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.pre=null;
    }
}


class linkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
    }

    add(data){
        const newNode=new Node(data)
        if (!this.head) {
            this.head=newNode;
            this.tail=newNode
        }else{
            newNode.pre=this.tail;
            this.tail.next=newNode;
            this.tail=newNode
        }

    }
    display(){
        let curent=this.tail;
        while(curent){
            console.log(curent.data);
            curent=curent.pre
        }
    }
    
}

let ar=[1,2,3,4,5,6]

let list=new linkedlist()
ar.forEach((a)=>{
    list.add(a)
})

list.display()