<template>
  <div class="temperature">
    <div class="temperature__label">{{label}}</div>
    <div class="temperature__value">{{celsius}} °C</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { convertToCelsius } from '../services/index';

@Component
export default class Temperature extends Vue {
  @Prop() private label!: string;

  @Prop() private value!: number;

  get celsius(): string {
    return convertToCelsius(this.value);
  }
}
</script>

<style scoped>
.temperature {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.temperature__label {
  width: 100px;
  font-weight: 400;
  font-size: 0.8rem;
  text-transform: uppercase;
}
</style>
