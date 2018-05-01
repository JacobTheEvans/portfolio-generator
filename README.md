# Portfolio Generator
Generate your portfolio using my custom theme and upload it to github pages.

## How to use it
1. Fork the project on [github](https://github.com/JacobTheEvans/portfolio-generator)
2. Clone the forked project onto your machine and navigate to it
3. Run `node make.js` or manually edit `src/config.js` and add your information/theme
4. Add your own favicon.ico in `public`
5. If not using a custom domains delete `public/CNAME`
6. Update the `<title></title>` tag in `public/index.html`
7. Open `package.json` and edit the `"homepage"` value to match `"https://<yourgitname>.github.io/portfolio-generator"`
8. Run `npm run build`
9. Run `npm run deploy`
10. Open your browser and go to `https://<yourgitname>.github.io/portfolio-generator` (Note this make take some time to deploy)

If you have problems please refer to the Issues section.

## Custom Domain
1. Open the `CNAME` file in the `public` folder.
2. Add your custom domain to its contents (Example: example.com)
3. Open `package.json` and edit the `"homepage"` value to match your custom domain
4. Run `npm run build`
5. Run `npm run deploy`
6. Open your project on github and click on settings
7. Navigate to the GitHub Pages section and type your custom domain into the custom domain field and click save.
8. Go to your DNS provider for your website and the following records
```
A Record  Host: @ Value: 192.30.252.154
A Record  Host: @ Value: 192.30.252.153
CNAME Record -> Host: @ Value: <yourgitusername>.github.io
```

For more details checkout [GitHubs documentation](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/) or see  the issues section.

## Issues
If you have any issues with the portfolio website open a issue [here](https://github.com/JacobTheEvans/portfolio-generator/issues). Please include the contents of your `src/config.js` file.

If you have any issues with deploying your project onto github pages refer to [Facebooks documentation](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages).

If you have issues with custom domains refer to [Github Pages documentation](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/) or this basic [tutorial](https://hackernoon.com/custom-domain-on-github-pages-tutorial-using-namecheap-7112bf2b8882).

If any of these do not resolve your problem open an issue on Github [here](https://github.com/JacobTheEvans/portfolio-generator/issues).
