Vue.component('login', {
  template: `
  <div id="loginForm" style="width:60%; margin-left:20%">
    <form>
      <label>Username</label>
      <input type="email" v-model="username" class="form-control" placeholder="Username">
      <label>Password</label>
      <input type="password" v-model="password" class="form-control" placeholder="Password"><br>
      <button type="submit" class="btn btn-primary" @click.prevent="login()">Login</button>
    </form>
  </div>
  `,
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:3000/request_token', {
        username: this.username,
        password: this.password
      })
      .then(userLogin => {
        localStorage.setItem('token', userLogin.data.token)
        window.location="home.html"
      })
      .catch(err => {
        console.log(err.message)
      })
    }
  }
})
