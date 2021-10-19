# Adobe Commerce XD UI Kits

Welcome to the home of XD UI Kits for Adobe Commerce. This repository currently features a complete UI design kit to help you start designing your own PWA Studio app.

## PWA Studio XD Kit

We’ve put together a collection of resources that are compatible with PWA Studio to help you kick-start your next storefront design in Adobe XD. Just edit the provided assets, symbols, and templates to match your brand and experience.

* [Get the kit](/pwa-studio-uikit-venia-v1.3.xd)
* [View more UI kits](https://www.adobe.com/products/xd/features/ui-kits.html)

## Checklist for XD kit updates

- [ ] Add the new XD kit file — with the new version number — to `src/static/`.
- [ ] Remove old XD kit file from `src/static/`.
- [ ] Update the version of the kit in the `gatsby-config.js`.
- [ ] Update the link to the kit file in `src/pages/index.md`.


## How to update this site

This section is broken down into to areas:

1. Updating the site's page content — text, url links, and images.
2. Updating the the actual kit file: `pwa-studio-uikit-venia-v1.3.xd`.

### Updating the text content

The easiest update to make is to edit the text from the site's single markdown file in the `/src/pages` directory as shown in the video here:

https://video.tv.adobe.com/v/336147t2/?enable10seconds=on&fullscreen=false&quality=6&speedcontrol=on

### Updating the kit file

TODO: Finish instructions...

Updating the actual kit file is a bit more complex because GitHub doesn't allow you to upload a file bigger than 25 MB. And unfortunately, the XD is 100+ MB. So you will need to clone this repository to a folder on your computer, replace the file there, then push the changes back to GitHub. The following steps describe hot to do this.

1. Clone the repository to your computer.

    ```
    git clone git@github.com:AdobeDocs/commerce-xd-kits.git
    ```

1.  TODO: Finish instructions...

## How to deploy

For any team that wishes to deploy to the adobe.io and stage.adobe.io website, they must be in contact with the dev-site team. Teams will be given a path that will follow the pattern `adobe.io/{product}/`. This will allow doc developers to setup their subpaths to look something like:
```
adobe.io/{product}/docs
adobe.io/{product}/community
adobe.io/{product}/community/code_of_conduct
adobe.io/{product}/community/contribute
```

### Launching a deploy

You can deploy using the GitHub actions deploy workflow see [deploy instructions](https://github.com/adobe/gatsby-theme-aio#deploy-to-azure-storage-static-websites).
