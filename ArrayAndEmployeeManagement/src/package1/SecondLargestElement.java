package package1;

import java.util.Scanner;

public class SecondLargestElement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt user for the size of the array
        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();

        // Check for valid size
        if (size <= 0) {
            System.out.println("Size of the array must be greater than 0.");
            return;
        }

        // Initialize the array
        int[] array = new int[size];

        // Prompt user to enter the elements of the array
        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < size; i++) {
            array[i] = scanner.nextInt();
        }

        // Find the second largest element
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int i = 0; i < size; i++) {
            // Update largest and second largest based on the current element
            if (array[i] > largest) {
                secondLargest = largest; // Update second largest
                largest = array[i];      // Update largest
            } else if (array[i] > secondLargest && array[i] < largest) {
                secondLargest = array[i]; // Update second largest
            }
        }

        // Display the result
        if (secondLargest == Integer.MIN_VALUE) {
            System.out.println("There is no second largest element in the array.");
        } else {
            System.out.println("The second largest element is: " + secondLargest);
        }

        scanner.close();
    }
        
}