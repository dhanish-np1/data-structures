function bubbleSort(arr) {
    let n=arr.length;
    let tem=0;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if (arr[j]>arr[j+1]) {
                tem=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tem
            }
        }   
    }
    return arr
    
}

let a=[9,8,7,6,5,4,3,2,1]

console.log(bubbleSort(a));