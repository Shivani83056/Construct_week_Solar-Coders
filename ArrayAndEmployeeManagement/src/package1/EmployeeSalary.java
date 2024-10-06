package package1;

import java.util.Scanner;

// Class to represent an Employee
class Employee {
    // Fields for Employee class
    private String name;         // Employee's name
    private String id;           // Employee's ID
    private double monthlySalary; // Employee's monthly salary

    // Constructor to initialize the fields
    public Employee(String name, String id, double monthlySalary) {
        this.name = name;            // Set employee name
        this.id = id;                // Set employee ID
        this.monthlySalary = monthlySalary; // Set employee monthly salary
    }

    // Method to calculate annual salary
    public double calculateAnnualSalary() {
        return monthlySalary * 12; // Calculate annual salary as monthly salary multiplied by 12
    }

    // Method to display employee details
    public void displayDetails() {
        // Print formatted employee details including name, ID, monthly salary, and annual salary
        System.out.printf("Name: %s, ID: %s, Monthly Salary: %.2f, Annual Salary: %.2f%n", 
                          name, id, monthlySalary, calculateAnnualSalary());
    }
}

public class EmployeeSalary {
    public static void main(String[] args) {
        // Create a Scanner object for user input
        Scanner scanner = new Scanner(System.in);

        // Prompt user for the number of employees
        System.out.print("Enter the number of employees: ");
        int numEmployees = scanner.nextInt(); // Read the number of employees
        scanner.nextLine(); // Consume the newline character left after reading the number

        // Array to hold Employee objects
        Employee[] employees = new Employee[numEmployees]; // Initialize array to hold Employee objects

        // Loop to get employee details
        for (int i = 0; i < numEmployees; i++) {
            System.out.println("Enter details for Employee " + (i + 1) + ":");

            // Get employee name
            System.out.print("Name: ");
            String name = scanner.nextLine(); // Read employee name

            // Get employee ID
            System.out.print("ID: ");
            String id = scanner.nextLine(); // Read employee ID

            // Get employee monthly salary
            System.out.print("Monthly Salary: ");
            double monthlySalary = scanner.nextDouble(); // Read employee monthly salary
            scanner.nextLine(); // Consume the newline character left after reading the salary

            // Create a new Employee object and add it to the array
            employees[i] = new Employee(name, id, monthlySalary); // Initialize Employee object with input data
        }

        // Display employee details
        System.out.println("\nEmployee Details:");
        for (Employee employee : employees) {
            employee.displayDetails(); // Call the method to display each employee's details
        }

        // Close the scanner to prevent resource leaks
        scanner.close();
       }
           
   }