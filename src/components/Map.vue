<template>
  <div class="map" />
</template>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>

<script>
const googleMap = (function () {
  const API_KEY = process.env.VUE_APP_GOOGLE_AMP_KEY;
  const CALLBACK_NAME = 'gmapsCallback';

  let initialized = !!window.google;

  let resolveInitPromise;
  let rejectInitPromise;

  const initPromise = new Promise((resolve, reject) => {
    resolveInitPromise = resolve;
    rejectInitPromise = reject;
  });

  function loadScript() {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`;
    script.onerror = rejectInitPromise;
    document.querySelector('head').appendChild(script);
  }

  return {
    init: () => {
      if (initialized) return initPromise;
      initialized = true;

      window[CALLBACK_NAME] = () => {
        resolveInitPromise(window.google);
      };

      loadScript();

      return initPromise;
    },
  };
}());

export default {
  name: 'Map',
  props: ['position'],
  watch: {
    position(value) {
      this.drawMap(value);
    },
  },
  data() {
    return {
      google: undefined,
    };
  },
  async mounted() {
    try {
      this.google = await googleMap.init();
      this.drawMap(this.position);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    drawMap({ Longitude: lng, Latitude: lat }) {
      const position = { lng, lat };

      const map = new this.google.maps.Map(
        this.$el, { zoom: 5, center: position },
      );

      return new this.google.maps.Marker({ position, map });
    },
  },
};
</script>
