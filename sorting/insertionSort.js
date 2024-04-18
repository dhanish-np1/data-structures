function insertionSort(arr) {
    let n=arr.length;
    for(let i=1;i<n;i++){
        let curent =arr[i]
        for(let j=i-1;j>=0&& arr[j]>curent;j--){
            arr[j+1]=arr[j];
            arr[j]=curent;
        }

    }

    return arr
    
}

let a =[5,4,3,2,1]
console.log(insertionSort(a));