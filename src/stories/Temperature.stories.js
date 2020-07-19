import Temperature from '../components/Temperature.vue';

export default {
  component: Temperature,
  title: 'Temperature',
};

export const Default = () => ({
  components: { Temperature },
  template: `
    <temperature
      v-bind:value="10"
      v-bind:label="'Temperature'"
    />
  `,
});
