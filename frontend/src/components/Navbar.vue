<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item mr-md-3">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item mr-md-3">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <form class="form-inline mr-md-3">
          <input class="form-control rounded-pill" type="search" placeholder="Search Workout">
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
// export default {
//   computed: {
//     filteredList() {
//       return this.postList.filter(post => {
//         return post.title.toLowerCase().includes(this.search.toLowerCase())
//       });
//     }
//   }
// }
</script>