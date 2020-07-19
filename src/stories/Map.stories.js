import Map from '../components/Map.vue';

export default {
  component: Map,
  title: 'Map',
};

export const Default = () => ({
  components: {
    Map,
  },
  template: `
    <div style="width: 300px; height: 300px;">
      <Map :position="{
        Latitude: 52.372,
        Longitude: 4.9,
      }"/>
    </div>
  `,
});
