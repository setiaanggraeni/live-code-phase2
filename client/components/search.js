Vue.component('search', {
  data () {
    return{
      input_name: '',
      input_price: '',
      input_tags: ''
    }
  },
  methods: {
    searchItem(value){
      this.$emit('searchitem', value)
    }
  },
  template: `
    <div class="search-item" style="width:60%; margin-left:20%">
      <h2>Search Item</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="input_name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="price">Start Price:</label>
        <input v-model="input_price" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="tags">Tags:</label>
        <input v-model="input_tags" type="text" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary" @click="searchItem({name: input_name, price: input_price, tags: input_tags})">Search</button>
      <hr>
    </div>
  `
})