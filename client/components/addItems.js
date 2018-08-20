Vue.component('additem', {
  data() {
    return {
      name: '',
      price: '',
      stock: '',
      tags: ''
    }
  },
  methods: {
    addItem(input){
      this.$emit('additem', input)
    }
  },
  template: `
  <div id="addItem" style="width:60%; margin-left:20%">
    <h2>Add Item</h2>
    <form>
      <label>Name</label>
      <input type="email" v-model="name" class="form-control" placeholder="Product Name">
      <label>Price</label>
      <input type="text" v-model="price" class="form-control" placeholder="Price"><br>
      <label>Stock</label>
      <input type="email" v-model="stock" class="form-control" placeholder="Stock">
      <label>Tags</label>
      <input type="text" v-model="tags" class="form-control" placeholder="Tags"><br>
      <button type="submit" class="btn btn-primary" @click.prevent="addItem({name: name, price: price, stock: stock, tags: tags})">Add Item</button>
    </form>
  </div>
  `
})