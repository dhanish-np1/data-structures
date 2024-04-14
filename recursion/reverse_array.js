let a=[1,2,3,4,5,6]

function rev(arr,start=0,end=arr.length-1,temp) {
    if(start>=end){
        return arr
    }

    temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp
    return rev(arr,start+1,end-1)

}

console.log(rev(a));