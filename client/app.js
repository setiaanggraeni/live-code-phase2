var vm = new Vue({
  el: '#app',
  data: {
    allProducts: '',
    seen: true,
    productSearch: ''
  },
  mounted(){
    this.getAllProducts()
  },
  methods: {
    getAllProducts(){
      let token = localStorage.getItem('token')
      axios.get('http://localhost:3000/items', {
        headers: {
          token: token
        }
      })
      .then(products => {
        this.allProducts = products.data
      })
      .catch(err => {
        console.log(err.message)
      })
    },
    logout(){
      window.location='index.html'
      localStorage.clear()
    },
    searchItem(input){
      console.log(input.name)
      axios.get(`http://localhost:3000/items?${input.name}`)
      .then(products => {
        this.productSearch = products.data
        this.seen = false
      })
      .catch(err => {
        console.log(err.message)
      })
    },
    addItem(input){
      let token = localStorage.getItem('token')
      if(token){
        axios.post('http://localhost:3000/items', {
          name: input.name,
          price: input.price,
          stock: input.stock,
          tags: input.tags
        }, {
          headers: {
            token: token
          }
        })
        .then(newProduct => {
          alert('New product created!')
        })
        .catch(err => {
          console.log(err.message)
        })
      } else {
        window.location="index.html"
      }
    }
  }
})