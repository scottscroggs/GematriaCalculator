var simpleGematriaMap = new Map();
    simpleGematriaMap.set('A', 1);
    simpleGematriaMap.set('B', 2);
    simpleGematriaMap.set('C', 3);
    simpleGematriaMap.set('D', 4);
    simpleGematriaMap.set('E', 5);
    simpleGematriaMap.set('F', 6);
    simpleGematriaMap.set('G', 7);
    simpleGematriaMap.set('H', 8);
    simpleGematriaMap.set('I', 9);
    simpleGematriaMap.set('J', 10);
    simpleGematriaMap.set('K', 11);
    simpleGematriaMap.set('L', 12);
    simpleGematriaMap.set('M', 13);
    simpleGematriaMap.set('N', 14);
    simpleGematriaMap.set('O', 15);
    simpleGematriaMap.set('P', 16);
    simpleGematriaMap.set('Q', 17);
    simpleGematriaMap.set('R', 18);
    simpleGematriaMap.set('S', 19);
    simpleGematriaMap.set('T', 20);
    simpleGematriaMap.set('U', 21);
    simpleGematriaMap.set('V', 22);
    simpleGematriaMap.set('W', 23);
    simpleGematriaMap.set('X', 24);
    simpleGematriaMap.set('Y', 25);
    simpleGematriaMap.set('Z', 26);

//Jewish Gematria Mapping
var jewishGematriaMap = new Map();
    jewishGematriaMap.set('A', 1);
    jewishGematriaMap.set('B', 2);
    jewishGematriaMap.set('C', 3);
    jewishGematriaMap.set('D', 4);
    jewishGematriaMap.set('E', 5);
    jewishGematriaMap.set('F', 6);
    jewishGematriaMap.set('G', 7);
    jewishGematriaMap.set('H', 8);
    jewishGematriaMap.set('I', 9);
    jewishGematriaMap.set('J', 600);
    jewishGematriaMap.set('K', 10);
    jewishGematriaMap.set('L', 20);
    jewishGematriaMap.set('M', 30);
    jewishGematriaMap.set('N', 40);
    jewishGematriaMap.set('O', 50);
    jewishGematriaMap.set('P', 60);
    jewishGematriaMap.set('Q', 70);
    jewishGematriaMap.set('R', 80);
    jewishGematriaMap.set('S', 90);
    jewishGematriaMap.set('T', 100);
    jewishGematriaMap.set('U', 200);
    jewishGematriaMap.set('V', 700);
    jewishGematriaMap.set('W', 900);
    jewishGematriaMap.set('X', 300);
    jewishGematriaMap.set('Y', 400);
    jewishGematriaMap.set('Z', 500);

//English Gematria Mapping
var englishGematriaMap = new Map();
    englishGematriaMap.set('A', 6);
    englishGematriaMap.set('B', 12);
    englishGematriaMap.set('C', 18);
    englishGematriaMap.set('D', 24);
    englishGematriaMap.set('E', 30);
    englishGematriaMap.set('F', 36);
    englishGematriaMap.set('G', 42);
    englishGematriaMap.set('H', 48);
    englishGematriaMap.set('I', 54);
    englishGematriaMap.set('J', 60);
    englishGematriaMap.set('K', 66);
    englishGematriaMap.set('L', 72);
    englishGematriaMap.set('M', 78);
    englishGematriaMap.set('N', 84);
    englishGematriaMap.set('O', 90);
    englishGematriaMap.set('P', 96);
    englishGematriaMap.set('Q', 102);
    englishGematriaMap.set('R', 108);
    englishGematriaMap.set('S', 114);
    englishGematriaMap.set('T', 120);
    englishGematriaMap.set('U', 126);
    englishGematriaMap.set('V', 132);
    englishGematriaMap.set('W', 138);
    englishGematriaMap.set('X', 144);
    englishGematriaMap.set('Y', 150);
    englishGematriaMap.set('Z', 156);


function calculateGematria(word){
    var sumSimple = 0; var sumJewish = 0; var sumEnglish = 0;
    var originalWord = document.getElementById("word").value;
    var wordInput = originalWord.toUpperCase();
    wordInput = wordInput.split(" ").join("");
    console.log(wordInput);
    for (var i = 0; i < wordInput.length; i++) {
        var currentLetter = wordInput.charAt(i);
        console.log(currentLetter);
        var simpleLetterValue = simpleGematriaMap.get(currentLetter);
        var jewishLetterValue = jewishGematriaMap.get(currentLetter);
        var englishLetterValue = englishGematriaMap.get(currentLetter);
        sumSimple = sumSimple + simpleLetterValue;
        sumJewish = sumJewish + jewishLetterValue;
        sumEnglish = sumEnglish + englishLetterValue;
    }
    console.log('Your Simple Gematria Value is: ' + sumSimple);
    console.log('Your Jewish Gematria Value is: ' + sumJewish)
    console.log('Your English Gematria Value is: ' + sumEnglish)

    document.getElementById('simpleResults').innerHTML = "The Simple Gematria Value of '" + originalWord + "' is: " + sumSimple;
    document.getElementById('jewishResults').innerHTML = "The Jewish Gematria Value of '" + originalWord + "' is: " + sumJewish;
    document.getElementById('englishResults').innerHTML = "The English Gematria Value of '" + originalWord + "' is: " + sumEnglish;
}
