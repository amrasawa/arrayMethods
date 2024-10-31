const arr=[2,45,23,434,3];
Array.prototype.myMap=function(procedure){
    let output=[];
    for (let i=0;i<this.length;++i)
        output.push(procedure(this[i]));
    return output;
}
console.log(arr.myMap(element=> element*2));