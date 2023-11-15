
function makeArray(firstArray, secondArray, maxLength) {
    // Об'єднуємо елементи двох масивів
    const newArray = firstArray.concat(secondArray);

    // Перевіряємо, чи перевищує довжина нового масиву maxLength
    if (newArray.length > maxLength) {
        // Повертаємо масив, обмежений до maxLength елементів
        const limitedArray = newArray.slice(0, maxLength);
        const formattedLimitedArray = [];
        for (const item of limitedArray) {
            formattedLimitedArray.push(`"${item}"`);
        }
        return `[${formattedLimitedArray.join(", ")}]`;
    } else {
        // Повертаємо весь новий масив
        const formattedArray = [];
        for (const item of newArray) {
            formattedArray.push(`"${item}"`);
        }
        return `[${formattedArray.join(", ")}]`;
    }
}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

