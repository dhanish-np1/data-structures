let a='hello'
function reve(str,index=str.length-1) {
    if (index==-1) {
        return ''
    }
    return str[index]+reve(str,index-1)
}

console.log(reve(a));