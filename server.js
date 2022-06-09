import express from 'express'
import { renderToString } from 'vue/server-renderer'
import { createApp, createHooksApp } from './app.js'

const server = express()
server.use(express.static('.'))

server.get('/', (req, res) => {
	const app = createApp();

	renderToString(app).then((html) => {
		res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>Vue SSR Example</title>
				<script type="importmap">
					{
						"imports": {
							"vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
						}
					}
				</script>
				<script type="module" src="/client.js"></script>
			</head>
			<body>
				<div id="app">${html}</div>
			</body>
		</html>
		`);
	});
});

server.get('/hooks', (req, res) => {
	const app = createHooksApp();
	const context = { message: 'This message from Server' };

	renderToString(app, context).then((html) => {
		res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>Vue SSR Hooks</title>
				<script type="importmap">
					{
						"imports": {
							"vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
						}
					}
				</script>
				<script>
					window.context = ${JSON.stringify(context)}
				</script>
				<script type="module" src="/hooks-client.js"></script>
			</head>
			<body>
				<div id="app">${html}</div>
			</body>
		</html>
		`);
	})
});

server.listen(3000, () => {
	console.log('ready');
});
