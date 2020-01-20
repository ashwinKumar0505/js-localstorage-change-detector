const localStorageDetector = {};

localStorageDetector.addChangeListener = function(
  functionality,
  key,
  callback,
) {
  function onKeysChange(keys, callback) {
    window.addEventListener('storage', event => {
      if (keys.includes(event.key)) {
        lsChangeDetector(callback, event.key, event.newValue);
      }
    });
  }

  if (functionality === 'onChange') {
    if (key && typeof key === 'string') {
      onKeysChange([key], callback);
    } else if (key && Array.isArray(key)) {
      onKeysChange(key, callback);
    } else if (!key) {
      onAnyKeyChange(callback);
    }
  }

  function lsChangeDetector(callback, key, value) {
    if (callback) {
      callback(key, value);
    } else {
      window.alert('We detect a change in the local storage.Redirecting...');
      window.location.reload();
    }
  }
  function onAnyKeyChange(callback) {
    window.addEventListener('storage', event =>
      lsChangeDetector(callback, event.key, event.newValue),
    );
  }
};

module.exports=localStorageDetector;