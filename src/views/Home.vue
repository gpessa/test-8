<template>
  <div class="app" v-if="!loading">
    <template v-if="error">
      <div class="app__error">
        <h4>Error</h4>
        <p>There was an error. Please try again later</p>
      </div>
    </template>

    <template v-else>
      <button
        class="app__button app__button--pre"
        v-on:click="change(selected - 1)"
        :disabled="selected === 0"
      ></button>

      <Office v-bind="office" :selected="true" />

      <button
        class="app__button app__button--next"
        v-on:click="change(selected + 1)"
        :disabled="selected === (offices.length -1)"
      ></button>
    </template>
  </div>
</template>

<style>
.app__button {
  top: 0;
  margin: 0;
  width: 33%;
  z-index: 2;
  padding: 0;
  border: none;
  height: 100%;
  position: fixed;
  background-color: transparent;
}
.app__button--pre {
  left: 0%;
}
.app__button--next {
  right: 0%;
}
.app__error {
  top: 50%;
  left: 50%;
  color: #fff;
  padding: 1rem;
  position: fixed;
  border-radius: 1rem;
  background: #f44336;
  transform: translate(-50%, -50%);
}
</style>

<script>
import Office from '@/components/Office.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Office,
  },
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    change(selected) {
      this.selected = selected;
    },
  },
  computed: {
    ...mapGetters(['offices', 'loading', 'error']),
    office() {
      return this.offices[this.selected];
    },
  },
};
</script>
