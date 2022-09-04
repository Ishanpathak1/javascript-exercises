const repeatString=function(word,times) {
    if (times<0) return 'error';
    let string='';
    for(let i=0 ; i<times ; i++) {
        string+=word
    }
    return string;
};

module.exports=repeatString;