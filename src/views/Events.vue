<script setup>
import {ref} from 'vue'

const eventname = ref('')
const organizer = ref('')
const eventtype = ref('')
const date = ref('')
const submitted = ref(false)

function submitForm(){
    if (!eventname.value || !organizer.value || !eventtype.value || !date.value) {
        submitted.value = false
        return
    }

    console.log('EventName Added:', eventname.value, 'Organizer:', organizer.value, 'EventType:', eventtype.value, 'Date:', date.value)
    submitted.value = true
}

</script>


<template>
    <div>
        <h1>Welcome! this is the Events Page</h1>
    </div>

    <form @submit.prevent="submitForm">
        <label>Event Form</label><br>

        <label>Event Name</label>
        <input type="text" v-model="eventname" /><br>
        <label>Organizer</label>
        <input type="text" v-model="organizer" /><br>

        <label>Event Type</label>
        <select v-model="eventtype">
            <option value="Seminar">Seminar</option>
            <option value="Club Meeting">Club Meeting</option>
            <option value="Sports">Sports</option>
            <option value="Workshop">Workshop</option>
        </select>
        <br>
        <label>Date: </label>
        <input type="date" v-model="date" />
        <br>
        <button type="submit">Add Event</button>
        <p v-if="submitted">Event added successfully!</p>
        <p v-if="submitted">Event Added: {{ eventname }}<br>Organizer: {{ organizer }}<br>Type: {{ eventtype }}<br>Date: {{ date }}</p>
        
    </form>
</template>