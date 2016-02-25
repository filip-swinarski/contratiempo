/* Custom js application for Contratiempo
 * namespace: CONTRA,
 * v. 0.1.3 25.02.2016 @filip-swinarski
 */

var CONTRA = function() {
 
    function test() {
        console.log(0);
    }

    var headings = Array.prototype.slice.call(document.querySelectorAll('.entry-title, .entry-title a')),
        logo = document.querySelector('.site-logo'),
        banners = Array.prototype.slice.call(document.querySelectorAll('.post-thumbnail')),
        containers = Array.prototype.slice.call(document.querySelectorAll('.entry-content')),
        footers = Array.prototype.slice.call(document.querySelectorAll('.entry-footer *')),
        postNav = Array.prototype.slice.call(document.querySelectorAll('.post-navigation a *')),
        postNavBtns = Array.prototype.slice.call(document.querySelectorAll('.post-navigation .nav-next, .post-navigation .nav-previous')),
        bandMembers = document.querySelector('.band-members'),
        siteFooter = document.querySelector('.site-footer .site-info');

    function animateScroll(el, dist, className, direction) {
        if (!el) return;
        var winOffset = window.scrollY,
            winHeight = window.innerHeight,
            elOffset = parseInt(el.getBoundingClientRect().top) + winOffset,
            elHeight = el.offsetHeight;
        if (elOffset > winOffset + dist && elOffset + elHeight + dist < winOffset + winHeight) {
            if (direction === 'in') 
                el.classList.add(className);
            else 
                el.classList.remove(className);
        } else {
            if (direction === 'in') 
                el.classList.remove(className);
            else 
                el.classList.add(className);
        }
    }

    function addListeners() {
        window.addEventListener('scroll', function(e) {
            headings.forEach(function(el) {
                if (el.parentNode.parentNode.querySelector('.post-thumbnail'))
                        animateScroll(el, 150, 'active', 'in');
                else
                    animateScroll(el, 50, 'active', 'in');
                animateScroll(el, 0, 'darkened', 'out');
                animateScroll(el, -10, 'lightened', 'in');
            });
            if (window.innerWidth > 524)
                animateScroll(logo, 20, 'coloured', 'out');
            else
                animateScroll(logo, 10, 'coloured', 'out');
            banners.forEach(function(el) {
                animateScroll(el, -parseInt(el.clientHeight) + 100, 'darkened', 'out');
            });
            containers.forEach(function(el) {
                animateScroll(el, -parseInt(el.clientHeight) + 100, 'darkened', 'out');
            });
            footers.forEach(function(el) {
                animateScroll(el, 20, 'darkened', 'out');
            });
            postNav.forEach(function(el) {
                animateScroll(el, 50, 'darkened', 'out');
            });
            postNavBtns.forEach(function(el) {
                animateScroll(el, -80, 'darkened', 'out');
            });
            if (bandMembers) animateScroll(bandMembers, -parseInt(bandMembers.clientHeight) + 100, 'darkened', 'out');
            animateScroll(siteFooter, -1, 'darkened', 'out');
        });
    }

    function setProperties(el, dist, className) {
        var winOffset = window.scrollY,
            winHeight = window.innerHeight,
            elOffset = parseInt(el.getBoundingClientRect().top) + winOffset,
            elHeight = el.offsetHeight;
            if (el.parentNode.parentNode.querySelector('.post-thumbnail'))
                dist = 150;
            else
                dist = 50;
        if (elOffset > winOffset + dist && elOffset + elHeight + dist < winOffset + winHeight)
            el.classList.add(className);
    }

    function initElements() {
        headings.forEach(function(el) {
            var dist;
            if (el.parentNode.parentNode.querySelector('.post-thumbnail'))
                dist = 150;
            else
                dist = 50;
            setProperties(el, dist, 'active');
        });
        banners.forEach(function(el) {
            setProperties(el, -parseInt(el.clientHeight) + 100, 'darkened');
        });
        containers.forEach(function(el) {
            setProperties(el, -parseInt(el.clientHeight) + 100, 'darkened');
        });
        footers.forEach(function(el) {
            setProperties(el, 20, 'darkened');
        });
        postNav.forEach(function(el) {
            setProperties(el, 50, 'darkened');
        });
        postNavBtns.forEach(function(el) {
            setProperties(el, -80, 'darkened');
        });
        if (bandMembers) setProperties(bandMembers, -parseInt(bandMembers.clientHeight) + 100, 'darkened');
        setProperties(siteFooter, -1, 'darkened');
    }
    
    // init
    function init() {
        
        addListeners();
        initElements();
        test();
        
    }

   init();
};

window.addEventListener('load', function() {
    CONTRA();
});
