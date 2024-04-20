class Node{
    constructor(key,data){
        this.data=data;
        this.key=key;
        this.next=null
    }
}

class hashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size;
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index=this.hash(key)
        let newNode= new Node(key,value)
        if (this.table[index]==undefined) {
            this.table[index]=newNode;
        } else {
            let curent=this.table[index];
            while (curent.next) {
                curent=curent.next;
            }
            curent.next=newNode
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            let curent=this.table[i]
            while (curent) {
                console.log(curent.key);
                curent=curent.next
            }
        }
    }
}

let table=new hashTable(50)

table.set('dha','nish')
table.set('su','hail')
table.set('dha','nish')
table.set('vibin','raj')
table.display()