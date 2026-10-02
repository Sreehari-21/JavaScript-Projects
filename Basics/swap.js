let swap=(a,b)=>{
    temp=a;
    a=b;
    b=temp
    return[a,b];
};
console.log(`Swapped values are ${swap(10,20)}`);