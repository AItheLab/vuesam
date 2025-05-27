import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import { ref, computed } from 'vue'
import SamTextField from '@/components/text-field/SamTextField.vue'

const meta = {
  title: 'Components/SamTextField',
  component: SamTextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'El componente SamTextField se utiliza para recopilar entradas de usuario en formularios e interfaces interactivas. Proporciona múltiples variantes visuales, validaciones, iconos y estados para crear experiencias de entrada de datos robustas y accesibles.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'text' },
      description: 'El valor del input (v-model)'
    },
    label: {
      control: { type: 'text' },
      description: 'Etiqueta del campo'
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Texto de placeholder'
    },
    hint: {
      control: { type: 'text' },
      description: 'Texto de ayuda debajo del campo'
    },
    error: {
      control: { type: 'text' },
      description: 'Estado de error or mensaje'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita el campo'
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Hace el campo de solo lectura'
    },
    clearable: {
      control: { type: 'boolean' },
      description: 'Muestra el botón de limpiar'
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Tipo de input'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamaño del campo'
    },
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'underlined'],
      description: 'Variante visual'
    },
    prependIcon: {
      control: { type: 'text' },
      description: 'Clase de icono para prepend'
    },
    appendIcon: {
      control: { type: 'text' },
      description: 'Clase de icono para append'
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Longitud máxima de caracteres'
    },
    autofocus: {
      control: { type: 'boolean' },
      description: 'Autofocus al montar'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Marcar como requerido'
    },
    'onUpdate:modelValue': {
      action: 'update:modelValue',
      description: 'Se emite en input'
    },
    onFocus: {
      action: 'focus',
      description: 'Se emite al hacer focus'
    },
    onBlur: {
      action: 'blur',
      description: 'Se emite al perder focus'
    },
    onClear: {
      action: 'clear',
      description: 'Se emite al limpiar'
    }
  },
  args: {
    'onUpdate:modelValue': fn(),
    onFocus: fn(),
    onBlur: fn(),
    onClear: fn()
  }
} satisfies Meta<typeof SamTextField>

export default meta
type Story = StoryObj<typeof meta>

// Historia por defecto
export const Default: Story = {
  args: {
    label: 'Campo de texto',
    placeholder: 'Introduce algún texto...'
  },
  render: (args) => ({
    components: { SamTextField },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<div style="width: 300px;"><SamTextField v-bind="args" v-model="value" /></div>'
  })
}

// Variantes
export const Variants: Story = {
  render: () => ({
    components: { SamTextField },
    setup() {
      const outlined = ref('')
      const filled = ref('')
      const underlined = ref('')
      return { outlined, filled, underlined }
    },
    template: `
      <div style="width: 300px; display: flex; flex-direction: column; gap: 24px;">
        <SamTextField v-model="outlined" variant="outlined" label="Outlined (predeterminado)" />
        <SamTextField v-model="filled" variant="filled" label="Filled" />
        <SamTextField v-model="underlined" variant="underlined" label="Underlined" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'SamTextField viene en tres variantes visuales diferentes.'
      }
    }
  }
}

// Tamaños
export const Sizes: Story = {
  render: () => ({
    components: { SamTextField },
    setup() {
      const xs = ref('')
      const sm = ref('')
      const md = ref('')
      const lg = ref('')
      const xl = ref('')
      return { xs, sm, md, lg, xl }
    },
    template: `
      <div style="width: 300px; display: flex; flex-direction: column; gap: 24px;">
        <SamTextField v-model="xs" size="xs" label="Extra pequeño" />
        <SamTextField v-model="sm" size="sm" label="Pequeño" />
        <SamTextField v-model="md" size="md" label="Mediano (predeterminado)" />
        <SamTextField v-model="lg" size="lg" label="Grande" />
        <SamTextField v-model="xl" size="xl" label="Extra grande" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Los campos de texto están disponibles en cinco tamaños diferentes.'
      }
    }
  }
}

// Estados
export const States: Story = {
  render: () => ({
    components: { SamTextField },
    setup() {
      const normal = ref('')
      const error = ref('')
      const disabled = ref('Valor deshabilitado')
      const readonly = ref('Valor solo lectura')
      return { normal, error, disabled, readonly }
    },
    template: `
      <div style="width: 300px; display: flex; flex-direction: column; gap: 24px;">
        <SamTextField v-model="normal" label="Normal" />
        <SamTextField v-model="error" label="Con error" error="Este campo es requerido" />
        <SamTextField v-model="disabled" label="Deshabilitado" disabled />
        <SamTextField v-model="readonly" label="Solo lectura" readonly />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes estados del campo de texto incluyendo error, disabled y readonly.'
      }
    }
  }
}

// Características
export const Features: Story = {
  render: () => ({
    components: { SamTextField },
    setup() {
      const withHint = ref('')
      const clearable = ref('¡Límpiame!')
      const withCounter = ref('')
      const required = ref('')
      return { withHint, clearable, withCounter, required }
    },
    template: `
      <div style="width: 300px; display: flex; flex-direction: column; gap: 24px;">
        <SamTextField v-model="withHint" label="Con pista" hint="Esta es una pista útil" />
        <SamTextField v-model="clearable" label="Limpiable" clearable />
        <SamTextField v-model="withCounter" label="Con contador" :max-length="20" hint="Máximo 20 caracteres" />
        <SamTextField v-model="required" label="Campo requerido" required />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Características especiales como hints, botón de limpiar, contador de caracteres y campos requeridos.'
      }
    }
  }
}

// Con Iconos
export const WithIcons: Story = {
  render: () => ({
    components: { SamTextField },
    setup() {
      const username = ref('')
      const search = ref('')
      const email = ref('')
      return { username, search, email }
    },
    template: `
      <div style="width: 300px; display: flex; flex-direction: column; gap: 24px;">
        <SamTextField v-model="username" label="Usuario" prepend-icon="fas fa-user" />
        <SamTextField v-model="search" label="Buscar" append-icon="fas fa-search" clearable />
        <SamTextField v-model="email" label="Email" prepend-icon="fas fa-envelope" append-icon="fas fa-check" type="email" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Campos de texto con iconos de Font Awesome. Los iconos pueden posicionarse antes (prepend) o después (append) del texto.'
      }
    }
  }
}

// Tipos de Entrada
export const InputTypes: Story = {
  render: () => ({
    components: { SamTextField },
    setup() {
      const email = ref('')
      const password = ref('')
      const number = ref('')
      const tel = ref('')
      const url = ref('')
      const search = ref('')
      return { email, password, number, tel, url, search }
    },
    template: `
      <div style="width: 300px; display: flex; flex-direction: column; gap: 24px;">
        <SamTextField v-model="email" type="email" label="Email" prepend-icon="fas fa-envelope" />
        <SamTextField v-model="password" type="password" label="Contraseña" prepend-icon="fas fa-lock" />
        <SamTextField v-model="number" type="number" label="Número" prepend-icon="fas fa-hashtag" />
        <SamTextField v-model="tel" type="tel" label="Teléfono" prepend-icon="fas fa-phone" />
        <SamTextField v-model="url" type="url" label="URL" prepend-icon="fas fa-link" />
        <SamTextField v-model="search" type="search" label="Búsqueda" prepend-icon="fas fa-search" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes tipos de entrada HTML para diferentes tipos de datos.'
      }
    }
  }
}

// Demo Interactivo con Validación
export const InteractiveDemo: Story = {
  render: () => ({
    components: { SamTextField },
    setup() {
      const username = ref('')
      const email = ref('')
      const message = ref('')
      
      const usernameError = computed(() => {
        if (!username.value) return ''
        return username.value.length < 3 ? 'El nombre debe tener al menos 3 caracteres' : ''
      })
      
      const emailError = computed(() => {
        if (!email.value) return ''
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return !emailRegex.test(email.value) ? 'Por favor ingresa un email válido' : ''
      })
      
      return { username, email, message, usernameError, emailError }
    },
    template: `
      <div style="width: 350px; display: flex; flex-direction: column; gap: 24px;">
        <SamTextField 
          v-model="username" 
          label="Nombre de usuario" 
          prepend-icon="fas fa-user"
          :error="usernameError"
          required
          hint="Mínimo 3 caracteres"
        />
        <SamTextField 
          v-model="email" 
          label="Email" 
          type="email"
          prepend-icon="fas fa-envelope"
          :error="emailError"
          required
        />
        <SamTextField 
          v-model="message" 
          label="Mensaje" 
          prepend-icon="fas fa-comment"
          :max-length="100"
          hint="Comparte tus pensamientos..."
          clearable
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demo interactivo que muestra validación en tiempo real y diferentes características trabajando juntas.'
      }
    }
  }
}

// Interactivo con Controles
export const Interactive: Story = {
  args: {
    modelValue: '',
    label: 'Campo Interactivo',
    placeholder: 'Escribe algo...',
    variant: 'outlined',
    size: 'md',
    disabled: false,
    readonly: false,
    clearable: false,
    required: false
  },
  render: (args) => ({
    components: { SamTextField },
    setup() {
      const value = ref(args.modelValue || '')
      return { args, value }
    },
    template: '<div style="width: 300px;"><SamTextField v-bind="args" v-model="value" /></div>'
  }),
  parameters: {
    docs: {
      description: {
        story: 'Campo de texto interactivo donde puedes probar diferentes combinaciones de props usando los controles.'
      }
    }
  }
}
