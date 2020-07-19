import Icon from '../components/Icon.vue';

export default {
  component: Icon,
  title: 'Icon',
};

export const Default = () => ({
  components: {
    Icon,
  },
  template: `
    <div>
      <Icon label="Label with icon" :icon="1"/>
      <Icon label="Label with icon" :icon="7"/>
      <Icon label="Label with icon" :icon="15"/>
      <Icon label="Label with icon" :icon="21"/>
    </div>
  `,
});
