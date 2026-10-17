# texa_insights
Data Analysis Quote Calculator
# Texa Insights — Data Consultancy Website

## 📊 Project Overview

Texa Insights is a front-end website project for a data consultancy business that helps organisations make informed decisions through data analysis, dashboard development, data cleaning, forecasting, and consultation.

The website is designed to present the company's services, introduce the business, and allow potential clients to request quotations for data-related projects.

This project is being developed as a practical software development project to strengthen my skills in HTML, CSS, JavaScript, form validation, and front-end web development.

## 🎯 Project Objectives

- Build a professional website for a data consultancy business.
- Present data analytics services clearly to potential clients.
- Allow clients to submit project details through a quotation form.
- Calculate estimated project costs dynamically in South African Rand (ZAR).
- Collect client contact information, including email addresses.
- Practise writing clean, organised, and maintainable front-end code.

## ✨ Features

### 1. Home Page
Introduces Texa Insights and communicates the value of data-driven decision-making.

### 2. Services Page
Presents the consultancy's services, including:
- Data Analysis
- Dashboard Development
- Data Cleaning
- Forecasting
- Data Consultation

### 3. About Page
Provides information about the business, its purpose, and its approach to helping organisations use data effectively.

### 4. Quote Calculator
Allows potential clients to select a service and specify project requirements. The calculator estimates the project price based on the selected service, project scope, complexity, and urgency.

The pricing formula is:

**Estimated Price = Base Price × Scope Multiplier × Complexity Multiplier × Urgency Multiplier**

All prices are illustrative estimates in South African Rand (ZAR).

### 5. Contact Page
Provides a way for prospective clients to contact the business.

### 6. Client Quote Requests
The quotation form is intended to collect client contact details and project information. Email delivery will be configured using a form-handling service such as Formspree.

## 🛠️ Technologies Used

- **HTML5** — Website structure and content.
- **CSS3** — Styling, layout, and responsive design.
- **JavaScript** — Quote calculations, form validation, and user interactions.
- **Git** — Version control.
- **GitHub** — Source code hosting and project documentation.
- **Formspree (planned)** — Handling quote form submissions and email notifications.

## 📁 Project Structure

```text
texa-insights/
│
├── index.html
├── services.html
├── about.html
├── quote.html
├── contact.html
│
├── css/
│   ├── style.css
│   └── quote.css
│
├── js/
│   ├── main.js
│   └── quote-calculator.js
│
└── README.md
```

*Note: Adjust the filenames above to match the files actually present in your repository.*

## 💰 Quote Calculator Pricing

The current illustrative base prices are:

| Service | Base Price |
|---|---:|
| Data Analysis | R2,500 |
| Dashboard Development | R3,500 |
| Data Cleaning | R1,800 |
| Forecasting | R5,000 |
| Consultation | R2,000 |

### Pricing Multipliers

| Factor | Option | Multiplier |
|---|---|---:|
| Scope | Small | 0.7 |
| Scope | Medium | 1.0 |
| Scope | Large | 1.8 |
| Complexity | Basic | 0.8 |
| Complexity | Standard | 1.0 |
| Complexity | Advanced | 1.6 |
| Urgency | Standard | 1.0 |
| Urgency | Priority | 1.25 |
| Urgency | Rush | 1.5 |

These figures are examples for demonstrating the calculator and may be adjusted to reflect actual business pricing.

## 🚀 How to Run the Project

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Check that the HTML files, CSS files, and JavaScript files are in their correct folders.
4. Open `index.html` in your browser, or use the Live Server extension in Visual Studio Code.
5. Navigate through the website and test the quotation calculator.

No build tools or package installation are required for the basic front-end version.

## ⚙️ Form Configuration

The quotation form is intended to collect the client's name, email address, company information, selected service, project requirements, and estimated price.

Before enabling live quote submissions:

1. Create and configure a form with [Formspree](https://formspree.io/).
2. Verify the email address that should receive submissions.
3. Connect the Formspree endpoint to the quotation form.
4. Test the form to confirm that submissions arrive correctly.

**Important:** The current `mailto:` approach opens the client's email application. It does not automatically send submissions to the business. Direct form submission must be configured and tested before this feature is considered complete.

## 🔒 Security and Privacy

- Never commit passwords, API keys, private tokens, or other secrets to GitHub.
- Collect only the client information required to respond to enquiries.
- Configure form handling and spam protection before accepting real client submissions.
- Avoid publishing real client information in the repository.

## 🗺️ Future Improvements

- Complete and test all website pages.
- Connect the quotation form to an email submission service.
- Improve mobile responsiveness and accessibility.
- Add a project portfolio showcasing sample data analytics work.
- Add client testimonials when genuine testimonials become available.
- Deploy the website using GitHub Pages or another suitable hosting service.

## 📚 Learning Outcomes

This project provides practical experience with:

- Structuring a multi-page website.
- Separating HTML, CSS, and JavaScript.
- Implementing dynamic calculations using JavaScript.
- Validating user input in forms.
- Organising files for maintainability.
- Tracking changes with Git and GitHub.
- Preparing a software project for deployment.

## 👨‍💻 Author

**Texa Insights**

A data consultancy website project focused on helping organisations turn data into useful business insights.

---
