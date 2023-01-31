module.exports = function reverse (n) {
		
    let strN = String(n).split("");
    if(strN[0] === '-'){
        strN = strN.slice(1, strN.length);
    }
    strN = strN.reverse();
    if(strN[0] === '0'){
        strN = strN.slice(1, strN.length);
    }

    return Number(strN.join(''));
}
