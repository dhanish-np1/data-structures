let a=['1111','2222','3333']

function strJoin(str,index=0) {
    if (str.length==index) {
        return ''
    }
    return str[index] +strJoin(str,index+1)
}

console.log(strJoin(a));