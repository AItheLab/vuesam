# 📚 Storybook - Vue SAM

## 🎯 **¿Qué es Storybook?**

Storybook es una herramienta de desarrollo que permite crear, visualizar y probar componentes Vue de forma aislada. Es perfecto para:

- **🧪 Desarrollo aislado** - Probar componentes sin dependencias
- **📖 Documentación interactiva** - Ejemplos visuales con controles  
- **🎨 Exploración de variantes** - Ver todas las combinaciones de props
- **🔧 Testing manual** - Verificar comportamientos y estados

## 🚀 **Cómo Ejecutar Storybook**

### **Modo Desarrollo**
```bash
yarn storybook:dev
# → http://localhost:6006
```

### **Build Estático**
```bash
yarn storybook:build
# Genera archivos estáticos en storybook-static/
```

## 🏗️ **Estructura del Proyecto**

```
vue-sam/
├── .storybook/
│   ├── main.ts              # Configuración principal
│   └── preview.ts           # Configuración global de preview
├── src/
│   └── components/
│       ├── button/
│       │   ├── SamButton.vue
│       │   └── SamButton.stories.ts  # ← Stories del botón
│       └── text-field/
│           ├── SamTextField.vue
│           └── SamTextField.stories.ts # ← Stories del campo
```

## ✨ **Características Configuradas**

### **🎨 Estilos SCSS Integrados**
- ✅ Variables globales disponibles (`$sam-font-family`, etc.)
- ✅ Mixins globales disponibles (`@include sam-component`)
- ✅ Tema oscuro por defecto
- ✅ Font Awesome para iconos

### **🔧 Configuración Técnica**
- ✅ **Vue 3** con Composition API
- ✅ **TypeScript** completamente soportado
- ✅ **Vite** como bundler
- ✅ **Alias @/** configurado para imports
- ✅ **Auto-docs** generadas automáticamente

### **📱 Addons Incluidos**
- ✅ **Controls** - Controles interactivos para props
- ✅ **Actions** - Ver eventos emitidos
- ✅ **Docs** - Documentación automática
- ✅ **Backgrounds** - Cambiar fondos para testing
- ✅ **Viewport** - Testing responsive

## 📝 **Cómo Crear una Nueva Story**

### **1. Estructura Básica**
```typescript
// src/components/mi-componente/MiComponente.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import MiComponente from './MiComponente.vue'

const meta = {
  title: 'Components/MiComponente',
  component: MiComponente,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // Definir controles para props
    miProp: {
      control: { type: 'text' },
      description: 'Descripción de la prop'
    }
  }
} satisfies Meta<typeof MiComponente>

export default meta
type Story = StoryObj<typeof meta>
```

### **2. Stories Básicas**
```typescript
// Historia por defecto
export const Default: Story = {
  args: {
    miProp: 'valor por defecto'
  }
}

// Historia con template personalizado
export const Variantes: Story = {
  render: () => ({
    components: { MiComponente },
    template: `
      <div style="display: flex; gap: 16px;">
        <MiComponente variant="uno">Variante 1</MiComponente>
        <MiComponente variant="dos">Variante 2</MiComponente>
      </div>
    `
  })
}
```

### **3. Stories con Estado (v-model)**
```typescript
export const Interactivo: Story = {
  render: (args) => ({
    components: { MiComponente },
    setup() {
      const valor = ref('')
      return { args, valor }
    },
    template: '<MiComponente v-bind="args" v-model="valor" />'
  })
}
```

## 🎮 **Stories Existentes**

### **SamButton** (`/Components/SamButton`)
- ✅ **Default** - Botón básico
- ✅ **Variants** - Todas las variantes (filled, outlined, text, tonal)
- ✅ **Colors** - Todos los colores disponibles
- ✅ **Sizes** - Todos los tamaños (xs, sm, md, lg, xl)
- ✅ **States** - Estados especiales (disabled, loading, rounded)
- ✅ **WithIcons** - Botones con iconos Font Awesome
- ✅ **FullWidth** - Botones de ancho completo
- ✅ **Interactive** - Con controles interactivos
- ✅ **AsLink** - Como enlaces externos o router

### **SamTextField** (`/Components/SamTextField`)
- ✅ **Default** - Campo básico
- ✅ **Variants** - Variantes visuales (outlined, filled, underlined)
- ✅ **Sizes** - Todos los tamaños disponibles
- ✅ **States** - Estados (normal, error, disabled, readonly)
- ✅ **Features** - Características (hint, clearable, counter, required)
- ✅ **WithIcons** - Con iconos prepend/append
- ✅ **InputTypes** - Tipos de entrada (email, password, number, etc.)
- ✅ **InteractiveDemo** - Demo con validación en tiempo real
- ✅ **Interactive** - Con controles interactivos

## 🛠️ **Configuración Avanzada**

### **Personalizar Background**
```typescript
// En tu story
parameters: {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#1a1a1a' }
    ]
  }
}
```

### **Layout Personalizado**
```typescript
parameters: {
  layout: 'centered', // 'centered' | 'fullscreen' | 'padded'
}
```

### **Documentación Personalizada**
```typescript
parameters: {
  docs: {
    description: {
      story: 'Descripción específica de esta story'
    }
  }
}
```

## 🔗 **Enlaces de Desarrollo**

- **Storybook**: http://localhost:6006
- **Playground**: http://localhost:3000 (tras `yarn dev`)
- **Documentación**: http://localhost:5173 (tras `yarn docs:dev`)

## 💡 **Mejores Prácticas**

### **✅ Hacer**
- Crear stories para cada variante importante del componente
- Usar controles interactivos para props importantes
- Incluir documentación descriptiva
- Mostrar casos de uso reales
- Probar estados edge cases (loading, error, empty)

### **❌ Evitar**
- Stories demasiado complejas con mucha lógica
- Duplicar stories que son muy similares
- Olvidar actualizar stories al cambiar componentes
- No documentar props y eventos importantes

## 🎯 **Próximos Pasos**

1. **Ejecutar Storybook**: `yarn storybook:dev`
2. **Explorar componentes** existentes
3. **Crear stories para nuevos componentes** siguiendo esta guía
4. **Usar Storybook** como herramienta de desarrollo diario

---

## 📊 **Estado del Proyecto**

- 🟢 **Storybook**: ✅ Configurado y funcionando
- 🟢 **SamButton**: ✅ 8 stories completas
- 🟢 **SamTextField**: ✅ 8 stories completas  
- 🟢 **SCSS**: ✅ Variables y mixins disponibles
- 🟢 **TypeScript**: ✅ Completamente soportado
- 🟢 **Auto-docs**: ✅ Generación automática

¡Storybook está listo para acelerar tu desarrollo de componentes! 🚀
