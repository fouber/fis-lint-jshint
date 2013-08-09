/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var JSHINT = require("jshint").JSHINT;
var ignored, globals;

module.exports = function(content, file, conf){
    if(conf.ignored){
        if(typeof conf.ignored === 'string' || fis.util.is(conf.ignored, 'RegExp')){
            ignored = [ conf.ignored ];
        } else if(fis.util.is(conf.ignored, 'Array')) {
            ignored = conf.ignored;
        }
        delete conf.ignored;
    }
    if(ignored){
        for(var i = 0, len = ignored.length; i < len; i++){
            if(fis.util.filter(file.subpath, ignored[i])) return;
        }
    }
    if(conf.globals){
        globals = conf.globals;
        delete conf.globals;
    }
    delete conf.filename;
    if(!JSHINT(content, conf, globals)){
        JSHINT.errors.forEach(function(err){
            var msg = 'lint.jshint : ' + err.reason + ' [' + file.subpath + ':' + err.line + ':' + err.character + ']';
            fis.log.warning(msg);
        });
    }
};