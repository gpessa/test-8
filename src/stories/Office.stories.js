import Office from '../components/Office.vue';
import { RESPONSE as weather } from '../store/mock-city-weather.ts';
import { RESPONSE as photo } from '../store/mock-city-photo.ts';
import { RESPONSE as info } from '../store/mock-city-info.ts';

export default {
  component: Office,
  title: 'Office',
};

export const Default = () => ({
  components: {
    Office,
  },
  data() {
    return {
      weather: weather[187423],
      photo: photo[187423],
      info: info[187423],
    };
  },
  template: `
    <Office 
      :info="info"
      :photo="photo"
      :weather="weather"
    />
  `,
});
