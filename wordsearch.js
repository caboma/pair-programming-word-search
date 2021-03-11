const wordSearch = (letters, word) => { 
    if(letters.length === 0){
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    let newArr = [];
    // console.log(horizontalJoin);
    for (let i = 0; i < horizontalJoin[0].length; i++) {
        let newWord = '';
        for(let j = 0; j < horizontalJoin.length; j++){
            newWord += horizontalJoin[j][i];  
        if (horizontalJoin.includes(word) || newWord.includes(word)){ 
        return true
    } else {
        return false
    }
}
newArr.push(newWord);
}
return newArr;

}

module.exports = wordSearch

console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK'));