# Shopify Product Description Tabs

This repository contains the necessary files to add a tabular description section to your Shopify product pages using the Dawn theme or any similar Shopify theme.

## Contents

- `product_description_liquid.html`: A standalone HTML file that provides a desktop preview of how the tabular description will look. This file contains example data for each tab to display using a live server.

- `product_description.css`: The CSS file that styles the tabular description to ensure it fits seamlessly into your Shopify theme.

- `tab_open.js`: JavaScript functionality for handling the opening and closing actions of the tabs in the product description.

- `product_description.liquid`: Liquid template file used to integrate the tabular description with Shopify's product metafields. This file should be placed in the sections directory of your Shopify theme.

## Implementation Guide

1. **Backup Your Theme**: Always ensure you have a backup of your theme before making changes.

2. **Add CSS and JS**: Upload `product_description.css` and `tab_open.js` to the assets directory of your Shopify theme.

3. **Update Theme Code**: 
   - Add the `product_description.liquid` file to your theme's sections directory.
   - Include the CSS file in your theme by adding the following line to your theme's `theme.liquid` header:
     ```liquid
     {{ 'product_description.css' | asset_url | stylesheet_tag }}
     ```
   - Include the JavaScript file by adding the following line before the closing `</body>` tag in your theme's `theme.liquid`:
     ```liquid
     {{ 'tab_open.js' | asset_url | script_tag }}
     ```

4. **Metafields Configuration**:
   - Navigate to Shopify Admin → Settings → Metafields → Products.
   - Add metafields for `product_features` and `product_documentation` to hold additional product information.

5. **Embed in Product Pages**:
   - Include the section in your product template by adding:
     ```liquid
     {% section 'product_description' %}
     ```

## Testing

Test the functionality in your theme preview before publishing. Ensure the tabs operate correctly and the styles match your theme's aesthetics.

## Deployment

Once tested, publish your theme or merge your changes to the live theme.

## Support

For issues not covered by the documentation, please open an issue on this repository or contact me @ johncapovani.

Thank you for using this implementation for enhancing your Shopify store!
