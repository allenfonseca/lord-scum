
// LAZY LOAD ===================================
// https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos--cms-26743

var youtube = document.querySelectorAll( ".youtube" );

for (var i = 0; i < youtube.length; i++) {
    // thumbnail image source.
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg"; 

    // Load the image asynchronously
    var image = new Image();
        image.src = source;
        image.addEventListener( "load", function() {
            youtube[ i ].appendChild( image );
        }( i ) );

    youtube[i].addEventListener( "click", function() {

    var iframe = document.createElement( "iframe" );

        iframe.setAttribute( "frameborder", "0" );
        iframe.setAttribute( "allowfullscreen", "" );
        iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

        this.innerHTML = "";
        this.appendChild( iframe );
    });
}

// END LAZY LOAD ================================

// READ MORE ===================================
// https://github.com/justmarkup/demos/blob/gh-pages/toggle-content/showmore/with-js/index.html

if ('querySelector' in document && 
    'addEventListener' in window) {
    var toggleButtons = document.querySelectorAll('.toggle-content');
    var fullTextWrappers = document.querySelectorAll('.fulltext');
    var fullText;
    var toggleButtonText;
    
    [].forEach.call(fullTextWrappers, function(fullTextWrapper) {
        // hide all full text on load
        fullTextWrapper.setAttribute('hidden', true);
    });
    [].forEach.call(toggleButtons, function(toggleButton) {
        // show toggle more buttons
        toggleButton.removeAttribute('hidden');
        // add listener for each button
        toggleButton.addEventListener('click', function () {
            fullTextWrapper = this.parentElement.querySelector('.fulltext');
            toggleButtonText = this.querySelector('.more');
            // change attributes and text if full text is shown/hidden
            console.log(fullTextWrapper.hasAttribute('hidden'));
            if (!fullTextWrapper.hasAttribute('hidden')) {
                toggleButtonText.innerText = 'Unroll The Scroll...';
                fullTextWrapper.setAttribute('hidden', true);
                toggleButton.setAttribute('aria-expanded', false);
            } else {
                toggleButtonText.innerText = 'Roll The Scroll...';
                fullTextWrapper.removeAttribute('hidden');
                toggleButton.setAttribute('aria-expanded', true);
            }
        });
    });
}

// END READ MORE ================================