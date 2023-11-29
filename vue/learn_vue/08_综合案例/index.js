Vue.createApp({
    template: "#my-app",
    data() {
      return {
        books: [
          {
            id: 1,
            name: '《算法导论》',
            date: '2006-9',
            price: 85.00,
            count: 1
          },
          {
            id: 2,
            name: '《UNIX编程艺术》',
            date: '2006-2',
            price: 59.00,
            count: 1
          },
          {
            id: 3,
            name: '《编程珠玑》',
            date: '2008-10',
            price: 39.00,
            count: 1
          },
          {
            id: 4,
            name: '《代码大全》',
            date: '2006-3',
            price: 128.00,
            count: 1
          },
        ]
      }
    },
    computed: {
        sum(){
            let res = 0
            for(let item in this.books){
                res += this.books[item].price * this.books[item].count
            }
            return res
        }
    },
    methods: {
        add(index){
            this.books[index].count ++
        },
        minus(index){
            if(this.books[index].count <= 1) return 
            this.books[index].count --
        },
        del(i){
            this.books.splice(i, 1)
        }
    }
  }).mount("#app");
  // 将四本书都展示列表上
  // 可以某本书的加减影响整个价格，不允许减到0