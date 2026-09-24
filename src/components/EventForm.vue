<script setup>
import {ref} from 'vue'
import Events from './views/Events.vue'

const props = defineProps({
    eventname: String,
    organizer: String,
    eventtype: String,
    date: String,
    attendance: Boolean
})

</script>

<template>
 <div>
    <p>Event Name: {{ props.eventname }}</p>
    <p>Organizer: {{ props.organizer }}</p>
    <p>Event Type: {{ props.eventtype }}</p>
    <p>Date: {{ props.date }}</p>
    <p v-if="props.attendance">Attended: {{ props.attendance }}</p>
 </div>
</template>