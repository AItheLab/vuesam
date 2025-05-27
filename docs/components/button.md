# SamButton

## Descripción

El componente SamButton se utiliza para desencadenar acciones y navegar a través de tu aplicación. Proporciona múltiples variantes, colores, tamaños y estados para adaptarse a diferentes contextos de uso.

## Uso Básico

<DemoBlock>
  <SamButton>Default Button</SamButton>
  <SamButton color="primary">Primary</SamButton>
  <SamButton color="secondary">Secondary</SamButton>
  <SamButton color="success">Success</SamButton>
  <SamButton color="warning">Warning</SamButton>
  <SamButton color="error">Error</SamButton>
  <SamButton color="info">Info</SamButton>

  <template #code>

```vue
<template>
  <SamButton>Default Button</SamButton>
  <SamButton color="primary">Primary</SamButton>
  <SamButton color="secondary">Secondary</SamButton>
  <SamButton color="success">Success</SamButton>
  <SamButton color="warning">Warning</SamButton>
  <SamButton color="error">Error</SamButton>
  <SamButton color="info">Info</SamButton>
</template>
```

  </template>
</DemoBlock>

## Variants

Vue SAM provides four button variants:

<DemoBlock>
  <SamButton variant="filled">Filled</SamButton>
  <SamButton variant="outlined">Outlined</SamButton>
  <SamButton variant="text">Text</SamButton>
  <SamButton variant="tonal">Tonal</SamButton>

  <template #code>

```vue
<template>
  <SamButton variant="filled">Filled</SamButton>
  <SamButton variant="outlined">Outlined</SamButton>
  <SamButton variant="text">Text</SamButton>
  <SamButton variant="tonal">Tonal</SamButton>
</template>
```

  </template>
</DemoBlock>

## Sizes

Buttons come in five different sizes:

<DemoBlock>
  <SamButton size="xs">Extra Small</SamButton>
  <SamButton size="sm">Small</SamButton>
  <SamButton size="md">Medium</SamButton>
  <SamButton size="lg">Large</SamButton>
  <SamButton size="xl">Extra Large</SamButton>

  <template #code>

```vue
<template>
  <SamButton size="xs">Extra Small</SamButton>
  <SamButton size="sm">Small</SamButton>
  <SamButton size="md">Medium</SamButton>
  <SamButton size="lg">Large</SamButton>
  <SamButton size="xl">Extra Large</SamButton>
</template>
```

  </template>
</DemoBlock>

## States

### Disabled State

<DemoBlock>
  <SamButton disabled>Disabled</SamButton>
  <SamButton color="primary" disabled>Disabled Primary</SamButton>
  <SamButton variant="outlined" disabled>Disabled Outlined</SamButton>

  <template #code>

```vue
<template>
  <SamButton disabled>Disabled</SamButton>
  <SamButton color="primary" disabled>Disabled Primary</SamButton>
  <SamButton variant="outlined" disabled>Disabled Outlined</SamButton>
</template>
```

  </template>
</DemoBlock>

### Loading State

<DemoBlock>
  <SamButton loading>Loading</SamButton>
  <SamButton color="primary" loading>Loading Primary</SamButton>
  <SamButton variant="outlined" loading>Loading Outlined</SamButton>

  <template #code>

```vue
<template>
  <SamButton loading>Loading</SamButton>
  <SamButton color="primary" loading>Loading Primary</SamButton>
  <SamButton variant="outlined" loading>Loading Outlined</SamButton>
</template>
```

  </template>
</DemoBlock>

## Tabla de Props

| Prop | Tipo | Valor por Defecto | Descripción |
|------|------|-------------------|-------------|
| `variant` | `'filled' \| 'outlined' \| 'text' \| 'tonal'` | `'filled'` | Variante visual del botón |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | Tema de color del botón |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del botón |
| `disabled` | `boolean` | `false` | Deshabilita el botón |
| `loading` | `boolean` | `false` | Muestra el indicador de carga |
| `fullWidth` | `boolean` | `false` | Hace el botón de ancho completo |
| `rounded` | `boolean` | `false` | Usa esquinas completamente redondeadas |
| `icon` | `string` | `undefined` | Clase de icono a mostrar |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Posición del icono |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Tipo de botón HTML |
| `href` | `string` | `undefined` | Renderiza como enlace con href |
| `to` | `string \| object` | `undefined` | Enlace de Vue Router |
| `tag` | `string` | `'button'` | Etiqueta HTML personalizada |

## Tabla de Eventos

| Evento | Parámetros | Descripción |
|--------|-------------|---------------|
| `click` | `(event: MouseEvent)` | Se emite cuando se hace clic en el botón |

## Tabla de Slots

| Slot | Descripción |
|------|---------------|
| `default` | Contenido del botón |

## Guía de Accesibilidad (a11y)

- **Navegación por teclado**: El componente es completamente accesible por teclado usando `Tab` y `Space/Enter`
- **Roles ARIA**: Utiliza automáticamente el rol `button` apropiado
- **Estados**: Los estados `disabled` y `loading` se comunican apropiadamente a tecnologías asistivas
- **Contraste**: Todos los colores predefinidos cumplen con los estándares WCAG AA
- **Focus visible**: Incluye indicadores de enfoque visibles para navegación por teclado

## Guía de Theming

### Variables CSS disponibles

```css
/* Personaliza los colores del botón */
.sam-button--custom {
  --sam-button-bg: #your-color;
  --sam-button-color: #your-text-color;
  --sam-button-border: #your-border-color;
  --sam-button-hover-bg: #your-hover-color;
}
```

### Elementos CSS personalizables

- `.sam-button`: Elemento raíz del botón
- `.sam-button__content`: Contenedor del contenido
- `.sam-button__icon`: Iconos del botón
- `.sam-button__loader`: Indicador de carga

## Examples

### Button with Icons

Icons can be added using icon fonts (like Font Awesome):

<DemoBlock>
  <SamButton icon="fas fa-save">Save</SamButton>
  <SamButton icon="fas fa-trash" color="error">Delete</SamButton>
  <SamButton icon="fas fa-arrow-right" icon-position="right">Next</SamButton>

  <template #code>

```vue
<template>
  <SamButton icon="fas fa-save">Save</SamButton>
  <SamButton icon="fas fa-trash" color="error">Delete</SamButton>
  <SamButton icon="fas fa-arrow-right" icon-position="right">Next</SamButton>
</template>
```

  </template>
</DemoBlock>

### Full Width Buttons

<DemoBlock>
  <div style="width: 100%; max-width: 300px;">
    <SamButton full-width>Full Width Button</SamButton>
    <br>
    <SamButton full-width color="secondary" variant="outlined">Full Width Outlined</SamButton>
  </div>

  <template #code>

```vue
<template>
  <SamButton full-width>Full Width Button</SamButton>
  <SamButton full-width color="secondary" variant="outlined">
    Full Width Outlined
  </SamButton>
</template>
```

  </template>
</DemoBlock>

### Rounded Buttons

<DemoBlock>
  <SamButton rounded>Rounded</SamButton>
  <SamButton rounded color="secondary">Rounded Secondary</SamButton>
  <SamButton rounded variant="outlined">Rounded Outlined</SamButton>

  <template #code>

```vue
<template>
  <SamButton rounded>Rounded</SamButton>
  <SamButton rounded color="secondary">Rounded Secondary</SamButton>
  <SamButton rounded variant="outlined">Rounded Outlined</SamButton>
</template>
```

  </template>
</DemoBlock>
