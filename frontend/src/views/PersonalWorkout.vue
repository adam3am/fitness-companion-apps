<template>
  <div class="container">
    <div class="text-muted">Please Type Your Workout Type</div>
    <!-- Add Button -->
    <div class="input-group mb-3 my-2">
      <input type="text" class="form-control" placeholder="Workout Type" v-model="newTodo" @keyup.enter="addTodo()">
      <div class="input-group-append">
        <button class="btn btn-dark" type="button" @click="addTodo()">Add</button>
      </div>
    </div>
    <hr class="my-4">
    <h2 class="my-3">Your Today Workout</h2>
    <!-- Checkbox -->
    <div class="workoutList" v-for="person in personals.slice().reverse()" :key="person.id">
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
import { dataService } from '../shared/service';

export default {
  name: "personal-workout",
  data() {
    return {
      newTodo: '',
      idForPerson: 4,
      personals: []
    }
  },

  async created() {
    await this.loadPersonals();
  },
  
  methods: {
    async loadPersonals() {
      this.personals = [];
      this.personals  = await dataService.getPersonals();
    },

    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return
      }
      this.personals.push({
        id: this. idForPerson,
        Workout: this.newTodo,
        completed: false,
      });
      this.newTodo = ''
      this.idForPerson++
    }
  },
};
</script>