<template>
  <div>
  
     <router-link
      v-if="$routerHistory.hasPrevious()"
      :to="{ path: $routerHistory.previous().path }">
      GO BACK
    </router-link>

    <div v-if="detail">
      <b-list-group>
      <div v-for="(value, name) in detail" :key="value">
        <b-list-group-item class="item">
          {{ name }}: {{ value }}
        </b-list-group-item>
      </div>
      </b-list-group>
    </div>

    <div v-if="errors && errors.length">
      <b-list-group>
        <div v-for="error of errors" :key="error">
          <b-list-group-item>
            {{ error.message }}
          </b-list-group-item>
        </div>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "detail",
  data() {
    return {
      detail: null,
      errors: [],
    };
  },

  created() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);

    axios
      .get(
        `https://swapi.dev/api/${params.get("category")}/${params.get("id")}`
      )
      .then((response) => {
        this.detail = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style scoped>

.item {
  background: transparent;
  font-size: 1.8em;
  color: yellow;
  text-transform: capitalize;
}
</style>
