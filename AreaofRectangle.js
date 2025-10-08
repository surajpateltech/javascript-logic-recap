function Area(length, breadth) {

    if (length <= 0 || breadth <= 0) {
        throw new Error("Length and breadth must be positive numbers.");
        
    }
    const area = length * breadth;
    console.log("The area of the rectangle is:", area);
}

Area(5, 10);
Area(7, 3);
Area(12, -4);
Area(0, 5);
Area(6, 8.85);