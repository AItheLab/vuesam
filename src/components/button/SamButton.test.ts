import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SamButton from '@/components/button/SamButton.vue'

describe('SamButton', () => {
  it('renders properly', () => {
    const wrapper = mount(SamButton, {
      slots: {
        default: 'Click me'
      }
    })
    expect(wrapper.text()).toContain('Click me')
  })

  it('applies correct variant class', () => {
    const wrapper = mount(SamButton, {
      props: {
        variant: 'outlined'
      }
    })
    expect(wrapper.classes()).toContain('sam-button--outlined')
  })

  it('applies correct color class', () => {
    const wrapper = mount(SamButton, {
      props: {
        color: 'secondary'
      }
    })
    expect(wrapper.classes()).toContain('sam-button--secondary')
  })

  it('applies correct size class', () => {
    const wrapper = mount(SamButton, {
      props: {
        size: 'lg'
      }
    })
    expect(wrapper.classes()).toContain('sam-button--lg')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(SamButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(SamButton, {
      props: {
        disabled: true
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(SamButton, {
      props: {
        loading: true
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  it('shows loading spinner when loading', () => {
    const wrapper = mount(SamButton, {
      props: {
        loading: true
      }
    })
    expect(wrapper.find('.sam-button__loader').exists()).toBe(true)
  })

  it('renders as anchor tag when href is provided', () => {
    const wrapper = mount(SamButton, {
      props: {
        href: 'https://example.com'
      }
    })
    expect(wrapper.element.tagName).toBe('A')
  })

  it('applies full width class when fullWidth is true', () => {
    const wrapper = mount(SamButton, {
      props: {
        fullWidth: true
      }
    })
    expect(wrapper.classes()).toContain('sam-button--full-width')
  })

  it('applies rounded class when rounded is true', () => {
    const wrapper = mount(SamButton, {
      props: {
        rounded: true
      }
    })
    expect(wrapper.classes()).toContain('sam-button--rounded')
  })
})
