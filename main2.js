class MyString {
    reverse(word) {
        let newWord = '';
        for (let i = word.length; i > -1; i--) {
            newWord += word.charAt(i)
        }
        return newWord;
    }
    ucFirst(word) {
        let newWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        return newWord;
    }
    ucWords(word) {
        let newWord = word.split(' ');
        let strAll = '';
        for (let i = 0; i < newWord.length; i++) {
            let newUp = newWord[i].charAt(0).toUpperCase() + newWord[i].slice(1).toLowerCase();
            strAll += `${newUp} `;
        }
        return strAll;
    }
}

let str = new MyString();
console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal arsenal'));