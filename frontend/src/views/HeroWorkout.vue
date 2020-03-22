<template>
  <div class="my-4"> 
    <span class="text-muted">All Workout</span>
    <!-- Card Deck v-for? -->
    <div class="card-deck my-2">
      <div class="card" v-for="hero in heros" :key="hero.id">
        <img class="card-img-top" src="../assets/img/pic5.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{hero.WorkoutTitle}}</h5>
          <p class="card-text">{{hero.DeskripsiSingkat}}</p>
        </div>
        <div class="card-footer">
          <b-button v-b-modal.modal-1>Details</b-button>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <b-modal id="modal-center" centered ok-only title="BootstrapVue">
      <table class="table table-lg">
        <thead>
          <tr>
            <th scope="col">Exercise</th>
            <th scope="col">Experience:</th>
            <th scope="col">Education:</th>
            <th scope="col">Experience:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Youtube Playlist</td>
            <td>Digital Marketing</td>
          </tr>
          <tr>
            <td>Linux Academy</td>
            <td>Graphic Design</td>
          </tr>
          <tr>
            <td>Self-taught</td>
            <td>Freelancer</td>
          </tr>
        </tbody>
      </table>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      heros: []
    }
  },

  async created() {
    const response = await axios.get('http://localhost:3000/heros')
    this.heros = response.data
  }


};
</script>