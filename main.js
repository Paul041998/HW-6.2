let userArr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
let sum = 0;
let count = 0;
let minValue = userArr[0];
let minIndex = 0;
let maxValue = userArr[0];
let maxIndex = 0;
let oddArrCount = 0;
let evenArrCount = 0;
let negativeArrCount = 0;
let evenSum = 0;
let oddSum = 0;
let arrProduct = 1;
let maxVal = Math.max(...userArr);

for (let i = 0; i < userArr.length; i++) {
  if (userArr[i] > 0) {
    sum += userArr[i];
    count++;
  }
  if (userArr[i] < minValue) {
    minValue = userArr[i];
    minIndex = i;
  }
  if (userArr[i] > maxValue) {
    maxValue = userArr[i];
    maxIndex = i;
  }
  if (userArr[i] < 0) {
    negativeArrCount++;
  }
  if (userArr[i] > 0 && userArr[i] % 2 !== 0) {
    oddArrCount++;
  }
  if (userArr[i] > 0 && userArr[i] % 2 === 0) {
    evenArrCount++;
  }
  if (userArr[i] > 0 && userArr[i] % 2 === 0) {
    evenSum += userArr[i];
  }
  if (userArr[i] > 0 && userArr[i] % 2 !== 0) {
    oddSum += userArr[i];
  }
  if (userArr[i] > 0) {
    arrProduct *= userArr[i];
  }
  if (userArr[i] !== maxVal) {
    userArr[i] = 0;
  }
}
console.log("Сума додатніх елементів масиву: " + sum);
console.log("Кількість додатніх елементів масиву: " + count);
console.log("Найменший елемент масиву: " + minValue);
console.log("Iндекс найменшого елементу масиву: " + minIndex);
console.log("Найбільший елемент масиву: " + maxValue);
console.log("Індекс найбільшого елементу масиву: " + maxIndex);
console.log("Кількість від'ємних елементів масиву: " + negativeArrCount);
console.log("Кількість непарних додатніх елементів масиву: " + oddArrCount);
console.log("Кількість парних додатніх елементів масиву: " + evenArrCount);
console.log("Сума парних додатніх елементів масиву: " + evenSum);
console.log("Сума непарних додатніх елементів масиву: " + oddSum);
console.log("Добуток всіх додатних елементів масиву: " + arrProduct);
console.log(userArr);
