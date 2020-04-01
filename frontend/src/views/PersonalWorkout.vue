<template>
  <div class="container">
    <div class="text-muted">Please Type Your Workout Type</div>
    <!-- Add Button -->
    <form @submit.prevent="add" class="input-group mb-3 my-2">
      <input type="hidden" class="form-control" placeholder="Workout Type" v-model="form.id">
      <input type="hidden" class="form-control" placeholder="Workout Type" v-model="form.completed">
      <input type="text" class="form-control" placeholder="Workout Type" v-model="form.Workout">
      <div class="input-group-append">
        <button class="btn btn-dark" type="submit">Add</button>
      </div>
    </form>
    <hr class="my-4">
    <h2 class="my-3">Your Today Workout</h2>
    <!-- Checkbox -->
    <div class="workoutList" v-for="(person, i) in personals.slice().reverse()" :key="'person.id' + i">
      <input type="checkbox" v-model="person.completed">
      <div class="mr-3 ml-1" :class="{ completed : person.completed }">{{person.Workout}}</div>
    </div>
  </div>
</template>

<style scoped>
  .workoutList {
    margin-bottom: 12px;
    display: flex;
    align-items: baseline;
  }
  .completed {
    text-decoration: line-through;
  }
</style>

<script>
import axios from 'axios';

export default {
  name: "personal-workout",
  data() {
    return {
      form: {
        id: 4,
        Workout: '',
        completed: ''
      },
      personals: [],
    }
  },

  async created() {
    await this.load()
  },
  
  methods: {
    async load(){
      await axios.get("http://localhost:3000/personals").then(res => {
        this.personals = res.data
      }).catch ((err) => {
          console.log(err);
      })
      this.$root.$on('personalWorkout', heros => {
        this.personals.push(heros);
      })
    },
    async add(){
      if (this.form.Workout.trim().length == 0) {
        return
      }
      await axios.post("http://localhost:3000/personals", {heros: this.form}).then(res => {
        this.load(res)
        this.form.Workout = ''
        this.form.completed = ''
        this.form.id++
      })
      this.$root.$emit('personalWorkout', this.form);
    },
  },
};
</script>