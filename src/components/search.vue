<template>
  <div>
    <div>
      <!-- Image and text -->
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <router-link
            v-if="$routerHistory.hasPrevious()"
            :to="{ path: $routerHistory.previous().path }"
            class="h2 mb-0"
          >
            <b-icon-arrow-left />
          </router-link>
          BootstrapVue
          
        </b-navbar-brand>
      </b-navbar>
    </div>

    <div v-if="infos && infos.length">
      <b-list-group>
        <div v-for="info of infos" :key="info.name">
          <b-list-group-item class="item">
            <router-link
              :to="{
                path: '/detail',
                query: { 
                  category, 
                  id: get(info.url)
                },
              }"
              class="link"
            >
              {{ info.name || info.title }}
            </router-link>
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
  name: "search",
  data() {
    return {
      infos: [],
      errors: [],
      next: null,
      category: null,
      get(expression) {
        return expression.substr(-3, 2).includes("/") ? expression.substr(-2, 1) : expression.substr(-3, 2);
      },
    };
  },

  created() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    this.category = params.get("category");

    if (!this.next) {
      this.next = `https://swapi.dev/api/${this.category}/`;
    }

    axios
      .get(this.next)
      .then((response) => {
        this.infos = response.data.results;
        this.next = response.data.next;
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
  font-size: 2em;
}

.link {
  color: yellow;
  text-decoration: none;
}
</style>
