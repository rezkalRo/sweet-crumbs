// Sweet Crumbs Cookie Shop - Lab 3
// This is a browser-only demonstration; information is not sent to a server.

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("customer-form");
    const submitButton = document.getElementById("submit-customer");

    // This page contains the customer form.
    if (!form || !submitButton) {
        return;
    }

    // A JavaScript array stores each customer object until the page is refreshed.
    const customers = [];

    // Run this callback when the user clicks the submit button.
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Do not send the form or reload the page.

        // Check HTML fields marked as required before accepting the data.
        if (!form.reportValidity()) {
            return;
        }

        // Create an object literal using the values entered in the form.
        const customer = {
            id: customers.length + 1,
            firstName: document.getElementById("first-name").value.trim(),
            lastName: document.getElementById("last-name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            state: document.getElementById("state").value.trim(),
            favoriteCookie: document.getElementById("favorite-cookie").value.trim(),
            contactMethod: form.querySelector('input[name="contact-method"]:checked').value,
            comments: document.getElementById("comments").value.trim()
        };

        // Do not record the password in the customer array or console.
        customers.push(customer);

        // Clear the console and display the updated array as required by Lab 3.
        console.clear();
        console.log(customers);

        // Change the DOM by creating a new list item after each submission.
        const newCustomer = document.createElement("li");
        newCustomer.textContent = customer.id + ". " + customer.firstName +
            " " + customer.lastName + " (" + customer.email + ")";
        document.getElementById("customer-list").appendChild(newCustomer);

        // Display a confirmation in the page.
        document.getElementById("customer-message").textContent =
            "Customer " + customer.firstName + " was added successfully.";

        form.reset();
    });
});
