<script setup>
const emits = defineEmits(['submit'])

function handleSubmit() {
  emits('submit', 'Event Submited')
}
</script>
<template>
   <div>
     <button @click="handleSubmit">Submit Event</button>
   </div>
</template>