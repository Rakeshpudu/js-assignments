const first=(arr,n)=>{
    if(n===null)
    return  arr[0];
    if(arr==[] || n<0) return [];

    else{
        return arr.slice(0,n);
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
