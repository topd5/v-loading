# v-loading
Lightweight v-loading directive for the Vue 3 apps.

## Adding to a Vue 3 application:
```js
import vLoading from '@topd5/v-loading';
import '@topd5/v-loading/v-loading.css';
// ...
const app = createApp(App);
app.directive('loading', vLoading());
```
## Using:
```html
<div v-loading="true">
  Some text
  <some-component></some-component>
</div>
```
## Styling
You can change spinner styling via changing CSS variables:
`--v-l-loader-background-color`,  
`--v-l-spinner-color`,
`--v-l-circle-stroke-width`,
`--v-l-loader-content-animation-duration`.

## Some simple config
You can replace the default spinner with your HTML or disable rotation:
```js
app.directive('loading', vLoading({
  disableRotate: true,
  loaderHtml: '<div class="some-your-class">Loading...</div>',
}));
```

Attention! `v-loading` automatically adds `position: relative` to element if it has `position: static` style.