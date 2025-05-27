# Guía para Documentar Componentes de Vue SAM

Esta guía te ayudará a añadir documentación consistente y de alta calidad para nuevos componentes en la librería Vue SAM.

## Proceso para Documentar un Nuevo Componente

### 1. Crear la Página de Documentación

1. **Copia la plantilla**: Duplica el archivo `_template-component.md` en la carpeta `docs/components/`
2. **Renombra el archivo**: Usa kebab-case que coincida con el nombre del componente
   ```
   docs/components/mi-nuevo-componente.md
   ```

### 2. Personalizar la Documentación

Sigue la plantilla y completa cada sección:

#### Secciones Obligatorias:
- **Título**: Usa el nombre exacto del componente (ej: `SamButton`)
- **Descripción**: Explica el propósito y casos de uso
- **Uso Básico**: Ejemplo simple con `DemoBlock`
- **Tabla de Props**: Props exactas del archivo TypeScript
- **Tabla de Eventos**: Eventos emitidos por el componente
- **Tabla de Slots**: Slots disponibles
- **Guía de Accesibilidad**: Específica del componente
- **Guía de Theming**: Variables CSS y elementos personalizables

#### Secciones Opcionales (según el componente):
- **Variantes**: Si tiene diferentes estilos visuales
- **Tamaños**: Si soporta múltiples tamaños
- **Estados**: disabled, loading, error, etc.
- **Características**: Funcionalidades especiales
- **Métodos Expuestos**: Si usa `defineExpose`
- **Ejemplos Adicionales**: Casos de uso complejos

### 3. Obtener Información del Código Fuente

Para documentar con precisión, revisa estos archivos:

```
src/components/[componente]/[Componente].vue    # Implementación
src/types/components.ts                         # Props y eventos TypeScript
```

#### Extraer Props:
1. Busca la interfaz del componente en `src/types/components.ts`
2. Copia las props exactas con sus tipos
3. Revisa valores por defecto en el `withDefaults()`

#### Extraer Eventos:
1. Busca la interfaz de eventos en `src/types/components.ts`
2. O revisa los `emit()` en el archivo del componente

### 4. Crear Ejemplos con DemoBlock

Usa siempre el componente `DemoBlock` para ejemplos interactivos:

```vue
<DemoBlock>
  <!-- Tu ejemplo visual aquí -->
  <SamComponente prop="value" />

  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const example = ref('')
</script>

<template>
  <SamComponente v-model="example" />
</template>
```

  </template>
</DemoBlock>
```

### 5. Registrar en el Sidebar

Añade el nuevo componente al sidebar en `docs/.vitepress/config.ts`:

```typescript
{
  text: 'API de Componentes',
  collapsed: false,
  items: [
    { text: 'SamButton', link: '/components/button' },
    { text: 'SamTextField', link: '/components/text-field' },
    { text: 'SamTuComponente', link: '/components/tu-componente' } // ← Añadir aquí
  ]
}
```

## Consejos de Buenas Prácticas

### Documentación de Props
```markdown
| Prop | Tipo | Valor por Defecto | Descripción |
|------|------|-------------------|-------------|
| `variant` | `'filled' \| 'outlined'` | `'filled'` | ✅ Tipo específico |
| `disabled` | `boolean` | `false` | ✅ Descripción clara |
```

### Ejemplos de Código
- **✅ Usa ejemplos funcionales**: Que realmente demuestren el uso
- **✅ Incluye imports necesarios**: `import { ref } from 'vue'`
- **✅ Variables reactivas**: Para componentes con v-model
- **❌ Evita ejemplos sin contexto**: Solo props sin uso real

### Accesibilidad
- Describe navegación por teclado específica del componente
- Menciona roles ARIA automáticos
- Da ejemplos de uso accesible vs no accesible

### Theming
- Solo documenta variables CSS que realmente existen
- Prueba los ejemplos de personalización
- Usa nombres de clases CSS reales del componente

## Checklist Final

Antes de completar la documentación:

- [ ] ✅ Título del componente correcto
- [ ] ✅ Descripción clara y útil
- [ ] ✅ Al menos un ejemplo básico funcional
- [ ] ✅ Props documentadas exactamente como en TypeScript
- [ ] ✅ Eventos con parámetros correctos
- [ ] ✅ Slots documentados (si los hay)
- [ ] ✅ Guía de accesibilidad específica
- [ ] ✅ Variables de theming reales y probadas
- [ ] ✅ Componente agregado al sidebar
- [ ] ✅ Todos los ejemplos probados con `npm run docs:dev`

## Comandos Útiles

```bash
# Ejecutar documentación en desarrollo
npm run docs:dev

# Construir documentación
npm run docs:build

# Preview de la documentación construida
npm run docs:preview
```

## Estructura de Archivos

```
docs/
├── .vitepress/
│   ├── config.ts           # ← Registrar componente aquí
│   └── theme/
│       └── components/
│           └── DemoBlock.vue
├── components/
│   ├── _template-component.md  # ← Plantilla base
│   ├── button.md              # ← Ejemplo: SamButton
│   ├── text-field.md          # ← Ejemplo: SamTextField
│   └── nuevo-componente.md    # ← Tu nuevo componente
└── guide/
    └── ...
```

## Recursos

- **Plantilla de componente**: `docs/_template-component.md`
- **Ejemplos existentes**: `docs/components/button.md` y `docs/components/text-field.md`
- **VitePress Docs**: https://vitepress.dev/
- **DemoBlock**: `docs/.vitepress/theme/components/DemoBlock.vue`

---

¿Tienes preguntas sobre cómo documentar un componente específico? Consulta los ejemplos existentes o revisa esta guía para asegurar consistencia en toda la documentación.
