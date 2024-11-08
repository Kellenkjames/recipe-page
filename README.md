# Recipe Page

**A modern, single-page recipe card component, crafted using Angular and SASS.**

This project focuses on using semantic HTML to structure content effectively and enhance accessibility, following best practices in front-end development. It provides a clean, organized layout for presenting a recipe, with specific components for ingredients, instructions, and nutrition information.

## Features

- Built with **Angular** for organized and modular component architecture.
- Styled with **SASS**, utilizing variables, mixins, and nested styles for maintainability and scalability.
- Emphasis on **semantic HTML** for accessible and meaningful content structuring.
- Clean, responsive design optimized for both desktop and mobile views.

## Screenshot

Here is a preview of the Recipe Page Component:

![Recipe Page Screenshot](./recipe-page/src/assets/final-screenshot.png)

## Technologies Used

- **Angular** - A JavaScript framework ideal for component-based web applications.
- **SASS** - A CSS preprocessor that provides powerful styling tools for maintainable CSS.
- **HTML5** - Semantic HTML elements for meaningful content structuring.
- **CSS3** - Modern styling techniques for a polished and responsive layout.

## Project Structure

The project follows a structured and modular approach, broken down into the following components:

```plaintext
/src
├── app
│   ├── components
│   │   ├── recipe-card
│   │   ├── top-image
│   │   ├── text-content
│   │   ├── title
│   │   ├── preparation
│   │   ├── ingredients
│   │   ├── line
│   │   ├── instructions
│   │   └── nutrition
├── styles
│   └── main.scss
└── assets
    └── images
```

## Setup and Installation

To run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kellenkjames/recipe-page.git

2. **Navigate to the project directory:**
  ```bash
  cd recipe-page
  ```

3. **Install Dependencies:**
  ```bash
  npm install
  ```

4. **Start the Angular development server:**
  ```bash
  ng serve
  ```

The project will be available on `http://localhost:4200`

## Design Reference
The Recipe Page was designed to closely match the provided design specifications. Design assets, such as images and the color palette, can be found in the `/images` and `style-guide.md` files, respectively.

## Deployment
The project can be deployed using any modern hosting platform. Recommended platforms include:
- **GitHub Pages**
- **Vercel**
- **Netlify**

## Future Enhancements
- Add animations for a more dynamic user experience on hover and focus states.
- Implement accessibility improvements to ensure compliance with WCAG standards.
- Extend the component to allow customizable social media links and profile information.

## License
This project is open-source and available under the [MIT License](LICENSE).
