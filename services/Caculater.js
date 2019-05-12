
const ConsecutiveZero=(sumBinary)=>{
    const array=sumBinary.split('1');
    const reducer = (a, b) => a.length>b.length?a:b;
    return array.reduce(reducer).length;
}

const CaculateJson=(inputString)=>{
    let sumValue=0;
    let charters=[];
    for (var i = 0; i < inputString.length; i++) {
        charters.push({"charter":inputString[i],"ascii":inputString.charCodeAt(i)});
        console.log(inputString[i],inputString.charCodeAt(i));
        sumValue+=inputString.charCodeAt(i);
      }
      charters.push({"charter":"Sum","ascii":sumValue});
      const sumBinary= parseInt(sumValue).toString(2); 
      const consecutiveZero=ConsecutiveZero(sumBinary);
      const resultJson={
        "fullname":inputString,
        sumValue,
        sumBinary,
        consecutiveZero,
        charters
      }
    return resultJson;
}

module.exports = {
    CaculateJson
};