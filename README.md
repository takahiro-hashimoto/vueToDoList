# vue.js + vue-Router + vuexでtodoListを作った
## 今回の目的
* FLUX（vuex）の考え方を理解する
* vue.js + vue-Router + vuexを組み合わせた作品を作る
* webpackの理解を深める

## vuexとは
Vuexは状態管理をしてくれるvue.jsのライブラリ

### vue.jsのみの場合
```
new Vue({
  // state
  data () {
    return {
      count: 0
    }
  },
  // view
  template: `
    <div>{{ count }}</div>
  `,
  // actions
  methods: {
    increment () {
      this.count++
    }
  }
})
``` 
![alt hoge](https://vuex.vuejs.org/ja/images/flow.png)
### vue.js + vuexを使った場合
![alt hoge](https://vuex.vuejs.org/ja/images/vuex.png)
