<script setup>
import { RouterView } from 'vue-router'
import {ref} from 'vue'

const eventname = ref('')
const organizer = ref('')
const eventtype = ref('')
const date = ref('')

function submitForm(){
    console.log('EventName Added:', eventname.value, 'Organizer:', organizer.value, 'EventType:', eventtype.value, 'Date:', date.value)
}

</script>


<template>
    <div>
        <h1>Welcome! this is the Events Page</h1>
    </div>

    <form @submit.prevent="submitForm">
        <label>Event Form</label>
        <input type="text" v-model="eventname" /><br>
        <input type="text" v-model="organizer" /><br>
        <select v-model="eventtype">
            <option value="Seminar">Seminar</option>
            <option value="Club Meeting">Club Meeting</option>
            <option value="Sports">Sports</option>
            <option value="Workshop">Workshop</option>
        </select>
        <br>
        <input type="date" v-model="date" />
        <br>
        <button type="submit">Add Event</button>
    </form>
</template>