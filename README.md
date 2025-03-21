<<<<<<< HEAD
# my-bookshelf
my-bookshelf for same touch

# My Bookshelf

A beautifully designed bookshelf application that displays a collection of books with animated flip cards.

![My Bookshelf Screenshot](https://i.imgur.com/YYwmwFB.jpg)

## Features

- Dark-themed UI with elegant book display
- Featured books section with cover images
- Animated book cards that flip to reveal details
- Responsive design works on all devices
- Static site generation for fast loading

## Technologies Used

- Next.js 15
- React 18
- Tailwind CSS
- Static site generation
- Responsive images

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/my-bookshelf.git
cd my-bookshelf
```

2. Install dependencies:
```bash
# Using npm
npm install

# Using bun
bun install
```

3. Run the development server:
```bash
# Using npm
npm run dev

# Using bun
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
# Using npm
npm run build

# Using bun
bun run build
```

The output will be in the `out` directory.

## Deployment

### Deploying to Cloudflare Pages

See the detailed guide in [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md) for step-by-step instructions on deploying this application to Cloudflare Pages.

## Configuration

### Image Optimization

The application is configured to use unoptimized images for static export. Image domains are configured in `next.config.mjs`.

### Static Export

The application is configured to generate static HTML files, which can be deployed on any static hosting service including Cloudflare Pages.

## License

This project is open source and available under the [MIT License](LICENSE).
>>>>>>> d368e2e (初始化项目)
