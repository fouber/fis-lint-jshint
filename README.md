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
    },
    settings : {
        lint : {
            jshint : {
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
                noempty : true
                node : true,
            }
        }
    }
});
```

more [options](http://jshint.com/docs/options/)