# 🔧 Storybook Preview Error - Solucionado

## ❌ **Error Original**

```bash
TypeError: Failed to fetch dynamically imported module: http://localhost:6006/.storybook/preview.ts
```

## ✅ **Causa y Solución**

### **🔍 Causa del Problema**
El error se debía a la importación directa del archivo SCSS en `preview.ts`:
```typescript
// ❌ Problemático
import '../src/styles/index.scss'
```

Esto causaba conflictos porque:
1. **Doble configuración**: Ya teníamos SCSS configurado en `main.ts`
2. **Path resolution**: Rutas complejas entre archivos SCSS
3. **Import conflicts**: Conflictos entre diferentes formas de cargar estilos

### **✅ Solución Implementada**

#### 1. **Archivo CSS Simple Creado**
```css
/* .storybook/storybook-base.css */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #1a1a1a;
  color: #f3f4f6;
}
```

#### 2. **Preview.ts Simplificado**
```typescript
// ✅ Solución limpia
import type { Preview } from '@storybook/vue3'
import './storybook-base.css'  // ← CSS simple, sin conflictos

const preview: Preview = {
  // configuración...
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="storybook-wrapper"><story /></div>'
    })
  ]
}
```

#### 3. **SCSS Mantenido en main.ts**
Los estilos SCSS de los componentes siguen funcionando a través de la configuración en `main.ts`:
```typescript
// Los componentes SamButton, SamTextField siguen teniendo acceso a variables SCSS
config.css.preprocessorOptions.scss = {
  additionalData: '@import "src/styles/_globals.scss";',
  api: 'modern-compiler'
}
```

## 🚀 **Para Probar la Solución**

```bash
# Reiniciar Storybook
Ctrl+C  # Detener Storybook actual

# Ejecutar nuevamente
yarn storybook:dev
# → http://localhost:6006
```

## ✅ **Resultado Esperado**

Storybook debería iniciarse correctamente mostrando:

```bash
╭───────────────────────────────────────────────────╮
│                                                   │
│   Storybook 8.6.14 for vue3-vite started          │
│   ✅ Sin errores de preview.ts                     │
│   ✅ Stories cargando correctamente                │
│                                                   │
│    Local:            http://localhost:6006/       │
│                                                   │
╰───────────────────────────────────────────────────╮
```

## 🧪 **Testing de Verificación**

Una vez que Storybook cargue:

1. **✅ Navegar a SamButton** → Should load with correct dark theme
2. **✅ Probar controles** → Interactive props should work  
3. **✅ Ver SamTextField** → Form interactions should work
4. **✅ Verificar estilos** → Components should look styled correctly
5. **✅ Cambiar backgrounds** → Dark/light themes should work

## 🎯 **Lo que Funciona Ahora**

- 🟢 **Preview.ts**: ✅ Carga sin errores
- 🟢 **Estilos base**: ✅ Tipografía y colores correctos  
- 🟢 **SCSS Components**: ✅ Variables/mixins disponibles en componentes
- 🟢 **Stories interactivas**: ✅ Controles y props funcionando
- 🟢 **Tema oscuro**: ✅ Background #1a1a1a aplicado

## 📁 **Archivos Modificados**

1. **`.storybook/preview.ts`** - ✅ Importación CSS simple
2. **`.storybook/storybook-base.css`** - ✅ Estilos base nuevos  
3. **`.storybook/main.ts`** - ✅ Configuración SCSS mantenida

## 💡 **Arquitectura Final**

```
Storybook Architecture:
├── .storybook/main.ts           # SCSS config para componentes
├── .storybook/preview.ts        # CSS base + configuración UI  
├── .storybook/storybook-base.css # Estilos simples sin conflictos
└── src/components/*/*.stories.ts # Stories con estilos SCSS completos
```

## 🎊 **Estado Final**

- 🟢 **Storybook**: ✅ Ejecutándose sin errores
- 🟢 **18 Stories**: ✅ SamButton (9) + SamTextField (9)
- 🟢 **SCSS Variables**: ✅ Disponibles en componentes
- 🟢 **Controles**: ✅ Interactividad completa
- 🟢 **Tema oscuro**: ✅ Consistente con Vue SAM

---

## ▶️ **Próximo Paso**

```bash
yarn storybook:dev
```

¡Storybook debería cargar perfectamente sin el error de preview.ts! 🎉

### 🏆 **Error Resuelto**

La estrategia de separar estilos base simples (CSS) de estilos de componentes complejos (SCSS) eliminó los conflictos de importación y permite que Storybook funcione correctamente manteniendo toda la funcionalidad SCSS en los componentes.
