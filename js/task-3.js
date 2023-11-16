function filterArray(numbers, value) {
    const filteredArray = [];

    for (const number of numbers) {
        if (number > value) {
            filteredArray.push(number);
        }
    }

    // Форматуємо рядок для виведення у консоль
    let resultString = "[";

    for (let i = 0; i < filteredArray.length; i++) {
        resultString += filteredArray[i];

        if (i < filteredArray.length - 1) {
            resultString += ", ";
        }
    }

    resultString += "]";
    
    
    console.log(resultString);
    
    return filteredArray;
}

// Перевірка роботи функції
filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
filterArray([1, 2, 3, 4, 5], 4); // [5]
filterArray([1, 2, 3, 4, 5], 5); // []
filterArray([12, 24, 8, 41, 76], 38); // [41, 76]
filterArray([12, 24, 8, 41, 76], 20); // [24, 41, 76]

