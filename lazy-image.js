/**
 * @github : https://github.com/OtikCzech/lazyImageJs
 */

document.addEventListener("DOMContentLoaded", function () {
    let IO;
    try {
        IO = new IntersectionObserver(entries => {
            entries.forEach(function (entry) {
                const lazyImage = entry.target;
                let setLazyImageSrc = function () {
                    if (lazyImage.dataset && lazyImage.dataset.src) {
                        if (!lazyImage.src || lazyImage.src !== lazyImage.dataset.src) {
                            lazyImage.src = lazyImage.dataset.src;
                        }
                    }
                }
                if (typeof entry.isIntersecting !== "undefined") {
                    if (entry.isIntersecting) {
                        setLazyImageSrc();
                    }
                } else {
                    setLazyImageSrc();
                }
            });
        });

        [...document.querySelectorAll('img[data-src]')].forEach(function (e) {
            IO.observe(e);
        });
    } catch (err) {
        console.log('lazyImageJs: ', err);
    }
});
