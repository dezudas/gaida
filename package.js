Package.describe({
	name: 'gaida',
	version: '1.0.0',
	summary: 'A minimalist CSS framework on SCSS version.',
	git: 'https://github.com/dezudas/gaida.git',
	documentation: 'readme.md'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.0');
	api.addFiles([
		'dist/gaida.scss'
	], 'client');
});
