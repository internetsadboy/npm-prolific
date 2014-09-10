### npm-prolific

Crawls npm for prolific author data (rank, author, resource)

### Usage

```javascript
'use strict';

npmProlific(function onNpmProlific (err, data) {
  if (err) throw err;
  console.log(data);
});

```

Output

```
[ { rank: '191',
    author: 'requirify-bot',
    resource: 'https://npmjs.org/~requirify-bot' },
  { rank: '74',
    author: 'sindresorhus',
    resource: 'https://npmjs.org/~sindresorhus' },
  { rank: '59',
    author: 'kgryte',
    resource: 'https://npmjs.org/~kgryte' },
  { rank: '48',
    author: 'pnidem',
    resource: 'https://npmjs.org/~pnidem' },
  { rank: '40', author: 'jhh', resource: 'https://npmjs.org/~jhh' },
  { rank: '34',
    author: 'kevva',
    resource: 'https://npmjs.org/~kevva' },
  { rank: '31',
    author: 'jonschlinkert',
    resource: 'https://npmjs.org/~jonschlinkert' },
  { rank: '29',
    author: 'jongleberry',
    resource: 'https://npmjs.org/~jongleberry' },
  { rank: '27',
    author: 'dougwilson',
    resource: 'https://npmjs.org/~dougwilson' },
  { rank: '24',
    author: 'substack',
    resource: 'https://npmjs.org/~substack' } ]
```

### installation

```$ npm install npm-prolific```

### test
```$ npm test``` 
