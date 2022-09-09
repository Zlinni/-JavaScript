Array.prototype.myReduce = function(fn, initialValue) {
    var arr = Array.prototype.slice.call(this);
    var res, startIndex;
  
    res = initialValue ? initialValue : arr[0]; // 不传默认取数组第一项
    startIndex = initialValue ? 0 : 1;
  
    for(var i = startIndex; i < arr.length; i++) {
      // 把初始值、当前值、索引、当前数组返回去。调用的时候传到函数参数中 [1,2,3,4].reduce((initVal,curr,index,arr))
      res = fn.call(null, res, arr[i], i, this); 
    }
    return res;
  }
   