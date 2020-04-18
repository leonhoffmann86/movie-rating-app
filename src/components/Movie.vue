<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ movie.name }}</div>
            <span class="grey--text"
              >{{ movie.release_year }} ‧ {{ movie.genre }}</span
            >
          </div>
        </v-card-title>
        <v-rating
          v-model="rating"
          background-color="orange lighten-3"
          color="orange"
        ></v-rating>
        <v-card-text>
          {{ movie.description }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  name: "Movie",
  data() {
    return { movie: [], rating: 0.0 };
  },
  watch: {
    rating(newVal) {
      this.state.note = newVal;
    },
  },
  mounted() {
    this.fetchMovie();
  },
  methods: {
    async fetchMovie() {
      return axios({
        method: "get",
        url: `http://localhost:8081/movies/${this.$route.params.id}`,
      })
        .then((response) => {
          this.movie = response.data;
        })
        .catch(() => {});
    },
  },
};
</script>
