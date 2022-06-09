// app.js (shared between server and client)

import { createSSRApp, ref, onMounted, useSSRContext } from 'vue'

export function createApp() {
	return createSSRApp({
		data: () => ({ count: 1 }),
		template: `<button @click="count++">{{ count }}</button>`
	})
}

export function createHooksApp() {
	return createSSRApp({
		setup() {
			const context = ref(null);

			if (typeof window === 'undefined') {
				context.value = useSSRContext();
				console.log({ context: context.value });
			}

			const count = ref(0);
			function increment() { count.value++; }
			const decrement = () => { count.value--; };

			onMounted(() => {
				increment();
			});

			return { count, increment, decrement, context };
		},
		template: `
			<div>
				<button @click="decrement"> - </button>
				{{ count }}
				<button @click="increment"> + </button>
				<hr>
				<p>{{ context.message }}</p>
			</div>`
	});
}
