import Vuex from 'vuex';
import Home from '../views/Home.vue';
import { RESPONSE as weather } from '../store/mock-city-weather.ts';
import { RESPONSE as photo } from '../store/mock-city-photo.ts';
import { RESPONSE as info } from '../store/mock-city-info.ts';

export default {
  component: Home,
  title: 'Home',
};

export const Default = () => ({
  components: {
    Home,
  },
  template: `
    <Home/>
  `,
  store: new Vuex.Store({
    getters: {
      offices() {
        return [{
          weather: weather[187423],
          photo: photo[187423],
          info: info[187423],
        }, {
          weather: weather[308526],
          photo: photo[308526],
          info: info[308526],
        }];
      },
      loading() {
        return false;
      },
    },
  }),
});
