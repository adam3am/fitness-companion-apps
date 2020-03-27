<template>
  <div class="container">
    <div class="text-muted">Please Type Your Workout Type</div>
    <!-- Add Button -->
    <div class="input-group mb-3 my-2">
      <input type="text" class="form-control" placeholder="Workout Type" aria-label="Workout Type" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-dark" type="button">Add</button>
      </div>
    </div>
    <h2 class="my-3">Your Today Workout</h2>
    <!-- Checkbox -->
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="1" id="defaultCheck1">
      <label class="form-check-label strikethrough" for="defaultCheck1">
        Inline Barber Bench Press
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="2" id="defaultCheck2">
      <label class="form-check-label strikethrough" for="defaultCheck1">
        Barbell Bench Press
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="3" id="defaultCheck3">
      <label class="form-check-label strikethrough" for="defaultCheck1">
        Bent Over Barbell Row
      </label>
    </div>
  </div>
</template>

<style scoped>
  input[type=checkbox]:checked+label.strikethrough {
    text-decoration: line-through;
    }
</style>

<script>
// import axios from 'axios';

export default {
  Data: {
    personals: []
}
}
</script>