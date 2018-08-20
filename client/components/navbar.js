Vue.component('navbars', {
  props: ['seen'],
  methods: {
    logout(){
      this.$emit('logout')
    }
  },
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Live Code</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn my-2 my-sm-0" type="submit" @click="logout">Logout</button>
        </form>
    </div>
  </nav>
  `
})