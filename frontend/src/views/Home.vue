<template>
  <div class="my-4">
    <span class="text-muted">Please Select Workout Type</span>
    <!-- Card -->
    <div class="card-deck my-2">
      <div class="card h-100">
        <img class="card-img-top" src="../assets/img/pic2.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Personal Workout</h5>
          <p class="card-text">Your Personal and Customized Workout.</p>
          <router-link type="button" class="btn btn-secondary btn-lg btn-block" to="/personals">Personal Workout</router-link>
        </div>
      </div>
      <div class="card h-100">
        <img class="card-img-top" src="../assets/img/pic.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Hero Workout</h5>
          <p class="card-text">Your Percompiled and Ready to Use Workout.</p>
          <router-link type="button" class="btn btn-secondary btn-lg btn-block" to="/heroes">Hero Workout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>