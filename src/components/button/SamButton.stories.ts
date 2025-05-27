import type { Meta, StoryObj } from '@storybook/vue3'
import SamButton from './SamButton.vue'
import type { SamButtonProps } from '@/types/components'

const meta: Meta<typeof SamButton> = {
  title: 'Components/SamButton',
  component: SamButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'El componente SamButton se utiliza para desencadenar acciones y navegar a través de tu aplicación. Proporciona múltiples variantes, colores, tamaños y estados para adaptarse a diferentes contextos de uso.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'text', 'tonal'],
      description: 'Variante visual del botón'
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Tema de color del botón'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamaño del botón'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita el botón'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Muestra el indicador de carga'
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Hace el botón de ancho completo'
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Usa esquinas completamente redondeadas'
    },
    icon: {
      control: { type: 'text' },
      description: 'Clase de icono a mostrar'
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Posición del icono'
    },
    onClick: {
      action: 'clicked',
      description: 'Se emite cuando se hace clic en el botón'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Historia por defecto
export const Default: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'md'
  },
  render: (args: SamButtonProps) => ({
    components: { SamButton },
    setup() {
      return { args }
    },
    template: '<SamButton v-bind="args">Click me</SamButton>'
  })
}

// Variantes
export const Variants: Story = {
  render: () => ({
    components: { SamButton },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <SamButton variant="filled">Filled</SamButton>
        <SamButton variant="outlined">Outlined</SamButton>
        <SamButton variant="text">Text</SamButton>
        <SamButton variant="tonal">Tonal</SamButton>
      </div>
    `
  })
}

// Colores
export const Colors: Story = {
  render: () => ({
    components: { SamButton },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <SamButton color="primary">Primary</SamButton>
        <SamButton color="secondary">Secondary</SamButton>
        <SamButton color="success">Success</SamButton>
        <SamButton color="warning">Warning</SamButton>
        <SamButton color="error">Error</SamButton>
        <SamButton color="info">Info</SamButton>
      </div>
    `
  })
}

// Tamaños
export const Sizes: Story = {
  render: () => ({
    components: { SamButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <SamButton size="xs">XS</SamButton>
        <SamButton size="sm">SM</SamButton>
        <SamButton size="md">MD</SamButton>
        <SamButton size="lg">LG</SamButton>
        <SamButton size="xl">XL</SamButton>
      </div>
    `
  })
}

// Estados
export const States: Story = {
  render: () => ({
    components: { SamButton },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <SamButton>Normal</SamButton>
        <SamButton disabled>Disabled</SamButton>
        <SamButton loading>Loading</SamButton>
        <SamButton rounded>Rounded</SamButton>
      </div>
    `
  })
}

// Interactivo
export const Interactive: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    size: 'md',
    disabled: false,
    loading: false,
    rounded: false,
    fullWidth: false
  },
  render: (args: SamButtonProps) => ({
    components: { SamButton },
    setup() {
      return { args }
    },
    template: '<SamButton v-bind="args">Interactive Button</SamButton>'
  })
}
