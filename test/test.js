'use strict';
var assert = require('assert');
var fs = require('fs');
var MarkdownIt = require('markdown-it');
var markdownItHashtag = require('../index');
const { describe, it } = require('mocha');

var md = new MarkdownIt();
md.use(markdownItHashtag, {});
// console.log(md.render('#tag123'));

describe('Testing Markdown rendering', () => {
	it('Parses correctly with default settings', (done) => {
		// var md = new MarkdownIt();
		// md.use(markdownItHashtag);
		// assert.equal(adjustEOL(md.render('')), '<span class="hashtag">tag123</span>');
		done();
	});
});
