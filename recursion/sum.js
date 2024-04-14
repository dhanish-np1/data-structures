let a =[1,2,3,4,5]

function sum(arr,index=0) {
    if(arr.length<=index){
        return 0;
    }
    return arr[index] + sum(arr,index+1)
}

console.log(sum(a));