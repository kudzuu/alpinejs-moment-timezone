# Alpine.js plugin Moment-Timezone

An Alpine JS **Moment  Plugin** lets you programmatically monitor changes to the size of the screen

## Instalation
### Via script include
```html
<script src="/js/moment.min.js" defer></script>
<script src="/js/alpine.js" defer></script>
```

### Via CDN
```html
<!-- Alpine Plugins -->
<script src="https://unpkg.com/@kudzu/alpinejs-moment-timezone@1.x.x/dist/moment.min.js" defer></script>
<!-- Alpine Core -->
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### Via NPM

```bash
npm i @kudzu/alpinejs-moment-timezone
```

```javascript
import Alpine from 'alpinejs'

import moment from '@kudzu/alpinejs-moment-timezone'
Alpine.plugin(moment)

window.Alpine = Alpine
window.Alpine.start()
```

# $moment()
Magic Helper
```html
<div x-data x-text="$moment().tz('Asia/Bangkok).format('LTS')"></div>
```
