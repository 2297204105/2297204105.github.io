(function(window){
    let colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    let isDark = colorScheme.matches;
    colorScheme.addEventListener('change', event => {
        if (event.matches) {
            //dark mode
        } else {
            //light mode
        }
    });
})(window);