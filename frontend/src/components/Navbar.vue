<template>
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
        <form class="form-inline mr-md-3" v-if="homePage()">
          <input v-on:keyup="searchCity" id="myFilter" class="form-control rounded-pill" type="text" placeholder="Search Workout">
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    homePage() {
      if(this.$route.path == "/heroes" ) {
        return true
      } else {
        return false
      }
    },

    searchCity() {
      let input, filter, myItems, cards, i, current, h5, text;
      input = document.getElementById("myFilter");
      filter = input.value.toUpperCase();
      myItems = document.querySelector(".card-deck");
      cards = myItems.getElementsByClassName("col-md-4");
      for (i = 0; i < cards.length; i++) {
        current = cards[i];
        h5 = current.querySelectorAll(".card-title")[0];
        text = h5.innerText.toUpperCase();
        if (text.indexOf(filter) > -1) {
            current.style.display = "";
        } else {
            current.style.display = "none";
        }
      }
    }
  },
};
</script>