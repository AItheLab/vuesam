import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import SamTextField from '@/components/text-field/SamTextField.vue'

describe('SamTextField', () => {
  it('renders properly', () => {
    const wrapper = mount(SamTextField, {
      props: {
        label: 'Test Label'
      }
    })
    expect(wrapper.find('.sam-text-field__label').text()).toContain('Test Label')
  })

  it('updates v-model correctly', async () => {
    const wrapper = mount(SamTextField, {
      props: {
        modelValue: 'initial'
      }
    })
    
    const input = wrapper.find('input')
    await input.setValue('updated')
    
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['updated'])
  })

  it('applies correct variant class', () => {
    const wrapper = mount(SamTextField, {
      props: {
        variant: 'filled'
      }
    })
    expect(wrapper.classes()).toContain('sam-text-field--filled')
  })

  it('applies correct size class', () => {
    const wrapper = mount(SamTextField, {
      props: {
        size: 'lg'
      }
    })
    expect(wrapper.classes()).toContain('sam-text-field--lg')
  })

  it('shows error state and message', () => {
    const wrapper = mount(SamTextField, {
      props: {
        error: 'This field is required'
      }
    })
    expect(wrapper.classes()).toContain('sam-text-field--error')
    expect(wrapper.find('.sam-text-field__error').text()).toBe('This field is required')
  })

  it('shows hint when provided', () => {
    const wrapper = mount(SamTextField, {
      props: {
        hint: 'This is a hint'
      }
    })
    expect(wrapper.find('.sam-text-field__hint').text()).toBe('This is a hint')
  })

  it('shows character counter when maxLength is set', () => {
    const wrapper = mount(SamTextField, {
      props: {
        modelValue: 'test',
        maxLength: 10
      }
    })
    expect(wrapper.find('.sam-text-field__counter').text()).toBe('4/10')
  })

  it('shows clear button when clearable and has value', async () => {
    const wrapper = mount(SamTextField, {
      props: {
        modelValue: 'test',
        clearable: true
      }
    })
    expect(wrapper.find('.sam-text-field__icon--clear').exists()).toBe(true)
  })

  it('clears value when clear button is clicked', async () => {
    const wrapper = mount(SamTextField, {
      props: {
        modelValue: 'test',
        clearable: true
      }
    })
    
    await wrapper.find('.sam-text-field__icon--clear').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
    expect(wrapper.emitted('clear')).toBeTruthy()
  })

  it('emits focus and blur events', async () => {
    const wrapper = mount(SamTextField)
    const input = wrapper.find('input')
    
    await input.trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
    
    await input.trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
  })

  it('disables input when disabled prop is true', () => {
    const wrapper = mount(SamTextField, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('makes input readonly when readonly prop is true', () => {
    const wrapper = mount(SamTextField, {
      props: {
        readonly: true
      }
    })
    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('shows required asterisk when required', () => {
    const wrapper = mount(SamTextField, {
      props: {
        label: 'Required Field',
        required: true
      }
    })
    expect(wrapper.find('.sam-text-field__required').text()).toBe('*')
  })

  it('emits icon click events', async () => {
    const wrapper = mount(SamTextField, {
      props: {
        prependIcon: 'fas fa-user',
        appendIcon: 'fas fa-search'
      }
    })
    
    await wrapper.find('.sam-text-field__icon--prepend').trigger('click')
    expect(wrapper.emitted('click:prepend')).toBeTruthy()
    
    await wrapper.find('.sam-text-field__icon--append').trigger('click')
    expect(wrapper.emitted('click:append')).toBeTruthy()
  })

  it('exposes focus, blur and select methods', () => {
    const wrapper = mount(SamTextField)
    
    expect(wrapper.vm.focus).toBeDefined()
    expect(wrapper.vm.blur).toBeDefined()
    expect(wrapper.vm.select).toBeDefined()
  })
})
