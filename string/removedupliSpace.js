let a='sfsdfdsf  ddfdf    dfdfdf   fdfsdf'
let s=false
let b=''
for(let i=0;i<a.length;i++){
    if(a[i]==' '){
        if (s==false) {
            b+=' '
            s=true
        }
    }else{
        b+=a[i]
        s=false
    }
    
}
console.log(b);