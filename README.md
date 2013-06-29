# fis-lint-jshint

A lint plugin for fis to validate js file.

## usage

    $ npm install -g fis-lint-jshint
    $ vi path/to/project/fis-conf.js

```javascript
//file : path/to/project/fis-conf.js
fis.config.merge({
    modules : {
        lint : {
            js : 'jshint'
        }
    }
});
```