const arr=[2,45,23,434,3];
Array.prototype.myMap=function(procedure){
    let output=[];
    for (let i=0;i<this.length;++i)
        output.push(procedure(this[i]));
    return output;
}
console.log(arr.myMap(element=> element*2));

Array.prototype.myFilter=function(procedure){
    const output =[];
    for (let element in this)
        if (procedure(element))
            output.push(element);
    return output;
}

console.log(arr.myFilter(element=> element%2===0));