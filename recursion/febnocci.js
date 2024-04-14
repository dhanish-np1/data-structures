function feb(n) {
    if(n<=1){
        return n
    }
    return feb(n-1)+feb(n-2)

}
let ab=[]
for(let i=0;i<=10;i++){
    ab.push(feb(i))
}
console.log(ab);
