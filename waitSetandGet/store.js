class Store {
    constructor() {
      this.map = new Map();
    }
    async waitGet(key) {
      return await new Promise((resolve, reject) => {
          this.map.set(key,resolve)
      });
    }
    waitSet(key, val) {
      return new Promise((resolve, reject) => {
          if(this.map.has(key)){
              resolve(this.map.get(key)(val))
          }
      });
    }
  }
  (async () => {
    const store = new Store();
    setTimeout(() => {
      store.waitSet("waitName", "jojo");
    }, 2000);
    const waitName = await store.waitGet("waitName");
    console.log(waitName);//延迟五秒后输出jojo
  })();
  