Vue.component('products', {
  props: ['allproducts', 'seen', 'productsearch'],
  template: `
    <div v-if="seen">
      <div class="row" style="width:80%;margin-left:10%">
        <div class="col-md-3" v-for="(product, index) in allproducts">
          <div class="card-deck">
            <div class="card" style="width: 18rem;">
            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>            <div class="card-body">
                <h5 class="card-title">Rp. {{product.price}}</h5>
                <p class="card-text">{{product.name}}</p>
                <p class="card-text">{{product.stock}}</p>
                <p class="card-text">{{product.tags}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="row" style="width:80%;margin-left:10%">
        <div class="col-md-3" v-for="(product, index) in productsearch">
          <div class="card-deck">
            <div class="card" style="width: 18rem;">
            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>            <div class="card-body">
                <h5 class="card-title">Rp. {{product.price}}</h5>
                <p class="card-text">{{product.name}}</p>
                <p class="card-text">{{product.stock}}</p>
                <p class="card-text">{{product.tags}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  `
})