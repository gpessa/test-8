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

      <ul class="app__progress">
        <li v-for="(office, index) in offices" :key="index">
          <button
            v-on:click="() => change(index)"
            :class="{
              'app__progress-item': true,
              'app__progress-item--selected': selected === index
            }"
          />
        </li>
      </ul>
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
  cursor: pointer;
  background-color: transparent;
}
.app__button:disabled {
  cursor: not-allowed;
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
.app__progress {
  margin: 0;
  left: 50%;
  z-index: 3;
  padding: 0;
  bottom: 2rem;
  display: flex;
  position: fixed;
  list-style: none;
  transform: translateX(-50%);
}
.app__progress-item {
  padding: 0;
  width: 14px;
  height: 14px;
  border: none;
  margin: 0.5rem;
  display: block;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
}
.app__progress-item--selected {
  background-color: rgba(255, 255, 255, 1);
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
