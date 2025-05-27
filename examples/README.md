# Vue SAM Examples

This directory contains examples of how to use Vue SAM in your projects.

## Basic Example

```vue
<template>
  <div class="app">
    <h1>My Vue App with Vue SAM</h1>
    
    <!-- Basic Button -->
    <SamButton @click="handleClick">
      Click me!
    </SamButton>
    
    <!-- Text Field with v-model -->
    <SamTextField
      v-model="name"
      label="Your Name"
      placeholder="Enter your name"
    />
    
    <!-- Display the input -->
    <p v-if="name">Hello, {{ name }}!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')

const handleClick = () => {
  alert('Button clicked!')
}
</script>
```

## Form Example

```vue
<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <h2>Contact Form</h2>
    
    <SamTextField
      v-model="form.name"
      label="Name"
      required
      :error="errors.name"
    />
    
    <SamTextField
      v-model="form.email"
      label="Email"
      type="email"
      required
      :error="errors.email"
    />
    
    <SamTextField
      v-model="form.message"
      label="Message"
      :max-length="200"
      hint="Tell us what you think"
      clearable
    />
    
    <div class="form-actions">
      <SamButton
        type="submit"
        color="primary"
        :loading="submitting"
      >
        Submit
      </SamButton>
      
      <SamButton
        type="button"
        variant="outlined"
        @click="resetForm"
      >
        Reset
      </SamButton>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: ''
})

const submitting = ref(false)

const validateForm = () => {
  errors.name = form.name ? '' : 'Name is required'
  errors.email = form.email ? '' : 'Email is required'
  
  if (form.email && !form.email.includes('@')) {
    errors.email = 'Please enter a valid email'
  }
  
  return !errors.name && !errors.email
}

const handleSubmit = async () => {
  if (!validateForm()) return
  
  submitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  console.log('Form submitted:', form)
  submitting.value = false
  resetForm()
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
  errors.name = ''
  errors.email = ''
}
</script>

<style scoped>
.contact-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-form > * + * {
  margin-top: 1.5rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
```

## Theme Customization Example

```vue
<template>
  <div class="themed-app">
    <SamButton
      @click="toggleTheme"
      variant="tonal"
      icon="fas fa-moon"
    >
      {{ isDark ? 'Light Mode' : 'Dark Mode' }}
    </SamButton>
    
    <!-- Your app content -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

onMounted(() => {
  updateTheme()
})
</script>

<style>
/* Light theme overrides */
[data-theme="light"] {
  --sam-color-background: #ffffff;
  --sam-color-background-secondary: #f9fafb;
  --sam-color-surface: #ffffff;
  --sam-color-text-primary: #111827;
  --sam-color-text-secondary: #6b7280;
  --sam-color-border: #e5e7eb;
}
</style>
```

## Advanced Component Composition

```vue
<template>
  <div class="user-card">
    <div class="user-card__header">
      <h3>User Profile</h3>
    </div>
    
    <div class="user-card__content">
      <SamTextField
        v-model="user.name"
        label="Name"
        prepend-icon="fas fa-user"
        :readonly="!editing"
      />
      
      <SamTextField
        v-model="user.email"
        label="Email"
        type="email"
        prepend-icon="fas fa-envelope"
        :readonly="!editing"
      />
      
      <SamTextField
        v-model="user.phone"
        label="Phone"
        type="tel"
        prepend-icon="fas fa-phone"
        :readonly="!editing"
      />
    </div>
    
    <div class="user-card__actions">
      <template v-if="!editing">
        <SamButton
          color="primary"
          icon="fas fa-edit"
          @click="editing = true"
        >
          Edit Profile
        </SamButton>
      </template>
      
      <template v-else>
        <SamButton
          color="success"
          icon="fas fa-save"
          @click="saveProfile"
        >
          Save
        </SamButton>
        
        <SamButton
          variant="outlined"
          @click="cancelEdit"
        >
          Cancel
        </SamButton>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const editing = ref(false)

const user = reactive({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1 234 567 8900'
})

const originalUser = { ...user }

const saveProfile = () => {
  // Save logic here
  console.log('Saving profile:', user)
  editing.value = false
}

const cancelEdit = () => {
  Object.assign(user, originalUser)
  editing.value = false
}
</script>

<style scoped>
.user-card {
  max-width: 400px;
  background: var(--sam-color-surface);
  border: 1px solid var(--sam-color-border);
  border-radius: var(--sam-radius-base);
  overflow: hidden;
}

.user-card__header {
  padding: 1rem 1.5rem;
  background: var(--sam-color-background-secondary);
  border-bottom: 1px solid var(--sam-color-border);
}

.user-card__content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.user-card__actions {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--sam-color-border);
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}
</style>
```
