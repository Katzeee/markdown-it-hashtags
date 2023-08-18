# markdown-it-hashtags
hashtag plugin for markdown-it markdown parser

Render `#hashtag1/hashtag2` to `<p><span class="hashtag">#hashtag1/hashtag2</span></p>`

# Use

```javascript
var MarkdownIt = require('markdown-it');
var md_hashtag =require('markdown-it-hashtag');
var md = MarkdownIt().use(md_hashtag);
md.render('#hashtag'); 
```
