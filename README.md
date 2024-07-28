# Ambient Graphics

Ambient Graphics is a web application for showcasing and selling artwork. Built using Next.js and styled with Tailwind CSS, this project provides a modern and responsive interface for users to explore a gallery, learn about the artist, shop for artwork, and contact the artist.

## Table of Contents

- [Ambient Graphics](#ambient-graphics)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Development](#development)
    - [Production](#production)
  - [Folder Structure](#folder-structure)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Gallery:** Browse a collection of artworks.
- **About:** Learn about the artist.
- **Shop:** Purchase artwork directly from the website.
- **Contact:** Send messages to the artist.

## Installation

To get started with Ambient Graphics, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ambient-graphics.git
   cd ambient-graphics
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

### Development

To start the development server, run:

```bash
npm run dev
```

### Production

To build the application for production, run:

```bash
npm run build
npm start
```

## Folder Structure

``` bash
ambient-graphics/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── ArtworkCard.js
│   ├── ProductCard.js
├── pages/
│   ├── _app.js
│   ├── index.js
│   ├── gallery.js
│   ├── about.js
│   ├── shop.js
│   ├── contact.js
│   ├── product/
│   │   ├── [id].js
├── public/
│   ├── favicon.ico
│   ├── next.svg
│   ├── vercel.svg
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, improvements, or new features.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
