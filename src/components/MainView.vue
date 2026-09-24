<script setup>
import { ref, watch } from 'vue'
import EventForm from './EventForm.vue'
import EventList from './EventList.vue'

const savedEvent = localStorage.getItem('events')
const events = ref(savedEvent ? JSON.parse(savedEvent) : [])

watch(
  events,
  (updatedEvents) => {
    localStorage.setItem('events', JSON.stringify(updatedEvents))
  },
  { deep: true },
)

function handleEventReceived(message) {
  events.value.push(message)
}
</script>

<template>
  <EventForm @submit="handleEventReceived" />
  <EventList :events="events" />
</template> 