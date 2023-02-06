const hirakata = [
    // a vowel
    {romaji: "a", hiragana: "あ", katakana: "ア", vowel: "a", consonant: null},
    {romaji: "ka", hiragana: "か", katakana: "カ", vowel: "a", consonant: "k"},
    {romaji: "sa", hiragana: "さ", katakana: "サ", vowel: "a", consonant: "s"},
    {romaji: "ta", hiragana: "た", katakana: "タ", vowel: "a", consonant: "t"},
    {romaji: "na", hiragana: "な", katakana: "ナ", vowel: "a", consonant: "n"},
    {romaji: "ha", hiragana: "は", katakana: "ハ", vowel: "a", consonant: "h"},
    {romaji: "ma", hiragana: "ま", katakana: "マ", vowel: "a", consonant: "m"},
    {romaji: "ya", hiragana: "や", katakana: "ヤ", vowel: "a", consonant: "y"},
    {romaji: "ra", hiragana: "ら", katakana: "ラ", vowel: "a", consonant: "r"},
    {romaji: "wa", hiragana: "わ", katakana: "ワ", vowel: "a", consonant: "w"},
    {romaji: "ga", hiragana: "が", katakana: "ガ", vowel: "a", consonant: "g"},
    {romaji: "za", hiragana: "ざ", katakana: "ザ", vowel: "a", consonant: "z"},
    {romaji: "da", hiragana: "だ", katakana: "ダ", vowel: "a", consonant: "d"},
    {romaji: "ba", hiragana: "ば", katakana: "バ", vowel: "a", consonant: "b"},
    {romaji: "pa", hiragana: "ぱ", katakana: "パ", vowel: "a", consonant: "p"},
    // i vowel
    {romaji: "i", hiragana: "い", katakana: "イ", vowel: "i", consonant: null},
    {romaji: "ki", hiragana: "き", katakana: "キ", vowel: "i", consonant: "k"},
    {romaji: "shi", hiragana: "し", katakana: "シ", vowel: "i", consonant: "s"},
    {romaji: "chi", hiragana: "ち", katakana: "チ", vowel: "i", consonant: "t"},
    {romaji: "ni", hiragana: "に", katakana: "ニ", vowel: "i", consonant: "n"},
    {romaji: "hi", hiragana: "ひ", katakana: "ヒ", vowel: "i", consonant: "h"},
    {romaji: "mi", hiragana: "み", katakana: "ミ", vowel: "i", consonant: "m"},
    {romaji: "ri", hiragana: "り", katakana: "リ", vowel: "i", consonant: "r"},
    {romaji: "wi", hiragana: "ゐ", katakana: "ヰ", vowel: "i", consonant: "w"},
    {romaji: "gi", hiragana: "ぎ", katakana: "ギ", vowel: "i", consonant: "g"},
    {romaji: "ji", hiragana: "じ", katakana: "ジ", vowel: "i", consonant: "z"},
    {romaji: "dji", hiragana: "ぢ", katakana: "ヂ", vowel: "i", consonant: "d"},
    {romaji: "bi", hiragana: "び", katakana: "ビ", vowel: "i", consonant: "b"},
    {romaji: "pi", hiragana: "ぴ", katakana: "ピ", vowel: "i", consonant: "p"},
    // u vowel
    {romaji: "u", hiragana: "う", katakana: "ウ", vowel: "u", consonant: null},
    {romaji: "ku", hiragana: "く", katakana: "ク", vowel: "u", consonant: "k"},
    {romaji: "su", hiragana: "す", katakana: "ス", vowel: "u", consonant: "s"},
    {romaji: "tsu", hiragana: "つ", katakana: "ツ", vowel: "u", consonant: "t"},
    {romaji: "nu", hiragana: "ぬ", katakana: "ヌ", vowel: "u", consonant: "n"},
    {romaji: "fu", hiragana: "ふ", katakana: "フ", vowel: "u", consonant: "h"},
    {romaji: "mu", hiragana: "む", katakana: "ム", vowel: "u", consonant: "m"},
    {romaji: "yu", hiragana: "ゆ", katakana: "ユ", vowel: "u", consonant: "y"},
    {romaji: "ru", hiragana: "る", katakana: "ル", vowel: "u", consonant: "r"},
    {romaji: "gu", hiragana: "ぐ", katakana: "グ", vowel: "u", consonant: "g"},
    {romaji: "zu", hiragana: "ず", katakana: "ズ", vowel: "u", consonant: "z"},
    {romaji: "dzu", hiragana: "づ", katakana: "ヅ", vowel: "u", consonant: "d"},
    {romaji: "bu", hiragana: "ぶ", katakana: "ブ", vowel: "u", consonant: "b"},
    {romaji: "pu", hiragana: "ぷ", katakana: "プ", vowel: "u", consonant: "p"},
    // e vowel
    {romaji: "e", hiragana: "え", katakana: "エ", vowel: "e", consonant: null},
    {romaji: "ke", hiragana: "け", katakana: "ケ", vowel: "e", consonant: "k"},
    {romaji: "se", hiragana: "せ", katakana: "セ", vowel: "e", consonant: "s"},
    {romaji: "te", hiragana: "て", katakana: "テ", vowel: "e", consonant: "t"},
    {romaji: "ne", hiragana: "ね", katakana: "ネ", vowel: "e", consonant: "n"},
    {romaji: "he", hiragana: "へ", katakana: "ヘ", vowel: "e", consonant: "h"},
    {romaji: "me", hiragana: "め", katakana: "メ", vowel: "e", consonant: "m"},
    {romaji: "re", hiragana: "れ", katakana: "レ", vowel: "e", consonant: "r"},
    {romaji: "we", hiragana: "ゑ", katakana: "ヱ", vowel: "e", consonant: "w"},
    {romaji: "ge", hiragana: "げ", katakana: "ゲ", vowel: "e", consonant: "g"},
    {romaji: "ze", hiragana: "ぜ", katakana: "ゼ", vowel: "e", consonant: "z"},
    {romaji: "de", hiragana: "で", katakana: "デ", vowel: "e", consonant: "d"},
    {romaji: "be", hiragana: "べ", katakana: "ベ", vowel: "e", consonant: "b"},
    {romaji: "pe", hiragana: "ぺ", katakana: "ペ", vowel: "e", consonant: "p"},
    // o vowel
    {romaji: "o", hiragana: "お", katakana: "オ", vowel: "o", consonant: null},
    {romaji: "ko", hiragana: "こ", katakana: "コ", vowel: "o", consonant: "k"},
    {romaji: "so", hiragana: "そ", katakana: "ソ", vowel: "o", consonant: "s"},
    {romaji: "to", hiragana: "と", katakana: "ト", vowel: "o", consonant: "t"},
    {romaji: "no", hiragana: "の", katakana: "ノ", vowel: "o", consonant: "n"},
    {romaji: "ho", hiragana: "ほ", katakana: "ホ", vowel: "o", consonant: "h"},
    {romaji: "mo", hiragana: "も", katakana: "モ", vowel: "o", consonant: "m"},
    {romaji: "yo", hiragana: "よ", katakana: "ヨ", vowel: "o", consonant: "y"},
    {romaji: "ro", hiragana: "ろ", katakana: "ロ", vowel: "o", consonant: "r"},
    {romaji: "wo", hiragana: "を", katakana: "ヲ", vowel: "o", consonant: "w"},
    {romaji: "go", hiragana: "ご", katakana: "ゴ", vowel: "o", consonant: "g"},
    {romaji: "zo", hiragana: "ぞ", katakana: "ゾ", vowel: "o", consonant: "z"},
    {romaji: "do", hiragana: "ど", katakana: "ド", vowel: "o", consonant: "d"},
    {romaji: "bo", hiragana: "ぼ", katakana: "ボ", vowel: "o", consonant: "b"},
    {romaji: "po", hiragana: "ぽ", katakana: "ポ", vowel: "o", consonant: "p"}
];


function getCards(vowel, pairs){

    let cards = [];
    let newCards = [];

    if(vowel === 'a'){
        cards = hirakata.slice(0,15);
    } else if(vowel === 'i'){
        cards = hirakata.slice(15,29);
    } else if(vowel === 'u'){
        cards = hirakata.slice(29,43);
    } else if(vowel === 'e'){
        cards = hirakata.slice(43,57);
    } else if(vowel === 'o'){
        cards = hirakata.slice(57,72);
    } else if(vowel === 'All'){
        cards = hirakata.slice(0,hirakata.length);
    }

    // push copies by referance does not copy.
    // so perhaps eliminate instead of select cards.
    
    function getRandom(deck, pairs1, length){
        if(pairs1 === 0){return};

        let randomNum = Math.floor(Math.random() * length) +1;

        if(randomNum === undefined){
            getRandom(deck, pairs1, length);
        }

        newCards.push(deck[randomNum]);
        newCards.push(deck[randomNum]);

        deck.splice(randomNum, 1);
        //console.log(deck);
        getRandom(deck, pairs1-1, length-1);
    };

    getRandom(cards, pairs, cards.length-1);


    
    return newCards.sort(() => Math.random() - 0.5);
};


export default getCards;