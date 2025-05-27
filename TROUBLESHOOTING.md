# 🛠️ Troubleshooting - Vue SAM

## ❌ Error: "Storybook Preview Module Failed to Fetch"

### Problema
```bash
TypeError: Failed to fetch dynamically imported module: http://localhost:6006/.storybook/preview.ts
```

### ✅ Solución Aplicada

**Causa**: Importación directa de SCSS en preview.ts causaba conflictos con configuración de main.ts.

#### 1. **CSS Simple para Preview**
```typescript
// .storybook/preview.ts
import './storybook-base.css'  // ← CSS simple sin conflictos
```

#### 2. **Archivo CSS Base Creado**
```css
/* .storybook/storybook-base.css */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #1a1a1a;
  color: #f3f4f6;
}
```

#### 3. **SCSS Mantenido en main.ts**
```typescript
// Los componentes siguen teniendo acceso a variables SCSS
config.css.preprocessorOptions.scss = {
  additionalData: '@import "src/styles/_globals.scss";'
}
```

### 🔄 **Aplicar Cambios**
```bash
Ctrl+C                    # Detener Storybook
yarn storybook:dev        # ✅ Sin errores de preview
```

📚 **Guía detallada**: [STORYBOOK-PREVIEW-FIX.md](./STORYBOOK-PREVIEW-FIX.md)

---

## ❌ Error: "Storybook SCSS Path Resolution"

### Problema
```bash
[sass] Can't find stylesheet to import.
@import "styles/_globals.scss";
```

### ✅ Solución Aplicada

**Causa**: Storybook ejecuta desde contexto diferente al playground, necesita paths ajustados.

#### 1. **Configuración de Storybook ajustada**
```typescript
// .storybook/main.ts
config.css.preprocessorOptions.scss = {
  additionalData: '@import "src/styles/_globals.scss";', // ← Ruta ajustada
  api: 'modern-compiler',
  includePaths: [resolve(__dirname, '../')] // ← Añadido includePaths
}
```

#### 2. **Package.json Export Conditions**
```json
{
  "exports": {
    ".": {
      "types": "./dist/types/index.d.ts", // ← Primero
      "import": "./dist/vue-sam.es.js",
      "require": "./dist/vue-sam.umd.js"
    }
  }
}
```

#### 3. **Migración a @use (elimina deprecation warnings)**
```scss
// src/styles/_globals.scss
@use '../styles/variables.scss' as *;
@use '../styles/mixins.scss' as *;
```

### 🔄 **Aplicar Cambios**
```bash
Ctrl+C                    # Detener Storybook
yarn storybook:dev        # ✅ Sin errores
```

📚 **Guía detallada**: [STORYBOOK-SCSS-FIX.md](./STORYBOOK-SCSS-FIX.md)

---

## ❌ Warning: "Sass Legacy JS API" (Deprecation)

### Problema
```bash
Deprecation Warning [legacy-js-api]: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
More info: https://sass-lang.com/d/legacy-js-api
```

### ✅ Solución Aplicada

**Causa**: Vite usaba por defecto la legacy JS API de Sass que será removida.

#### 1. **API Moderna en vite.config.ts**
```typescript
css: {
  preprocessorOptions: {
    scss: {
      additionalData: scssAdditionalData,
      api: 'modern-compiler' // ← Usa API moderna
    },
  },
}
```

#### 2. **API Moderna en VitePress Config**
```typescript
vite: {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scssData,
        api: 'modern-compiler' // ← Elimina warnings
      },
    },
  }
}
```

#### 3. **Sass Actualizado**
```json
{
  "sass": "^1.77.8" // Actualizado desde ^1.70.0
}
```

### 🔄 **Aplicar Cambios**
```bash
yarn install          # Actualiza Sass
rm -rf node_modules/.vite  # Limpia caché
yarn test            # ✅ Sin warnings
```

---

## ❌ Error: "Undefined mixin" en Componentes Vue

### Problema
```
[plugin:vite:css] [sass] Undefined mixin.
  ╷
3 │   @include sam-component;
  │   ^^^^^^^^^^^^^^^^^^^^^^
  ╵
  src/components/text-field/SamTextField.vue 3:3  root stylesheet
```

### ✅ Solución Aplicada

**Causa**: Los componentes Vue individuales no tenían acceso a mixins y variables SCSS.

#### 1. **Configuración Unificada en vite.config.ts**
```typescript
// SCSS global imports para componentes Vue
const scssAdditionalData = `@import "${resolve(__dirname, 'src/styles/_globals.scss')}";
`

export default defineConfig(({ mode }) => {
  // Tanto desarrollo como producción usan la misma configuración
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scssAdditionalData  // ← Inyectado en todos los componentes
      },
    },
  },
})
```

#### 2. **VitePress Config Actualizado**
```typescript
// docs/.vitepress/config.ts
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${resolve(__dirname, '../src/styles/_globals.scss')}";`
        },
      },
    },
  }
})
```

### 🔄 **Reinicio Necesario**

```bash
# 1. Detén todos los servidores
Ctrl+C

# 2. Limpia el caché de Vite
rm -rf node_modules/.vite

# 3. Reinstala dependencias (opcional)
npm install

# 4. Reinicia el playground
npm run dev
# → http://localhost:3000

# 5. O la documentación
npm run docs:dev  
# → http://localhost:5173
```

### ✅ **Resultado**

✅ **Mixins disponibles** en todos los componentes Vue  
✅ **Variables SCSS globales** accesibles  
✅ **Funciones helper** (`sam-color()`, `sam-spacing()`) funcionando  
✅ **Playground y Documentación** sin errores SCSS  

### 🧪 **Mixins Ahora Disponibles**

```scss
// En cualquier componente Vue
.sam-component {
  @include sam-component;        // ✅ Funciona
  @include sam-button-base;      // ✅ Funciona  
  @include sam-focus-ring;       // ✅ Funciona
  @include sam-transition((color)); // ✅ Funciona
  
  // Variables también disponibles
  color: sam-color('primary');   // ✅ Funciona
  padding: sam-spacing('md');    // ✅ Funciona
}
```

---

## ❌ Error: "Undefined variable" en SCSS

### Problema
```
Plugin: vite:css
Error: Undefined variable.
   ╷
20 │   font-family: $sam-font-family;
   │                ^^^^^^^^^^^^^^^^
   ╵
  src/styles/index.scss 20:16  root stylesheet
```

### ✅ Solución Aplicada

#### 1. **Vite Config - Paths Absolutos**
Cambiamos los paths relativos por absolutos en `vite.config.ts`:

```typescript
// ❌ Antes (ruta relativa)
additionalData: `@import "./src/styles/_globals.scss";`

// ✅ Después (ruta absoluta)
additionalData: `@import "${resolve(__dirname, 'src/styles/_globals.scss')}";`
```

#### 2. **Variables SCSS Verificadas**
Confirmamos que las variables están en `src/styles/variables.scss`:

```scss
$sam-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
$sam-font-sizes: (
  'xs': 12px,
  'sm': 14px,
  'base': 16px,
  // ...
);
```

#### 3. **Importación Global Configurada**
El archivo `_globals.scss` importa correctamente:

```scss
@import './variables.scss';
@import './mixins.scss';
```

#### 4. **Estilos en Index Principal**
El `src/index.ts` importa los estilos:

```typescript
import './styles/index.scss'
```

### 🔄 **Cómo Reiniciar Después de Cambios**

```bash
# Detén el servidor de desarrollo
Ctrl+C

# Limpia cache si es necesario
rm -rf node_modules/.vite

# Reinicia
npm run dev
```

### 🧪 **Testing de Variables**

Puedes probar que las variables funcionan usando `src/styles/_test-vars.scss`:

```scss
.test-vars {
  font-family: $sam-font-family;
  color: sam-color('text-primary');
  background: sam-color('background');
}
```

### 📁 **Estructura de Archivos Correcta**

```
src/styles/
├── _globals.scss       # ← Importa variables y mixins
├── variables.scss      # ← Define todas las variables
├── mixins.scss        # ← Define todos los mixins
├── index.scss         # ← Estilos principales
└── _test-vars.scss    # ← Para testing de variables
```

### ⚠️ **Errores Comunes**

1. **Path incorrecto en additionalData**: Usar rutas relativas en lugar de absolutas
2. **Cache de Vite**: No reiniciar después de cambios en config
3. **Import circular**: Importar _globals.scss dentro de variables.scss
4. **Variables no definidas**: Usar variables antes de importar _globals.scss

### 🚀 **Verificación Final**

Después de aplicar las correcciones:

1. ✅ `npm run dev` funciona sin errores
2. ✅ Variables SCSS disponibles globalmente
3. ✅ Componentes usan las variables correctamente
4. ✅ Documentación funciona con `npm run docs:dev`

---

## 📞 **Si Persiste el Error**

1. Limpia completamente:
   ```bash
   rm -rf node_modules
   rm -rf node_modules/.vite
   npm install
   ```

2. Verifica que tengas la última versión de Sass:
   ```bash
   npm list sass
   ```

3. Revisa que todos los archivos SCSS usen la sintaxis correcta

### 🎯 **Estado Actual**
- ✅ Configuración arreglada
- ✅ Variables SCSS funcionando
- ✅ Playground operativo
- ✅ Documentación funcionando
