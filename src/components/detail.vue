<template>
  <div>
    <div v-if="detail">
      <div class="fade"></div>

      <div>
        <section class="star-wars">
          <div class="crawl">
            <div class="titleCrawl">
              <h1>STAR WARS</h1>
              <p>A chosen detail</p>
            </div>
            <b-list-group>
              <div v-for="(value, name) in detail" :key="value">
                <b-list-group-item class="item mb-5 pb-3">
                  {{ name }}: {{ value }}
                </b-list-group-item>
              </div>
            </b-list-group>
          </div>
        </section>
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

body {
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
}

.fade {
  position: relative;
  width: 100%;
  min-height: 60vh;
  top: -25px;
  background-image: linear-gradient(0deg, transparent, black 75%);
  z-index: 1;
}

.star-wars {
  display: flex;
  justify-content: center;
  position: relative;
  height: 800px;
  color: #feda4a;
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
}

.crawl {
  position: relative;
  top: 9999px;
  transform-origin: 50% 100%;
  animation: crawl 35s linear;
}

.crawl > .titleCrawl {
  font-size: 1.5em;
  text-align: center;
  color: yellow;
  margin: 0 0 250px;
}

.crawl > .titleCrawl h1 {
  margin: 0 0 50px;
  text-transform: uppercase;
  color: yellow;
  font-size: 2.5em;
}

@keyframes crawl {
  0% {
    top: 0;
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
}
</style>
