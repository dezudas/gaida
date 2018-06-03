const test = require('ava')
const fs = require('fs')
const path = require('path')

let dist = path.join(__dirname, '../../dist')

test.before('`dist` path should be created', t => {
	t.true(fs.lstatSync(dist).isDirectory())
})

test('`gaida.css` should be created', t => {
	fs.readdirSync(dist).map(file => {
		if (file === 'gaida.css') t.is(file, 'gaida.css')
	})
})

test('`gaida.min.css` should be created', t => {
	fs.readdirSync(dist).map(file => {
		if (file === 'gaida.min.css') t.is(file, 'gaida.min.css')
	})
})

test('`gaida.css.map` should be created', t => {
	fs.readdirSync(dist).map(file => {
		if (file === 'gaida.css.map') t.is(file, 'gaida.css.map')
	})
})

test('`gaida.min.css.map` should be created', t => {
	fs.readdirSync(dist).map(file => {
		if (file === 'gaida.min.css.map') t.is(file, 'gaida.min.css.map')
	})
})
