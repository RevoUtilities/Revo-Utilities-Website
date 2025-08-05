# Troubleshooting Deployment Issues

## Asset Loading Errors

If you're seeing errors like:
```
Refused to apply style from '...' because its MIME type ('text/plain') is not a supported stylesheet MIME type
Failed to load resource: the server responded with a status of 404
```

## Quick Fixes

### 1. Clear Browser Cache
- **Chrome/Edge**: Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- **Firefox**: Press `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- **Safari**: Press `Cmd+Option+R`

### 2. Hard Refresh
- Hold `Shift` and click the reload button
- Or use the keyboard shortcuts above

### 3. Clear Site Data
1. Open Developer Tools (`F12`)
2. Go to **Application** tab (Chrome) or **Storage** tab (Firefox)
3. Click **Clear site data** or **Clear storage**
4. Reload the page

### 4. Service Worker Cache
If the issue persists, clear the service worker cache:

1. Open Developer Tools (`F12`)
2. Go to **Application** tab
3. Find **Service Workers** section
4. Click **Unregister** for any existing service workers
5. Reload the page

### 5. Incognito Mode
Try opening the site in an incognito/private browsing window to bypass all cache.

## Deployment Checklist

Before deploying:

1. ✅ Run `npm run build` to create a fresh build
2. ✅ Verify `dist/index.html` exists and has correct asset references
3. ✅ Check that all assets in `dist/assets/` are present
4. ✅ Deploy the entire `dist` folder to your hosting provider
5. ✅ Clear any CDN cache if using a CDN

## Vercel-Specific Fixes

If using Vercel:

1. **Force Redeploy**: In Vercel dashboard, go to your project and click "Redeploy"
2. **Clear Vercel Cache**: Add a new commit with a small change to force cache invalidation
3. **Check Build Logs**: Ensure the build process completes successfully

## Common Issues

### MIME Type Errors
- **Cause**: Server serving CSS/JS files with wrong MIME type
- **Fix**: Update `vercel.json` headers (already done)

### 404 Asset Errors
- **Cause**: Assets not found or wrong paths
- **Fix**: Ensure all assets are built and deployed correctly

### Caching Issues
- **Cause**: Browser or CDN serving old cached versions
- **Fix**: Clear cache and force reload

## Debug Steps

1. **Check Network Tab**: Open Developer Tools → Network tab and look for failed requests
2. **Console Errors**: Check Console tab for JavaScript errors
3. **Asset URLs**: Verify asset URLs in the HTML match actual file names
4. **Server Headers**: Check if server is sending correct Content-Type headers

## Emergency Fix

If nothing else works:

1. Run `./scripts/deploy.sh` for a clean build
2. Clear all browser data for the site
3. Try a different browser
4. Check if the issue occurs in incognito mode

## Contact Support

If issues persist after trying all fixes:
1. Check the browser console for specific error messages
2. Note the exact error messages and URLs
3. Provide screenshots of the Network tab showing failed requests 