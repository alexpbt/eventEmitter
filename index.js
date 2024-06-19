import { EventEmitter } from "./services/eventEmitter.js";

const eventEmitter = new EventEmitter();

eventEmitter.on("ready", (prop1, prop2) => {
	console.log(`This are the props of ready event: ${prop1} and ${prop2}`);
});

eventEmitter.on("kill", () => {
	console.log("killing event Listener");
});

eventEmitter.emit("ready", "large", "test");
eventEmitter.emit("kill");
