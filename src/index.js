const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let resultArrOfWords = []
    let arrOfWords = expr.split('**********')
    for (let wrd = 0; wrd < arrOfWords.length; wrd++) {
        const currentWord = arrOfWords[wrd];
        let wordOfLetters = ''
        for (let indexOfLetter = 0; indexOfLetter < currentWord.length; indexOfLetter+=10) {
            const currentLetter = currentWord.slice(indexOfLetter, indexOfLetter + 10);
            let = codeOfLetter = ''
            for (let positionInCodeOfLetter = 0; positionInCodeOfLetter < currentLetter.length; positionInCodeOfLetter += 2) {
                const codeUnit = currentLetter.slice(positionInCodeOfLetter, positionInCodeOfLetter + 2);
                if (codeUnit === '00') codeOfLetter = codeOfLetter + ''
                else if (codeUnit === '10') codeOfLetter = codeOfLetter + '.'
                else if (codeUnit === '11') codeOfLetter = codeOfLetter + '-'
                
            }
            wordOfLetters = wordOfLetters + MORSE_TABLE[codeOfLetter]
            
        }
        resultArrOfWords.push(wordOfLetters)
    }
    return resultArrOfWords.join(' ')
}

module.exports = {
    decode
}