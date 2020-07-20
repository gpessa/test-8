<template>
  <div class="icon" v-if="icon">
    <div class="icon__label">{{label}}</div>
    <DayClear class="icon__icon" v-if="[1,2,3,4,5].indexOf(icon) !== -1" />
    <Cloudy class="icon__icon" v-if="[5,6,7,8,9,10,11,19,20,21,22,23].indexOf(icon) !== -1" />
    <Rain class="icon__icon" v-if="[12,13,14,15,16,17,18].indexOf(icon) !== -1" />
    <Snow class="icon__icon" v-if="[24,25,26,27,28,29].indexOf(icon) !== -1" />
    <NightClear class="icon__icon" v-if="[33,34,35,36].indexOf(icon) !== -1" />
  </div>
</template>

<style scoped>
.icon {
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.icon__label {
  width: 90px;
  font-weight: 400;
  font-size: 0.8rem;
  text-transform: uppercase;
}
.icon__icon {
  width: 40px;
}
</style>

<script>
import Cloudy from '../../public/cloudy.svg';
import Rain from '../../public/rain.svg';
import DayClear from '../../public/day-clear.svg';
import Snow from '../../public/snow.svg';
import NightClear from '../../public/night-clear.svg';

export default {
  name: 'icon',
  components: {
    NightClear,
    DayClear,
    Cloudy,
    Snow,
    Rain,
  },
  props: {
    icon: {
      type: Number,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
};
</script>
