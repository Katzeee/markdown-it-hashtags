'use strict';
var isSpace = require('markdown-it/lib/common/utils').isSpace

module.exports = function hashtag_plugin(md, options) {
	options = options || {};
	const HASHTAG_RE = options.HASHTAG_RE || /(^#[a-z]+[a-z0-9/\-]*)[\s]?/i;
	function hashtag(state, silent) {
		var token,
			pos = state.pos,
			max = state.posMax,
			matches;

		if (state.src.charCodeAt(pos) !== 0x23 /* # */) return false;

		if (pos !== 0 && !isSpace(state.src.charCodeAt(pos - 1))) return false;

		// '#' at the end of the inline block
		if (pos >= max) return false;

		matches = state.src.slice(pos).match(HASHTAG_RE);
		if (matches) {
			state.pos += matches[0].length;
			// pos =
			if (!silent) {
				token = state.push('hashtag_open', 'span', 1);
				token.attrs = [['class', 'hashtag']];
				token = state.push('text', '', 0);
				token.content = matches[1];
				token = state.push('hashtag_close', 'span', -1);
			}
			return true;
		}
		return false;
	}

	md.inline.ruler.after('entity', 'hashtag', hashtag);
};
