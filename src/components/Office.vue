<template>
  <div class="office" :style="`background-image: url(${photo})`">
    <div class="office__modal">
      <div class="office__data">
        <h1 class="office__city">{{info.EnglishName}}</h1>
        <h5 class="office__country">{{info.Country.EnglishName}}</h5>
        <p class="office__description">{{weather.Headline.Text}}</p>
        <Temperature
          class="office__temperature"
          label="Minimum"
          :value="weather.DailyForecasts[0].Temperature.Minimum.Value"
        />
        <Temperature
          class="office__temperature"
          label="Maximum"
          :value="weather.DailyForecasts[0].Temperature.Maximum.Value"
        />
        <Icon label="Day" :icon="weather.DailyForecasts[0].Day.Icon" />
        <Icon label="Night" :icon="weather.DailyForecasts[0].Night.Icon" />
      </div>
      <div class="office__map">
        <Map :position="info.GeoPosition" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Temperature from './Temperature.vue';
import Icon from './Icon.vue';
import Map from './Map.vue';

@Component({
  components: {
    Temperature,
    Icon,
    Map,
  },
})
export default class Office extends Vue {
  @Prop() private info!: Record<string, unknown>;

  @Prop() private photo!: string;

  @Prop() private weather!: Record<string, unknown>;
}
</script>

<style scoped>
.office {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.office__modal {
  display: flex;
  align-items: stretch;
  position: relative;
  width: 33%;
}

.office__description {
  min-height: 60px;
}

.office__data {
  flex: 1;
  z-index: 1;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
}

.office__map {
  flex: 1;
  z-index: 1;
}

.office__temperature {
  margin-bottom: 1rem;
}

.office__city {
  font-weight: 200;
  margin: 0;
}

.office__country {
  text-transform: uppercase;
  font-weight: 200;
  margin: 0;
}
</style>
