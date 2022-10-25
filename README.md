View at [virtualatoms.org](https://virtualatoms.org)

# Virtual Atoms Website

This repository contains the content and code for the Virtual Atoms website.
The site is generated using the [hugo framework](https://gohugo.io) with javascript,
css, and image assets managed by [webpack](https://webpack.js.org). The page contents can 
be found in the `./content` directory and are stored as markdown files.
The website was designed and developed by Alex Ganose. 

### Requirements

The website requires hugo and node.js to be installed. On macOS, this is simple if
[homebrew](https:/brew.sh) is installed. Just run

```bash
brew install hugo node
```

Webpack and additional plugins needed for building the website can be installed through

```bash
npm install
```

### Local development

For development purposes, a local web server with automatic refresh is provided.
This will run webpack to compile javascript, css, and image assets and then run
hugo to build and serve the static site. The web server can be started through

```bash
npm start
```

### Building the production site

When building the site for production, all assets will be minimised to reduce file size and improve loading times.
The website will be built to the `./public` folder. The production site can built using

```bash
npm run build
```
