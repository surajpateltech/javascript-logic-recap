function FindSmallestNum(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        console.log(num1 + " is the smallest number.");
    }else if (num2 <= num1 && num2 <= num3) {
        console.log(num2 + " is the smallest number.");
    }else {
        console.log(num3 + " is the smallest number.");
    }
}

FindSmallestNum(5, 10, 3);
FindSmallestNum(7, 2, 9);
FindSmallestNum(4, 4, 6);
FindSmallestNum(-1, -5, -3);
FindSmallestNum(0, 2, -2);
FindSmallestNum(1.5, 1.2, 1.8);
FindSmallestNum(3.3, 3.3, 3.3);
FindSmallestNum(100, 50, 75);