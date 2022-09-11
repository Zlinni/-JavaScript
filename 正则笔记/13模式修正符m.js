let hd = `
    #1 js,200元 #
    #2 php,300元 #
    #55 houdunren.com # 后盾人
    #56 nodejs,180元 #
`;
// 模式m修正符将多行中每一行单独看待 
// 不用m的话 这个语法 使用.会匹配到# 然后\s+#会匹配到下一行的# 很明显不是想要的结果
console.log(hd.match(/\s*#\d+\s+.+\s+#/g));
// 使用m后
console.log(hd.match(/^\s*#\d+\s+.+\s+#$/gm));
let lessons = hd.match(/^\s*#\d+\s+.+\s+#$/gm).map((v) => {
  v = v.replace(/^\s*#\d+\s+/, "").replace(/\s#$/, "")
  console.log(v)
  let [name,price] = v.split(',');
  return {
    name,price
  }
});

console.log(JSON.stringify(lessons,null,2))