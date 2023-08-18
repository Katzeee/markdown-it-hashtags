'use strict';
var path = require('path');
var generate = require('markdown-it-testgen');
var MarkdownIt = require('markdown-it');
var markdownItHashtag = require('../index');
const { describe, it } = require('mocha');

describe('Testing Markdown rendering', () => {
	var md;
	beforeEach(function () {
		md = MarkdownIt({
			html: true,
			langPrefix: '',
			typographer: true,
			linkify: true,
		});
	});
	it('applies markup to hashtags', function () {
		md.use(markdownItHashtag);
		generate(path.join(__dirname, 'fixtures/default.txt'), md);
	});
});
