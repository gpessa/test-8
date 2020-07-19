import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/Temperature.vue';
import { convertToCelsius } from '@/services';

describe('Temperature.vue', () => {
  it('renders the converted temperature and the label value', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        label: 'Temperature',
        value: 10,
      },
    });
    expect(wrapper.find('.temperature__label').text()).toBe('Temperature')
    expect(wrapper.find('.temperature__value').text()).toBe('-12 F')
  });

  it('expect to convert Fahrenheit to Celsius', () => {
    const fahrenheit = convertToCelsius(10)
    expect(fahrenheit).toBe('-12')
  })
});
