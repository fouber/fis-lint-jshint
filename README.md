# fis-lint-jshint

A lint plugin for fis to validate js file.

## usage

    $ npm install -g fis-lint-jshint
    $ vi path/to/project/fis-conf.js

```javascript
//configure plugin
fis.config.set('modules.lint.js', 'jshint');
//configure plugin settings
fis.config.set('settings.lint.jshint', {
    //ignored some files
    //ignored : 'static/libs/**.js',
    ignored : [ 'static/libs/**.js', /jquery\.js$/i ],

    //using Chinese reporter
    i18n : 'zh-CN',

    //jshint options
    camelcase : true,
    curly : true,
    eqeqeq : true,
    forin : true,
    immed : true,
    latedef : true,
    newcap : true,
    noarg : true,
    noempty : true,
    node : true
});
```

[more options](http://jshint.com/docs/options/)
