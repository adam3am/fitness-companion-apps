# Fitness Companion Apps

- Personal Workout menampilkan form yang dapat Meng-Input jenis-jenis Workout.
- Precompiled Page menunjukkan daftar semua Workout yang sudah diatur.
- Fungsi Search Bar pada halaman Hero Workout (Precompiled Page).

## A Beginner's Journey

Pengalaman mengikuti project ke-2 dari HACKTIV8 online program.

### Frontend

My Fitness Companion memiliki beberapa komponen diantaranya Navbar yang memiliki search form di bagian atas:

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item mr-md-3">
          <router-link to="/" class="nav-link" exact>Home</router-link>
        </li>
        <li class="nav-item mr-md-3">
          <router-link to="/about" class="nav-link" exact>About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

```html
<!-- Search Bar -->
<form class="form-inline mr-md-3" v-if="searchBar()">
  <input v-on:keyup="searchWorkout" id="myFilter" class="form-control" type="text" placeholder="Search Workout">
</form>
```

Komponen HeroWorkout menampilkan isi dari json menggunakan v-for dan tombol details untuk popup modal:

```html
<!-- Card Deck-->
<div class="card-deck">
  <div class="col-md-4 my-3" v-for="hero in heros" :key="hero.id">
    <div class="card text-white bg-dark border-secondary h-100">
      <img class="card-img-top" :src="hero.Img">
      <div class="card-body">
        <h5 class="card-title">{{hero.WorkoutTitle}}</h5>
        <p class="card-text">{{hero.Deskripsi}}</p>
      </div>
      <div class="card-footer bg-dark border-secondary">
        <b-button v-b-modal="'modal-lg' + hero.Id" block variant="primary">Details</b-button>
      </div>
    </div>
  </div>
</div>
```

```html
<!-- Modal -->
<b-modal hide-header-close ok-title="Got it" :id="'modal-lg' + hero.Id" :title="hero.WorkoutTitle" size="lg" ok-only ok-variant="dark" centered>
  <h6 class="modal-title mb-3">{{hero.DeskripsiSingkat}}</h6>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Exercise</th>
        <th scope="col">Warm Up</th>
        <th scope="col">Working Sets</th>
        <th scope="col">Rest Period</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="heroi in hero.ExcerciseData" :key="heroi.id">
        <th scope="row">{{heroi.Exercise}}</th>
        <td>{{heroi.WarmUp}}</td>
        <td>{{heroi.WorkingSets}}</td>
        <td>{{heroi.RestPeriod}}</td>
      </tr>
    </tbody>
  </table>
</b-modal>
```

PersonalWorkout memiliki form input dan tombol add lalu data di tampung di class="workoutList" dan juga checkbox:

```html
<form @submit.prevent="add" class="input-group mb-3 my-2">
  <input type="hidden" class="form-control" placeholder="Workout Type" v-model="form.id">
  <input type="hidden" class="form-control" placeholder="Workout Type" v-model="form.completed">
  <input type="text" class="form-control" placeholder="Workout Type" v-model="form.Workout">
  <div class="input-group-append">
    <button class="btn btn-dark" type="submit">Add</button>
  </div>
</form>
```

```html
<!-- Checkbox -->
<div class="workoutList" v-for="(person, i) in personals.slice().reverse()" :key="'person.id' + i">
  <input type="checkbox" v-model="person.completed">
  <div class="mr-3 ml-1" :class="{ completed : person.completed }">{{person.Workout}}</div>
</div>
```

### Backend

My Fitness Companion  memiliki route berikut untuk precompiled  dan personal pages:

```js
app.get('/heroes', (req, res) => {
  res.json(heroes);
});

app.get('/personals', (req, res) => {
  res.json(heros);
});

app.get('/heroes/:heroId', (req, res) => {
  res.json(heroes[req.params.heroId]);
});

app.get('/personals/:personalId', (req, res) => {
  res.json(heros[req.params.personalId]);
});
```

Route POST /personals digunakan untuk membuat data workout baru dari JSON File personalList.json:

```js
app.post('/personals', (req, res) => {
  let list = req.body;
  console.log(list);
  heros.push(list.heros);
  res.json(list);
  console.log(heros);
});
```

## Development

Untuk me-maintain project bisa di buka dengan VSCode. CSS dan assets terpisah di setiap Backend dan Frontend folder.

### Frontend Vue

```text
npm install
npm run serve
```

### Backend Node

```text
npm install
nodemon server.js
```

Mengganti button add menjadi update, delete, close ketika diklik belum berfungsi dengan baik. Silakan kasih masukan:

```html
<form @submit.prevent="add" class="input-group mb-3 my-2">
  <input type="hidden" class="form-control" placeholder="Workout Type" v-model="form.id">
  <input type="hidden" class="form-control" placeholder="Workout Type" v-model="form.completed">
  <input type="text" class="form-control" placeholder="Workout Type" v-model="form.Workout">
  <div class="input-group-append">
    <button class="btn btn-dark" type="submit">Add</button>
  </div>
</form>
```

```js
async add(){
  if (this.form.Workout.trim().length == 0) {
    return
  }
  await axios.post("http://localhost:3000/personals", {heros: this.form}).then(res => {
    this.load(res)
    this.form.Workout = ''
    this.form.completed
    this.form.id++
  })
  this.$root.$emit('personalWorkout', this.form);
}
```

## Built With

- [Vue](https://vuejs.org) - JavaScript Framework
- [Express](https://expressjs.com) - Node.js Framework
- [BootstrapVue](https://bootstrap-vue.js.org/) - CSS Framework

## Authors

- **Adam Maulana**
