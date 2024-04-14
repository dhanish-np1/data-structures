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
        const newNode=new Node(data)
        if (!this.head) {
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.tail.next=newNode;
            this.tail=newNode;
        }

    }
    display(){
        let curent=this.head;
        while (curent) {
            console.log(curent.data);
            curent=curent.next;
        }

    }
    remove(n){
        let curent=this.head;
        while (curent) {
            let curent2=curent;
            while (curent2.next) {
                if (curent.data===curent2.next.data) {
                    curent2.next=curent2.next.next
                } else {
                    curent2=curent2.next;
                }
                
            }
            curent=curent.next
        }
    }
}


const list=new linkedlist()
let a=[1,2,3,1,2,3,4,5]
a.forEach((c)=>{
   list.add(c)
})
list.display()
list.remove()
console.log("after");
list.display()