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
        return total % this.size;
    }
    qudraticPorb(index,atempt){
        return (index+atempt*atempt)%this.size;
    }
    set(key,value){
        let index=this.hash(key)
        let atempt=0;
        while(this.table[index]!==undefined){
            index = this.qudraticPorb(index,atempt)
            atempt++;

        }
        this.table[index]={key,value};
    }
    get(key) {
        let index = this.hash(key);
        let initialIndex = index;
        while (this.table[index] !== undefined) {
          if (this.table[index].key === key) {
            // Key found, return the corresponding value
            return this.table[index].value;
          }
          // Linearly probe to the next index
          index = this.linearProbe(index);
          // Exit loop if we've returned to the initial index (no such key)
          if (index === initialIndex) {
            break;
          }
        }
        // Key not found
        return undefined;
      }

    display(){
        for(let i=0;i<this.table.length;i++){
            if (this.table[i]!==undefined) {
                console.log(this.table[i].value);
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