# rn-video-search
A react native expo app to search for videos

Seems that Vimeo API wont work on React Native without jumping thorugh a bunch of hurdles.

After intalling the Vimeo package I got a bunch of errors about unable import packages like url, querystring, and http.  I was able the install the first two but http seems to be a deal-breaker.   

Installing http leads to an error about it not finding its index page.  Then I found react-native-http which doesnt seem to fix anything.

Failed building JavaScript bundle.
While trying to resolve module `http` from file `C:\Users\afshin\dev\rn-video-search\node_modules\vimeo\lib\vimeo.js`, the package `C:\Users\afshin\dev\rn-video-search\node_modules\http\package.json` was successfully found. However, this package itself specifies a `main` module field that could not be resolved (`C:\Users\afshin\dev\rn-video-search\node_modules\http\index`. Indeed, none of these files exist:

  * C:\Users\afshin\dev\rn-video-search\node_modules\http\index(.native|.android.expo.ts|.native.expo.ts|.expo.ts|.android.expo.tsx|.native.expo.tsx|.expo.tsx|.android.expo.js|.native.expo.js|.expo.js|.android.expo.jsx|.native.expo.jsx|.expo.jsx|.android.ts|.native.ts|.ts|.android.tsx|.native.tsx|.tsx|.android.js|.native.js|.js|.android.jsx|.native.jsx|.jsx|.android.json|.native.json|.json|.android.wasm|.native.wasm|.wasm)
  * C:\Users\afshin\dev\rn-video-search\node_modules\http\index\index(.native|.android.expo.ts|.native.expo.ts|.expo.ts|.android.expo.tsx|.native.expo.tsx|.expo.tsx|.android.expo.js|.native.expo.js|.expo.js|.android.expo.jsx|.native.expo.jsx|.expo.jsx|.android.ts|.native.ts|.ts|.android.tsx|.native.tsx|.tsx|.android.js|.native.js|.js|.android.jsx|.native.jsx|.jsx|.android.json|.native.json|.json|.android.wasm|.native.wasm|.wasm)