# Sam[ComponentName]

## Descripción

[Breve descripción del propósito y uso principal del componente. Explica qué problema resuelve y en qué contextos es útil.]

## Uso Básico

<DemoBlock>
  [Ejemplo básico del componente mostrando su uso más simple]

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

// Variables reactivas necesarias para el ejemplo
</script>

<template>
  <!-- Ejemplo básico del componente -->
</template>
```

  </template>
</DemoBlock>

## Variantes

[Si el componente tiene diferentes variantes visuales, mostrar ejemplos de cada una]

<DemoBlock>
  [Ejemplos de diferentes variantes del componente]

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

// Variables para ejemplos de variantes
</script>

<template>
  <!-- Ejemplos de variantes -->
</template>
```

  </template>
</DemoBlock>

## Tamaños

[Si el componente soporta diferentes tamaños]

<DemoBlock>
  [Ejemplos de diferentes tamaños del componente]

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

// Variables para ejemplos de tamaños
</script>

<template>
  <!-- Ejemplos de tamaños -->
</template>
```

  </template>
</DemoBlock>

## Estados

[Mostrar diferentes estados del componente: disabled, loading, error, etc.]

### [Nombre del Estado]

<DemoBlock>
  [Ejemplo del estado específico]

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

// Variables para ejemplos de estados
</script>

<template>
  <!-- Ejemplos de estados -->
</template>
```

  </template>
</DemoBlock>

## Características

[Si el componente tiene características especiales, mostrarlas aquí]

### [Nombre de la Característica]

<DemoBlock>
  [Ejemplo de la característica]

  <template #code>

```vue
<script setup>
import { ref } from 'vue'
</script>

<template>
  <!-- Ejemplo de característica específica -->
</template>
```

  </template>
</DemoBlock>

## Tabla de Props

| Prop | Tipo | Valor por Defecto | Descripción |
|------|------|-------------------|-------------|
| `propName` | `PropType` | `defaultValue` | Descripción de qué hace esta prop |
| `anotherProp` | `AnotherType` | `defaultValue` | Descripción de esta prop |

## Tabla de Eventos

| Evento | Parámetros | Descripción |
|--------|-------------|-------------|
| `eventName` | `(parameter: Type)` | Descripción de cuándo se emite |
| `anotherEvent` | `(param1: Type, param2: Type)` | Descripción del evento |

## Tabla de Slots

| Slot | Descripción |
|------|-------------|
| `default` | Contenido principal del componente |
| `slotName` | Descripción del slot específico |

## Métodos Expuestos

[Si el componente expone métodos públicos vía defineExpose]

```vue
<script setup>
import { ref } from 'vue'

const componentRef = ref()

// Métodos disponibles
componentRef.value.methodName()  // Descripción del método
componentRef.value.anotherMethod(param)  // Descripción con parámetro
</script>

<template>
  <Sam[ComponentName] ref="componentRef" />
</template>
```

## Guía de Accesibilidad (a11y)

- **Navegación por teclado**: [Describir cómo funciona la navegación]
- **Roles ARIA**: [Describir roles ARIA utilizados]
- **Estados**: [Cómo se comunican los estados a tecnologías asistivas]
- **Contraste**: [Información sobre contraste de colores]
- **Focus visible**: [Cómo se muestran los indicadores de focus]

### Recomendaciones de Accesibilidad

```vue
<template>
  <!-- ✅ Bueno: Ejemplo de uso accesible -->
  <Sam[ComponentName] 
    aria-label="Descripción accesible"
    :accessibility-prop="true"
  />
  
  <!-- ❌ Evitar: Ejemplo de uso no accesible -->
  <Sam[ComponentName] 
    :without-proper-labels="true"
  />
</template>
```

## Guía de Theming

### Variables CSS disponibles

```css
/* Personaliza el componente */
.sam-[component-name]--custom {
  --sam-[component-name]-property: #your-value;
  --sam-[component-name]-another-property: #another-value;
}
```

### Elementos CSS personalizables

- `.sam-[component-name]`: Elemento raíz del componente
- `.sam-[component-name]__element`: Elemento específico
- `.sam-[component-name]__another-element`: Otro elemento del componente

### Ejemplo de Personalización

```vue
<template>
  <Sam[ComponentName] 
    class="my-custom-component"
  />
</template>

<style>
.my-custom-component {
  --sam-[component-name]-property: #custom-value;
}

.my-custom-component .sam-[component-name]__element {
  /* Estilos personalizados */
}
</style>
```

## Ejemplos Adicionales

### [Título del Ejemplo]

[Descripción del ejemplo]

<DemoBlock>
  [Código del ejemplo]

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

// Setup para el ejemplo
</script>

<template>
  <!-- Implementación del ejemplo -->
</template>
```

  </template>
</DemoBlock>

## Notas de Implementación

[Cualquier nota importante sobre la implementación, limitaciones conocidas, o consideraciones especiales para el desarrollador]

---

## Checklist para Documentación

Antes de publicar la documentación de un nuevo componente, verifica que:

- [ ] Todas las secciones obligatorias están completas
- [ ] Las props están documentadas con tipos exactos del código fuente
- [ ] Los eventos incluyen parámetros y descripciones precisas
- [ ] Los slots están documentados
- [ ] Los ejemplos funcionan correctamente con DemoBlock
- [ ] La guía de accesibilidad es específica del componente
- [ ] Las variables de theming son reales y están testadas
- [ ] El componente está agregado al sidebar de VitePress config
- [ ] Los ejemplos de código están probados
