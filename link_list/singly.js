class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}


class linkedlist{
    constructor(){
        this.head=null;
    }
    add(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode;
        }else{
            let curent=this.head;
            while (curent.next) {
                curent=curent.next;
            }
            curent.next=newNode;
        }
        
    }

    display(){
        let curent=this.head;
        while (curent) {
            console.log(curent.data);
            curent=curent.next;
        }
    }
}


let ar=[1,2,3,4,5,6]

let list=new linkedlist()
ar.forEach((a)=>{
    list.add(a)
})

list.display()