class stack{
    constructor(){
        this.items=[]
    }

    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.items.length===0){
            console.log('stack underflow');
        }
        return this.items.pop()
    }
    clear(){
        this.items=[]
    }
    peek(){
        if (this.items.length===0) {
            console.log('stack is emty');
        }
        return this.items[this.items.length-1]
    }
    addBottom(data){
        if (this.items.length===0) {
            this.items.push(data)
        }else{
            const top=this.items.pop()
        this.addBottom(data)
        this.items.push(top)
        }
        
    }
    reverse(){
        const stack2=new stack()
        while (this.items.length!==0) {
            stack2.push(this.items.pop())
        }
        return stack2
    }

    display(){
        if (this.items.length===0) {
            console.log('stack under flow');
        } else {
            for(let i=this.items.length-1;i>=0;i--){
                console.log(this.items[i]);
            }
        }
    }
}
const newStak=new stack()

newStak.push(1)
newStak.push(10)
newStak.push(100)
newStak.push(1000)
newStak.pop()
newStak.addBottom(2)
// newStak.clear()
console.log("last"+newStak.peek());
console.log(newStak.reverse());
newStak.display()
