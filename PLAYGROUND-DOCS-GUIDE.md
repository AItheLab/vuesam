# 🚀 Vue SAM - Playground vs Documentación

## 📖 **Diferencias Importantes**

### **Playground** (puerto 3000) - `npm run dev`
- **🎮 Entorno interactivo** para probar componentes
- **⚡ Hot reload** para desarrollo rápido
- **🧪 Experimentación** con props y estados
- **📱 Responsive testing**

### **Documentación** (puerto 5173) - `npm run docs:dev`
- **📚 Documentación completa** con API reference
- **✨ Ejemplos interactivos** con código fuente
- **🎨 Guías de theming** y personalización
- **♿ Información de accesibilidad**
- **📋 Tablas de props, eventos y slots**

## 🎯 **Cómo Usar Cada Uno**

### Para **Desarrollar y Probar** → Usa el Playground
```bash
npm run dev
# → http://localhost:3000
```

### Para **Documentación Completa** → Usa VitePress
```bash
npm run docs:dev  
# → http://localhost:5173
```

## 🔄 **Workflow Recomendado**

1. **🧪 Desarrollo**: Usa el playground para probar componentes rápidamente
2. **📖 Referencia**: Consulta la documentación para API completa
3. **🎨 Customización**: Revisa guías de theming en la documentación
4. **♿ Accesibilidad**: Consulta las guías de a11y en los docs

## 🌟 **Nuevas Características del Playground**

✅ **Navegación con sidebar** para fácil acceso a secciones  
✅ **Enlaces directos** a documentación específica  
✅ **Header con accesos rápidos** a GitHub y docs  
✅ **Diseño responsive** para testing móvil  
✅ **Demo interactivo** con validación en tiempo real  
✅ **Categorización clara** de todos los componentes  

## 📝 **Enlaces Rápidos**

- **Playground**: http://localhost:3000 (después de `npm run dev`)
- **Documentación**: http://localhost:5173 (después de `npm run docs:dev`)
- **SamButton Docs**: http://localhost:5173/components/button
- **SamTextField Docs**: http://localhost:5173/components/text-field

## ⚡ **Scripts Disponibles**

```bash
# Playground de desarrollo
npm run dev

# Documentación VitePress  
npm run docs:dev
npm run docs:build
npm run docs:preview

# Testing
npm run test
npm run test:ui

# Build de la librería
npm run build
```

---

**💡 Tip Profesional**: Mantén ambos corriendo en pestañas separadas durante el desarrollo para máxima productividad!
