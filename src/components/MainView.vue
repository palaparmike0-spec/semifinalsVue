<script setup>
import EventForm from './components/EventForm.vue'
import EventList from './components/EventList.vue'

function handleEventReceived(message) {
  console.log('Event submitted:', message)
}
</script>

<template>
  <EventForm />
  <EventList @submit="handleEventReceived" />
</template> 