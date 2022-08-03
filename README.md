# lazyImageJs
**Lazy load image** in javascript. Lazyloading all `img` attributte `data-src` to `src` and load only view images.

**Browser compatibility** lazyImageJs by used [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#browser_compatibility)

## Quick start lazyImageJs
- include to page:
`<script type="text/javascript" src="https://otikczech.github.io/lazyImageJs/lazy-image.min.js"></script>`

- Edit page
   - replace all occurrence
`<img src="` to `<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="`
   - or change `src` and `data-src` according to your own requirements
- Show page

### Example
Show **Image lazyload [example.html and you will see](https://otikczech.github.io/lazyImageJs/example.html) `src` transparent gif 1*1px** being replaced `data-src`

Your typical code:
`<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://picsum.photos/200" alt="image" />`

### Warning
*If write `<img ...>` without `src` and show page, the first time the display will be missing images.*

### License
Is available under the MIT license and you're free to use it for personal or commercial projects.

### Treeware
If you've recieved value we'd hugely appreciate it if you could donate to our [Ecologi forest](https://ecologi.com/otik?r=62b9a35105736ce671f890ae)
