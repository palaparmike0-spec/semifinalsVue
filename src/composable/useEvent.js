import { ref } from 'vue'

 export function useEvent() {
 	const events = ref([])

 	function addEvent(event) {
     	events.value.push(event)
 	}

 	function removeEvent(id) {
     	events.value = events.value.filter(
         	record => record.id !== id
     	)
 	}

 	return {
     	events,
     	addEvent,
     	removeEvent
 	}
 }