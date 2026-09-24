import { computed, ref } from 'vue'

export function useEvent() {
	const events = ref([])

	const eventCount = computed(() => events.value.length)
	const hasEvents = computed(() => eventCount.value > 0)

	function addEvent(event) {
		events.value.push(event)
	}

	function updateEvent(id, changes) {
		const event = events.value.find(record => record.id === id)

		if (event) {
			Object.assign(event, changes)
		}
	}

	function removeEvent(id) {
		events.value = events.value.filter(record => record.id !== id)
	}

	function clearEvents() {
		events.value = []
	}

	return {
		events,
		eventCount,
		hasEvents,
		addEvent,
		updateEvent,
		removeEvent,
		clearEvents
	}
}