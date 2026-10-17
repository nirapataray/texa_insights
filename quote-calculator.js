
"use strict";

/* =====================================
   TEXA INSIGHTS - QUOTE CALCULATOR
   ===================================== */

// Replace this with your real business email.
const BUSINESS_EMAIL = "rnirapata@gmail.com";

// Find the HTML elements.
const form = document.getElementById("quoteForm");
const service = document.getElementById("service");
const scope = document.getElementById("scope");
const complexity = document.getElementById("complexity");
const urgency = document.getElementById("urgency");
const deadline = document.getElementById("deadline");
const message = document.getElementById("formMessage");
const submitButton = document.getElementById("submitQuote");

// Service prices in South African rand.
const basePrices = {
    analysis: 2500,
    dashboard: 3500,
    cleaning: 1800,
    forecasting: 5000,
    consulting: 2000
};

// Project size multipliers.
const scopeMultipliers = {
    small: 0.7,
    medium: 1.0,
    large: 1.8
};

// Complexity multipliers.
const complexityMultipliers = {
    basic: 0.8,
    standard: 1.0,
    advanced: 1.6
};

// Delivery urgency multipliers.
const urgencyMultipliers = {
    standard: 1.0,
    priority: 1.25,
    rush: 1.5
};

// Friendly names for the selected options.
const serviceNames = {
    analysis: "Data Analysis",
    dashboard: "Dashboard Development",
    cleaning: "Data Cleaning and Preparation",
    forecasting: "Forecasting and Predictive Analytics",
    consulting: "Data Strategy Consultation"
};

const scopeNames = {
    small: "Small",
    medium: "Medium",
    large: "Large"
};

const complexityNames = {
    basic: "Basic",
    standard: "Standard",
    advanced: "Advanced"
};

const urgencyNames = {
    standard: "Standard Delivery",
    priority: "Priority Delivery",
    rush: "Urgent Delivery"
};

// Format prices as South African rand.
function formatMoney(amount) {
    return new Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
        maximumFractionDigits: 0
    }).format(amount);
}

// Calculate the estimated project price.
function calculatePrice() {
    const basePrice = basePrices[service.value];

    const scopeFactor = scopeMultipliers[scope.value];

    const complexityFactor =
        complexityMultipliers[complexity.value];

    const urgencyFactor = urgencyMultipliers[urgency.value];

    const total = Math.round(
        basePrice *
        scopeFactor *
        complexityFactor *
        urgencyFactor
    );

    return {
        basePrice,
        scopeFactor,
        complexityFactor,
        urgencyFactor,
        total
    };
}

// Display the calculated price and breakdown.
function updateEstimate() {
    const quote = calculatePrice();

    document.getElementById("estimateTotal").textContent =
        formatMoney(quote.total);

    document.getElementById("breakdownService").textContent =
        serviceNames[service.value];

    document.getElementById("breakdownBase").textContent =
        formatMoney(quote.basePrice);

    document.getElementById("breakdownScope").textContent =
        `× ${quote.scopeFactor.toFixed(2)}`;

    document.getElementById("breakdownComplexity").textContent =
        `× ${quote.complexityFactor.toFixed(2)}`;

    document.getElementById("breakdownUrgency").textContent =
        `× ${quote.urgencyFactor.toFixed(2)}`;

    document.getElementById("breakdownTotal").textContent =
        formatMoney(quote.total);
}

// Display feedback to the customer.
function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
}

// Get today's date using the customer's local calendar date.
function getToday() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

// Check that the deadline is not in the past.
function validateDeadline() {
    if (deadline.value && deadline.value < getToday()) {
        deadline.setCustomValidity(
            "Choose today or a future date."
        );
        return false;
    }

    deadline.setCustomValidity("");
    return true;
}

// Collect the form data and the calculated quote.
function collectFormData() {
    const quote = calculatePrice();

    return {
        name: document.getElementById("fullName").value.trim(),
        email: document.getElementById("email").value.trim(),
        company: document.getElementById("company").value.trim(),
        phone: document.getElementById("phone").value.trim(),

        service: serviceNames[service.value],
        scope: scopeNames[scope.value],
        complexity: complexityNames[complexity.value],
        urgency: urgencyNames[urgency.value],

        deadline: deadline.value || "Not specified",

        description: document
            .getElementById("description")
            .value.trim(),

        basePrice: quote.basePrice,
        scopeFactor: quote.scopeFactor,
        complexityFactor: quote.complexityFactor,
        urgencyFactor: quote.urgencyFactor,
        total: quote.total
    };
}

// Prepare the email body.
function createEmailBody(data) {
    return [
        "TEXA INSIGHTS - QUOTE REQUEST",
        "================================",
        "",
        "CUSTOMER DETAILS",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Company: ${data.company || "Not provided"}`,
        `Phone: ${data.phone || "Not provided"}`,
        "",
        "PROJECT DETAILS",
        `Service: ${data.service}`,
        `Project size: ${data.scope}`,
        `Complexity: ${data.complexity}`,
        `Delivery: ${data.urgency}`,
        `Deadline: ${data.deadline}`,
        "",
        "PRICE BREAKDOWN",
        `Base price: ${formatMoney(data.basePrice)}`,
        `Scope multiplier: × ${data.scopeFactor.toFixed(2)}`,
        `Complexity multiplier: × ${data.complexityFactor.toFixed(2)}`,
        `Urgency multiplier: × ${data.urgencyFactor.toFixed(2)}`,
        `Estimated total: ${formatMoney(data.total)}`,
        "",
        "PROJECT DESCRIPTION",
        data.description,
        "",
        "This is an indicative estimate, subject to confirmation."
    ].join("\n");
}

// Open an email application with the request prepared.
function prepareEmail(data) {
    if (
        !BUSINESS_EMAIL ||
        BUSINESS_EMAIL === "YOUR_BUSINESS_EMAIL@example.com"
    ) {
        showMessage(
            "The form is valid, but the business email is not configured. " +
            "Update BUSINESS_EMAIL in quote-calculator.js.",
            "error"
        );
        return;
    }

    const subject =
        `Texa Insights Quote Request - ${data.name}`;

    const body = createEmailBody(data);

    const emailURL =
        `mailto:${BUSINESS_EMAIL}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    showMessage(
        "Your quote email is being prepared. Check your email application " +
        "and send the message to complete your request.",
        "success"
    );

    window.location.href = emailURL;
}

// Recalculate the price when a selection changes.
service.addEventListener("change", updateEstimate);
scope.addEventListener("change", updateEstimate);
complexity.addEventListener("change", updateEstimate);
urgency.addEventListener("change", updateEstimate);

// Validate the preferred deadline.
deadline.addEventListener("change", validateDeadline);

// Process the form submission.
form.addEventListener("submit", function (event) {
    // Stop the browser from reloading the page.
    event.preventDefault();

    showMessage("", "");

    // Check all required fields and email format.
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Check our custom deadline rule.
    if (!validateDeadline()) {
        deadline.reportValidity();
        return;
    }

    // Require a real business email configuration.
    if (
        !BUSINESS_EMAIL ||
        BUSINESS_EMAIL === "YOUR_BUSINESS_EMAIL@example.com"
    ) {
        showMessage(
            "Please configure BUSINESS_EMAIL in quote-calculator.js " +
            "before submitting a quote request.",
            "error"
        );
        return;
    }

    // Prevent repeated submissions while preparing the email.
    submitButton.disabled = true;
    submitButton.textContent = "Preparing Request...";

    try {
        const formData = collectFormData();
        prepareEmail(formData);
    } catch (error) {
        console.error("Quote submission error:", error);

        showMessage(
            "Something went wrong. Please try again.",
            "error"
        );
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Submit Quote Request";
    }
});

// Show the current year in the footer.
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// Calculate the initial estimate on page load.
updateEstimate();
