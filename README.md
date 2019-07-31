# Gzip test for optional chaining alternatives
In response to [a post on dev.to](https://dev.to/slashgear_/optional-chaining-trap-3820) claiming Babel's transpiled code would add excessive size to bundles, [my comment saying gzip compression would solve that](https://dev.to/woubuc/comment/di7g), and [the author's subsequent response stating it would still be excessive](https://dev.to/slashgear_/comment/di81), I decided to set up a quick-and-dirty, not-at-all-scientific test case to see how much the difference actually is.

## The files
- `original.js` - The code as a developer would write it
- `bundles/babel.js` - The code as transpiled by Babel (through babel's [online RELP](https://babeljs.io/en/repl))
- `bundles/lodash.js` - The code with Lodash's `get` function
- `gzip.js` - Simple script to create gzip versions of both bundle files

## The Results
Running `node gzip.js` creates the gzipped files.

Running `ls -l` in the `bundles` directory gives us this:
```
-rw-r--r-- 1 Wouter 197121 1684 Jul 31 10:38 babel.js
-rw-r--r-- 1 Wouter 197121  351 Jul 31 10:38 babel.js.gz
-rw-r--r-- 1 Wouter 197121  881 Jul 31 10:38 lodash.js
-rw-r--r-- 1 Wouter 197121  361 Jul 31 10:38 lodash.js.gz
```

From this, we can see:
- The Babel file is much larger than the Lodash file (however: see my note on Lodash below)
- The gzipped Babel file is slightly smaller than the gzipped Lodash file, meaning it's compressied much more.

## A note on Lodash.get
`lodash.get` actually needs a lot more logic than this, because it uses several other internal Lodash functions. See [the `lodash.get` package source](https://github.com/lodash/lodash/blob/4.4.2-npm-packages/lodash.get/index.js) for the actual size of this function.

I've only kept the body of the main `get` function, because I assume it's possible to reduce the total bundle size of the function and it wouldn't be fair to Lodash at all if I included the whole thing.