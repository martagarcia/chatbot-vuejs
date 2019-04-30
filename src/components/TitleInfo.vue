<template>
  <div class="title-info">
    <h3>{{ title }}</h3>
    <p>
      Here, you can talk to YodaBot, an intelligent Bot who has learned to talk like Yoda.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TitleInfo extends Vue {
  @Prop() private title!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .title-info{
    text-align: center;
  }
  h3 {
    margin: 20px 0 0;
  }
</style>
