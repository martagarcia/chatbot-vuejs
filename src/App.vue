<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Chat</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleInfo from '@/components/TitleInfo.vue';
import ApiService from '@/services/api.service';

@Component({
  components: {
    TitleInfo,
  },
})

export default class App extends Vue {

}

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
}
#nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
