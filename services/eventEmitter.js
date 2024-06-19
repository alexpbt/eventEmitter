class EventEmitter {
	constructor() {
		this.events = new Map();
	}

	on(event, listener) {
		if (!this.events.has(event)) {
			this.events.set(event, []);
		}
		this.events.get(event).push(listener);

		console.log(this.events.get(event));
	}

	emit(event, ...args) {
		const listeners = this.events.get(event);

		if (listeners) {
			listeners.forEach((listener) => {
				listener(...args);
				console.log(listener);
			});
		}

		console.log(this.events.get(event));
	}

	off(event, listenerToRemove) {
		const listeners = this.events.get(event);
		if (listeners) {
			this.events.set(
				event,
				listeners.filter((listener) => listener !== listenerToRemove)
			);
		}

		console.log(this.events.get(event));
	}

	removeAllListeners(event) {
		if (event) {
			this.events.delete(event);
		} else {
			this.events.clear();
		}

		console.log(this.events.get(event));
	}
}

export { EventEmitter };
