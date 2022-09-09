Array.prototype.myForEach = function(callback) {
    // this=>arr
    let self = this,  
        i = 0,
        len = self.length;
  
    for(;i<len;i++) {
      typeof callback == 'function' && callback.call(self,self[i], i)
     }
  }
  
  let arr = [1,2,3];
  arr.myForEach(element => {
    console.log(element)
  });