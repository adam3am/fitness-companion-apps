<template>
  <div class="container"> 
    <div class="text-muted">All Workout</div>
    <!-- Card Deck v-for? -->
    <div class="card-deck">
      <div class="col-md-4 my-3" v-for="hero in heros" :key="hero.id">
        <div class="card text-white bg-dark border-secondary h-100">
          <img class="card-img-top" :src="hero.Img">
          <div class="card-body">
            <h5 class="card-title">{{hero.WorkoutTitle}}</h5>
            <p class="card-text">{{hero.DeskripsiSingkat}}</p>
          </div>
          <div class="card-footer bg-dark border-secondary">
            <b-button v-b-modal="'modal-lg' + hero.Id" block variant="primary">Details</b-button>
          </div>
          <b-modal hide-header-close ok-title="Got it" :id="'modal-lg' + hero.Id" :title="hero.WorkoutTitle" size="lg" ok-only ok-variant="dark" centered>
            <h6 class="modal-title mb-3">{{hero.Deskripsi}}</h6>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dataService } from '../shared/service';

export default {
  name: "hero-workout",
  data() {
    return {
      heros: []
    }
  },

  async created() {
    await this.loadHeroes();
  },
  
  methods: {
    async loadHeroes() {
      this.heros = [];
      this.heros = await dataService.getHeroes();
    }
  },
};
</script>