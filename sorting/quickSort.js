
function Qsort(arr){
    if(arr.length<2){
        return arr
    }
    let p=arr[arr.length-1]
    let l=[]
    let r=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<p){
            l.push(arr[i])
        }else{
            r.push(arr[i])
        }
    }
    return [...Qsort(l),p,...Qsort(r)]
}
const arr1 = [8,5,6,9,7,1,3,2]
console.log(Qsort(arr1)) 