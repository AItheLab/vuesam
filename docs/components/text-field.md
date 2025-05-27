# SamTextField

## Descripción

El componente SamTextField se utiliza para recopilar entradas de usuario en formularios e interfaces interactivas. Proporciona múltiples variantes visuales, validaciones, iconos y estados para crear experiencias de entrada de datos robustas y accesibles.

## Uso Básico

<DemoBlock>
  <div style="width: 100%; max-width: 400px;">
    <SamTextField v-model="text1" label="Campo de texto básico" />
    <br>
    <SamTextField v-model="text2" label="Con placeholder" placeholder="Introduce algún texto..." />
    <br>
    <SamTextField v-model="text3" label="Con pista" hint="Esta es una pista útil" />
  </div>

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const text1 = ref('')
const text2 = ref('')
const text3 = ref('')
</script>

<template>
  <SamTextField v-model="text1" label="Campo de texto básico" />
  <SamTextField 
    v-model="text2" 
    label="Con placeholder" 
    placeholder="Introduce algún texto..." 
  />
  <SamTextField 
    v-model="text3" 
    label="Con pista" 
    hint="Esta es una pista útil" 
  />
</template>
```

  </template>
</DemoBlock>

## Variantes

SamTextField viene en tres variantes visuales:

<DemoBlock>
  <div style="width: 100%; max-width: 400px;">
    <SamTextField v-model="variant1" variant="outlined" label="Outlined (predeterminado)" />
    <br>
    <SamTextField v-model="variant2" variant="filled" label="Filled" />
    <br>
    <SamTextField v-model="variant3" variant="underlined" label="Underlined" />
  </div>

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const variant1 = ref('')
const variant2 = ref('')
const variant3 = ref('')
</script>

<template>
  <SamTextField v-model="variant1" variant="outlined" label="Outlined (predeterminado)" />
  <SamTextField v-model="variant2" variant="filled" label="Filled" />
  <SamTextField v-model="variant3" variant="underlined" label="Underlined" />
</template>
```

  </template>
</DemoBlock>

## Tamaños

Los campos de texto están disponibles en cinco tamaños:

<DemoBlock>
  <div style="width: 100%; max-width: 400px;">
    <SamTextField v-model="size1" size="xs" label="Extra pequeño" />
    <br>
    <SamTextField v-model="size2" size="sm" label="Pequeño" />
    <br>
    <SamTextField v-model="size3" size="md" label="Mediano (predeterminado)" />
    <br>
    <SamTextField v-model="size4" size="lg" label="Grande" />
    <br>
    <SamTextField v-model="size5" size="xl" label="Extra grande" />
  </div>

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const size1 = ref('')
const size2 = ref('')
const size3 = ref('')
const size4 = ref('')
const size5 = ref('')
</script>

<template>
  <SamTextField v-model="size1" size="xs" label="Extra pequeño" />
  <SamTextField v-model="size2" size="sm" label="Pequeño" />
  <SamTextField v-model="size3" size="md" label="Mediano (predeterminado)" />
  <SamTextField v-model="size4" size="lg" label="Grande" />
  <SamTextField v-model="size5" size="xl" label="Extra grande" />
</template>
```

  </template>
</DemoBlock>

## Estados

### Estado de Error

<DemoBlock>
  <div style="width: 100%; max-width: 400px;">
    <SamTextField 
      v-model="error1" 
      label="Con mensaje de error" 
      error="Este campo es requerido" 
    />
    <br>
    <SamTextField 
      v-model="error2" 
      label="Error sin mensaje" 
      :error="true" 
    />
  </div>

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const error1 = ref('')
const error2 = ref('')
</script>

<template>
  <SamTextField 
    v-model="error1" 
    label="Con mensaje de error" 
    error="Este campo es requerido" 
  />
  <SamTextField 
    v-model="error2" 
    label="Error sin mensaje" 
    :error="true" 
  />
</template>
```

  </template>
</DemoBlock>

### Deshabilitado y Solo Lectura

<DemoBlock>
  <div style="width: 100%; max-width: 400px;">
    <SamTextField 
      v-model="disabled" 
      label="Deshabilitado" 
      disabled 
    />
    <br>
    <SamTextField 
      v-model="readonly" 
      label="Solo lectura" 
      readonly 
    />
  </div>

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const disabled = ref('Valor deshabilitado')
const readonly = ref('Valor solo lectura')
</script>

<template>
  <SamTextField v-model="disabled" label="Deshabilitado" disabled />
  <SamTextField v-model="readonly" label="Solo lectura" readonly />
</template>
```

  </template>
</DemoBlock>

## Características

### Limpiable

<DemoBlock>
  <div style="width: 100%; max-width: 400px;">
    <SamTextField 
      v-model="clearable" 
      label="Campo limpiable" 
      clearable 
    />
  </div>

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const clearable = ref('¡Límpiame!')
</script>

<template>
  <SamTextField 
    v-model="clearable" 
    label="Campo limpiable" 
    clearable 
  />
</template>
```

  </template>
</DemoBlock>

### Contador de Caracteres

<DemoBlock>
  <div style="width: 100%; max-width: 400px;">
    <SamTextField 
      v-model="counter" 
      label="Con límite de caracteres" 
      :max-length="50" 
      hint="Máximo 50 caracteres"
    />
  </div>

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const counter = ref('')
</script>

<template>
  <SamTextField 
    v-model="counter" 
    label="Con límite de caracteres" 
    :max-length="50" 
    hint="Máximo 50 caracteres"
  />
</template>
```

  </template>
</DemoBlock>

### Iconos

<DemoBlock>
  <div style="width: 100%; max-width: 400px;">
    <SamTextField 
      v-model="icon1" 
      label="Con icono prepend" 
      prepend-icon="fas fa-user" 
    />
    <br>
    <SamTextField 
      v-model="icon2" 
      label="Con icono append" 
      append-icon="fas fa-search" 
    />
    <br>
    <SamTextField 
      v-model="icon3" 
      label="Con ambos iconos" 
      prepend-icon="fas fa-envelope"
      append-icon="fas fa-check" 
    />
  </div>

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const icon1 = ref('')
const icon2 = ref('')
const icon3 = ref('')
</script>

<template>
  <SamTextField 
    v-model="icon1" 
    label="Con icono prepend" 
    prepend-icon="fas fa-user" 
  />
  <SamTextField 
    v-model="icon2" 
    label="Con icono append" 
    append-icon="fas fa-search" 
  />
  <SamTextField 
    v-model="icon3" 
    label="Con ambos iconos" 
    prepend-icon="fas fa-envelope"
    append-icon="fas fa-check" 
  />
</template>
```

  </template>
</DemoBlock>

## Tipos de Entrada

<DemoBlock>
  <div style="width: 100%; max-width: 400px;">
    <SamTextField v-model="email" type="email" label="Email" />
    <br>
    <SamTextField v-model="password" type="password" label="Contraseña" />
    <br>
    <SamTextField v-model="number" type="number" label="Número" />
    <br>
    <SamTextField v-model="tel" type="tel" label="Teléfono" />
    <br>
    <SamTextField v-model="url" type="url" label="URL" />
    <br>
    <SamTextField v-model="search" type="search" label="Búsqueda" />
  </div>

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const number = ref('')
const tel = ref('')
const url = ref('')
const search = ref('')
</script>

<template>
  <SamTextField v-model="email" type="email" label="Email" />
  <SamTextField v-model="password" type="password" label="Contraseña" />
  <SamTextField v-model="number" type="number" label="Número" />
  <SamTextField v-model="tel" type="tel" label="Teléfono" />
  <SamTextField v-model="url" type="url" label="URL" />
  <SamTextField v-model="search" type="search" label="Búsqueda" />
</template>
```

  </template>
</DemoBlock>

## Tabla de Props

| Prop | Tipo | Valor por Defecto | Descripción |
|------|------|-------------------|-------------|
| `modelValue` | `string \| number` | `undefined` | El valor del input (v-model) |
| `label` | `string` | `undefined` | Etiqueta del campo |
| `placeholder` | `string` | `undefined` | Texto de placeholder |
| `hint` | `string` | `undefined` | Texto de ayuda debajo del campo |
| `error` | `string \| boolean` | `undefined` | Estado de error o mensaje |
| `disabled` | `boolean` | `false` | Deshabilita el campo |
| `readonly` | `boolean` | `false` | Hace el campo de solo lectura |
| `clearable` | `boolean` | `false` | Muestra el botón de limpiar |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search'` | `'text'` | Tipo de input |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del campo |
| `variant` | `'outlined' \| 'filled' \| 'underlined'` | `'outlined'` | Variante visual |
| `prependIcon` | `string` | `undefined` | Clase de icono para prepend |
| `appendIcon` | `string` | `undefined` | Clase de icono para append |
| `maxLength` | `number` | `undefined` | Longitud máxima de caracteres |
| `autofocus` | `boolean` | `false` | Autofocus al montar |
| `required` | `boolean` | `false` | Marcar como requerido |

## Tabla de Eventos

| Evento | Parámetros | Descripción |
|--------|-------------|-------------|
| `update:modelValue` | `(value: string)` | Se emite en input |
| `input` | `(value: string)` | Evento input nativo |
| `change` | `(value: string)` | Evento change nativo |
| `focus` | `(event: FocusEvent)` | Se emite al hacer focus |
| `blur` | `(event: FocusEvent)` | Se emite al perder focus |
| `clear` | `()` | Se emite al limpiar |
| `click:prepend` | `()` | Icono prepend clickeado |
| `click:append` | `()` | Icono append clickeado |

## Tabla de Slots

| Slot | Descripción |
|------|-------------|
| `default` | Contenido del campo (no aplicable para TextField) |

## Métodos Expuestos

El componente TextField expone los siguientes métodos vía template refs:

```vue
<script setup>
import { ref } from 'vue'

const textFieldRef = ref()

// Métodos disponibles
textFieldRef.value.focus()  // Hace focus al input
textFieldRef.value.blur()   // Quita el focus del input  
textFieldRef.value.select() // Selecciona todo el texto
</script>

<template>
  <SamTextField ref="textFieldRef" />
</template>
```

## Guía de Accesibilidad (a11y)

- **Navegación por teclado**: Completamente accesible con `Tab`, `Shift+Tab` y teclas de dirección
- **Etiquetas**: Asociación automática de etiquetas con `for` e `id`
- **Estados ARIA**: Los estados de error, disabled y required se comunican apropiadamente
- **Validación**: Los mensajes de error están asociados con el campo usando `aria-describedby`
- **Focus visible**: Indicadores de enfoque claros para navegación por teclado
- **Contraste**: Cumple con estándares WCAG AA para todos los estados

### Recomendaciones de Accesibilidad

```vue
<template>
  <!-- ✅ Bueno: Etiqueta descriptiva -->
  <SamTextField label="Dirección de correo electrónico" type="email" />
  
  <!-- ✅ Bueno: Con validación accesible -->
  <SamTextField 
    label="Contraseña" 
    type="password"
    :error="passwordError"
    required
  />
</template>
```

## Guía de Theming

### Variables CSS disponibles

```css
/* Personaliza el TextField */
.sam-text-field--custom {
  --sam-text-field-border: #your-border-color;
  --sam-text-field-focus-border: #your-focus-color;
  --sam-text-field-error-border: #your-error-color;
  --sam-text-field-bg: #your-background;
  --sam-text-field-label-color: #your-label-color;
}
```

### Elementos CSS personalizables

- `.sam-text-field`: Elemento raíz del campo
- `.sam-text-field__label`: Etiqueta del campo
- `.sam-text-field__input`: Input del campo
- `.sam-text-field__input-wrapper`: Contenedor del input
- `.sam-text-field__icon`: Iconos del campo
- `.sam-text-field__details`: Área de detalles (hint/error)
- `.sam-text-field__error`: Mensaje de error
- `.sam-text-field__hint`: Texto de ayuda
- `.sam-text-field__counter`: Contador de caracteres

### Ejemplo de Personalización

```vue
<template>
  <SamTextField 
    v-model="value"
    label="Campo personalizado"
    class="my-custom-field"
  />
</template>

<style>
.my-custom-field {
  --sam-text-field-focus-border: #ff6b35;
  --sam-text-field-label-color: #2d3748;
}

.my-custom-field .sam-text-field__input {
  border-radius: 12px;
}
</style>
```
