# SecurityNode
[![Netlify Status](https://api.netlify.com/api/v1/badges/236e6c62-ed0d-4a0c-b2b6-c30bb8e14737/deploy-status)](https://app.netlify.com/sites/objective-snyder-f1032e/deploys)

## Netlify
Build & Deploy on Netlify on https://objective-snyder-f1032e.netlify.app/

## Lightsail
Manual Deploy on Lightsail on http://52.204.27.193 (Dynamic IP)

### XSS
```
Awesome product!
<img src="xyz" style="display:none" onerror="alert(`Your Cookies: ${document.cookie}`);">
```
