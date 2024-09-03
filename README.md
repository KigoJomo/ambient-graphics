# Ambient Graphics

**Ambient Graphics** is an online art gallery and store designed to showcase and sell the unique works of the Ambient Graphics brand. The platform offers an immersive experience for art enthusiasts, allowing them to explore a wide range of collections, including murals, paintings, portraits, and posters. The project aims to blend aesthetic appeal with functionality, providing users with a seamless browsing experience.

## Features

- **Dynamic Content**: The platform dynamically loads collections and items from a JSON data source, ensuring the site is easily updatable without modifying the core code.
  
- **Responsive Design**: Built with mobile-first principles, the site adapts to various screen sizes, offering an optimized experience for both desktop and mobile users.

- **Image Overlays**: Users can click on images to view them in full size through a smooth overlay, akin to platforms like Dribbble and Behance.

- **Scroll Animations**: Various elements on the site, including text and images, are animated on scroll, enhancing user engagement and providing a modern, interactive feel.

- **Modals**: A custom modal component allows users to request quotes for specific artworks, making it easy to inquire about or purchase items directly from the gallery.

- **Loaders**: To maintain a polished user experience, loaders are implemented to handle the time it takes to fetch and display content, especially large images.

## Technologies Used

- **Next.js**: Leveraged for its powerful features in server-side rendering and dynamic routing, ensuring a fast and SEO-friendly application.
  
- **React**: Utilized for building reusable UI components and managing the dynamic state of the application.

- **Tailwind CSS**: Employed for styling, providing a utility-first approach that speeds up development while maintaining a clean and consistent design language.

- **Framer Motion**: Used for implementing animations and transitions, offering a rich, interactive experience.

- **SCSS**: Applied for global styling, giving more control and flexibility over the design system.

## Installation and Setup

To run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KigoJomo/ambient-graphics.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd ambient-graphics
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Future Enhancements

- **E-commerce Integration**: Adding a fully functional shopping cart and payment gateway to facilitate direct purchases.
  
- **Expanded Content**: Continuously adding new collections and improving the data structure to support more detailed descriptions and additional media types.

- **User Accounts**: Implementing user accounts for personalized experiences, such as saving favorites or tracking order history.

- **Performance Optimization**: Further refining the performance for a smoother experience, especially as the content and user base grow.

## Contributing

Contributions are welcome! If you'd like to improve or extend the project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.