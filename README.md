# Dunya & Adria Wedding Site

All the information related to the wedding of the year. This site works with the Netlify CMS and it's implemented with Gatsby.

- The production url is: dya2022.com
- The access to the CMS is: dya2022.com/admin where you should use the Netlify credentials.

## Prerequisites

- Minimal Node.js version 14.15.0
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
- [Netlify CLI](https://github.com/netlify/cli)

### Access Locally

To run locally the project follow these steps:

```
$ git clone https://github.com/adriamarti/dunya-adria-wedding.git
$ cd dunya-adria-wedding
$ yarn
$ yarn start # or netlify dev or ntl dev
```

To test the CMS locally, you'll need to run a production build of the site:

```
$ npm run build
$ netlify dev # or ntl dev
```

### Setting up the CMS

If you want use Netlify CMS locally, run the site in one terminal with `npm run start` and in another
Terminal you can use `npx netlify-cms-proxy-server` which proxy requests so you'll be automatically logged
in as a user on [http:localhost:3000/admin](http:localhost:3000/admin).
