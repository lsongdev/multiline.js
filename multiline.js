/**
 * [multiline.js]
 * @author      lsong
 * @homepage    https://lsong.org
 * @github      https://github.com/song940/multiline.js
 */
;(function(exports, undefined){

  /**
   * [multiline]
   * @param  {[function]} func [function(){//}]
   * @param  {[object]}   args [{ name: 'lsong' }}]
   * @return {[string]}   str
   */
  var multiline = function(func,args){
    if(!(typeof func === 'function')){
      throw new Error('The arguments must passed and they be a function .');
    }
    var funcStr = func.toString();
    var regexpComment = /\/\*([\s\S]*?)\*\//;
    var regexpVariable = /#{([\s\S]*?)}/g;
    if(!regexpComment.test(funcStr)){
      throw new Error("Comment not found.");
    }
    var match = regexpComment.exec(funcStr);
    var str = match[1];
    if(regexpVariable.test(str) && !args){
      throw new Error('args not passed .');
    }
    return str.replace(regexpVariable, function(match, key, index, str){
      key = key.trim();
      if(!(key in args)){
        throw new Error(key + ' is not passed from arguments.', key);
        return '';
      }else{
        return args[key];
      }
    });
  };
  //exports.
	if(typeof window == 'object'){
		window.multiline = multiline;
	}else{
		module.exports = multiline;
	}
})();
