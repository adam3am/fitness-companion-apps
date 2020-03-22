<template>
  <div class="my-4">
    <span class="text-muted">Please Type Your Workout Type</span>
    <!-- Add Button -->
    <div class="input-group mb-3 my-2">
      <input type="text" class="form-control" placeholder="Workout Type" aria-label="Workout Type" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-dark" type="button">Add</button>
      </div>
    </div>
    <hr>
    <h2 class="my-3">Your Today Workout</h2>
    <!-- Checkbox -->
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
      <label class="form-check-label" for="defaultCheck1">
        Inline Barber Bench Press
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
      <label class="form-check-label" for="defaultCheck1">
        Barbell Bench Press
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
      <label class="form-check-label" for="defaultCheck1">
        Bent Over Barbell Row
      </label>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  Data: {
    personals: []
}
}
</script>