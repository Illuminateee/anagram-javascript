function anagramGenerator(words) {
    // membuat object kosong untuk menaruh hasil
    const isAnagram = {};

    // looping untuk array words
    for (const word of words) {

        // membuat perkata dalam array word  menjadi huruf yang berurutan
        const sortedWord = word.split('').sort().join('');
    
        // validation apakah isAnagram = sortedword
        // jika iya, dia akan di push ke array yang ada, jika tidak dia akan membuat kelompok array baru
        if (isAnagram.hasOwnProperty(sortedWord)) {
            isAnagram[sortedWord].push(word);
        } else {
            isAnagram[sortedWord] = [word];
        }
    }

    // array untuk menaruh hasil
    const result = [];
    // looping untuk menaruh nilai anagram ke result
    for (const key in isAnagram) {
        result.push(isAnagram[key]);
    }

    return result;
}

const words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const isAnagram = anagramGenerator(words);
console.log(isAnagram);
