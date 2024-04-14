let a = 'dhanis suhail vibinraj  jj  vibinrajjfff' 

let b='';
let largest='';

for(let i=0;i<=a.length;i++){
    if(a[i]==' ' || i==a.length){
        
        if(largest.length<b.length){
            largest=b
        }
        
        b=''

    }else{
        b+=a[i];
    }
        
    
}

console.log(largest);