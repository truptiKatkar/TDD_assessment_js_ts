export function add(numbers: string): number {
	if (numbers === "") return 0;
  
	// Check for custom delimiter
	let delimiter = /,|\n/;
	if (numbers.startsWith("//")) {
	  const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
	  if (delimiterMatch) {
		delimiter = new RegExp(delimiterMatch[1]);
		numbers = numbers.substring(delimiterMatch[0].length);
	  }
	}
  
	// Split the numbers by the delimiters
	const numList = numbers.split(delimiter).map(n => parseInt(n, 10));
  
	// Filter out negative numbers
	const negativeNumbers = numList.filter(n => n < 0);
	if (negativeNumbers.length > 0) {
	  throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
	}
  
	// Sum up the numbers
	return numList.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }
  