# **Cypress Automation Project 🚀**  

This repository contains automated end-to-end tests for [Automation Exercise](https://automationexercise.com/login.) using **Cypress**. The tests cover:  

✅ User Signup & Login  
✅ Product Selection & Checkout  
✅ Payment Processing  
✅ Contact Us Form Submission  

## **📌 Prerequisites**  

Before running the tests, ensure you have the following installed:  

- **[Node.js](https://nodejs.org/)** (Recommended: v16 or higher)  
- **[Cypress](https://docs.cypress.io/app/get-started/install-cypress)**  

## **📥 Installation**  

Clone the repository and run cypress:  

```sh
git clone https://github.com/Shafin960/Assignment.git
npx cypress open
```
## **📝 Test Execution** 
Once you have installed Cypress and opened it using the npx cypress open command, the Cypress Test Runner will launch. From here, you can choose to run tests in either of the following modes:

**1. Interactive Mode**
In the Test Runner, you will see a list of test files. You can click on any of the test files to run them interactively. Cypress will execute the tests, and you will see the test execution progress in the browser.

**2. Headless Mode**
For running tests in a CI/CD pipeline or without the GUI, you can use the following command to run all tests in headless mode: 
```sh
npx cypress run
```
## **🧪 Test Scenarios Covered**
The automated tests currently cover the following critical workflows:

**User Signup & Login:**  
Automates the process of signing up new users and logging into existing accounts.  

**Product Selection & Checkout:**  
Tests the product selection, adding to the cart, and completing the checkout process.  

**Payment Processing:**  
Simulates the payment process and validates that the payment flow works as expected.  

**Contact Us Form Submission:**  
Ensures that the contact form is submitted successfully and a confirmation message is displayed.

