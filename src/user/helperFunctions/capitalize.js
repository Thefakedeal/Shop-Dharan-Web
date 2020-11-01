export function capitalizeEachWord(sentence){
    const stringsentence = String(sentence)
    const words = stringsentence.split(' ')
    const capitalized = words.map(word=>{
        const lowerCaseWord = word.toLowerCase()
        return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1)
    }).join(' ');
    return capitalized
}