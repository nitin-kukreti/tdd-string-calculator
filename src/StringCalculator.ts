export class StringCalculator {
    add(numbers: string): number {
        if (numbers === "") return 0; // Handle empty string case

        let delimiter = /,|\n/; // Default delimiters: comma and new line
        if (numbers.startsWith("//")) {
            const parts = numbers.split('\n'); // Split on the first new line
            delimiter = new RegExp(parts[0].substring(2)); // Use the custom delimiter
            numbers = parts[1]; // Update numbers to the part after the delimiter
        }

        // Split the numbers using the specified delimiters
        const numArray = numbers.split(delimiter).map(Number);

        const negatives = numArray.filter(num => num < 0); // Check for negative numbers
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }

        // Sum the valid numbers
        return numArray.reduce((sum, num) => sum + num, 0);
    }
}
