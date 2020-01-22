# js-localstorage-change-detector

A javascript library which watches all keys or particular keys in the local storage . If it detects any change in the keys , It will execute the callback in the local tab specified by us

## Install

1.Using CDN. include the following cdn in the script tag in the HTML.

```bash

<html>
 <head>
  <script src="https://raw.githack.com/ashwinKumar0505/js-localstorage-change-detector/master/index.js" type="text/javascript"></script>
 </head>
 <body>
 </body>
</html>

```

2.Using npm to install the package

```bash
npm install --save js-localstorage-change-detector
```

```js
import lsChangeDetector from 'js-localstorage-change-detector';

const App = () => {
  lsChangeDetector.addChangeListener('onChange', null, () => {
    console.log('hai');
  });
  return <div></div>;
};
```

### Basic Usage

1.To make the lsChangeDetector to watch all the keys and execute any one of the key is changed.

```js
import lsChangeDetector from 'js-localstorage-change-detector';

const App = () => {
  lsChangeDetector.addChangeListener('onChange', null, () => {
    console.log('hai');
  });
  return <div></div>;
};
```

2.To make the lsChangeDetector to watch a single key and execute a call back if that key is alone change.

```js
import lsChangeDetector from 'js-localstorage-change-detector';

const App = () => {
  lsChangeDetector.addChangeListener('onChange', 'userName', () => {
    console.log('hai');
  });
  return <div></div>;
};
```

3.To make the lsChangeDetector to watch particular number of keys and execute a callback if any of those keys changes.

```js
import lsChangeDetector from 'js-localstorage-change-detector';

const App = () => {
  lsChangeDetector.addChangeListener('onChange', ['userName', 'email'], () => {
    console.log('hai');
  });
  return <div></div>;
};
```
