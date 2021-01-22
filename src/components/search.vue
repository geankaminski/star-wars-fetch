<template>
  <b-container>
    <header>
      <h1 class="title">STAR WARS</h1>
      <p class="subtitle">{{ category }}</p>
    </header>

    <div v-if="infos && infos.length">
      <b-list-group>
        <div v-for="info of infos" :key="info.name">
          <b-list-group-item class="item">
            <router-link
              :to="{
                path: '/detail',
                query: {
                  category,
                  id: get(info.url),
                },
              }"
              class="link"
            >
              {{ info.name || info.title }}
            </router-link>
          </b-list-group-item>
        </div>
      </b-list-group>

      <div class="container mt-4 mb-4">
        <div class="row justify-content-center">
          <div v-if="previous">
            <a
              class="link mr-5"
              :href="
                $router.resolve({
                  path: '/search',
                  query: {
                    category,
                    page: getPage(previous),
                  },
                }).href
              "
            >
              <b-icon-arrow-left class="h1" />
            </a>
          </div>

          <div v-if="next">
            <a
              class="link"
              :href="
                $router.resolve({
                  path: '/search',
                  query: {
                    category,
                    page: getPage(next),
                  },
                }).href
              "
            >
              <b-icon-arrow-right class="h1" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="errors && errors.length">
      <b-list-group>
        <div v-for="error of errors" :key="error">
          <b-list-group-item class="item">
            {{ error.message }}
          </b-list-group-item>
        </div>
      </b-list-group>
    </div>
  </b-container>
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
      previous: null,
      category: null,
      page: null,
      get(expression) {
        return expression.substr(-3, 2).includes("/")
          ? expression.substr(-2, 1)
          : expression.substr(-3, 2);
      },
      getPage(expression) {
        return expression.substr(-2, 1).includes("=")
          ? expression.substr(-1, 1)
          : expression.substr(-2, 2);
      },
    };
  },

  created() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    this.category = params.get("category");
    this.page = params.get("page");

    if (!this.page) {
      this.next = `https://swapi.dev/api/${this.category}/?page=1`;
      this.previous = null;
    } else {
      this.next = `https://swapi.dev/api/${this.category}/?page=${this.page}`;

      this.page == 1
        ? (this.previous = null)
        : (this.previous = `https://swapi.dev/api/${this.category}/?page=${this
            .page - 1}`);
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

.subtitle {
  font-size: 1.5em;
  text-transform: uppercase;
}
</style>
