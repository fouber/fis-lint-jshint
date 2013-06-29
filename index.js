/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var JSHINT = require("jshint").JSHINT;

module.exports = function(content, file, conf){
    delete conf.filename;
    var success = JSHINT(content, conf, conf.globals);
    if(!success){
        JSHINT.errors.forEach(function(err){
            var msg = 'lint.jshint : ' + err.reason + ' [' + file.subpath + ':' + err.line + ':' + err.character + ']';
            fis.log.warning(msg);
        });
    }
};