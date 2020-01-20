const lsChangeDetector = {};

lsChangeDetector.addChangeListener = function(functionality, key, callback) {
  function executeCallback(callback, key, value) {
    if (callback) {
      callback(key, value);
    } else {
      window.alert('We detect a change in the local storage.Redirecting...');
      window.location.reload();
    }
  }
  function onKeysChange(keys, callback) {
    window.addEventListener('storage', event => {
      if (keys.includes(event.key)) {
        executeCallback(callback, event.key, event.newValue);
      }
    });
  }

  function onAnyKeyChange(callback) {
    window.addEventListener('storage', event =>
      executeCallback(callback, event.key, event.newValue),
    );
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
};

module.exports=lsChangeDetector;