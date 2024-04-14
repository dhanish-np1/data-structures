let a=[1,2,3,4,5,6,7,8,9]

function binary(arr,target,left=0,right=arr.length-1) {
    if(left>right){
        return -1;
    }
    let mid=Math.floor((left+right)/2)
    if(arr[mid]==target){
        return arr[mid]
    }else if(arr[mid]<target){
        return binary(arr,target,mid+1,right)
    }else{
        return binary(arr,target,left,mid-1)
    }

}
console.log(binary(a,31));