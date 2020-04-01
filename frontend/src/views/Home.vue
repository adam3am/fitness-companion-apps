<template>
  <div class="container">
    <div class="text-muted">Please Select Workout Type</div>
    <!-- Cards -->
    <div class="card-deck">
      <div class="col my-3">
        <div class="card text-white bg-dark border-secondary h-100">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1556817411-485b728b57f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Personal Workout</h5>
            <p class="card-text">Your Personal and Customized Workout.</p>
          <div class="card-footer bg-transparent border-secondary">
            <router-link tag="button" class="btn btn-primary btn-lg btn-block" to="/personals">Personal</router-link>
          </div>
          </div>
        </div>
      </div>
      <div class="col my-3">
        <div class="card text-white bg-dark border-secondary h-100">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Hero Workout</h5>
            <p class="card-text">Your Precompiled and Ready to Use Workout.</p>
          <div class="card-footer bg-transparent border-secondary">
            <router-link tag="button" class="btn btn-primary btn-lg btn-block" to="/heroes">Precompiled</router-link>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>