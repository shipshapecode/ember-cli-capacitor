ember-cli-capacitor
==============================================================================

This addon integrates Ember and [Capacitor](https://capacitorjs.com/).
It supports building and live reload for iOS, Android, and Electron.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-capacitor
```


Usage
------------------------------------------------------------------------------

### Blueprints

The default `ember-cli-capacitor` blueprint will run when you first install
the addon, but if you want to run it again, either to update to the latest
blueprints or to add support for more platforms, you can run it with:

```
ember g ember-cli-capacitor
```

### Commands

#### iOS

```
ember ios:serve
```

```
ember ios:build
```

#### Android

```
ember android:serve
```

```
ember android:build
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
