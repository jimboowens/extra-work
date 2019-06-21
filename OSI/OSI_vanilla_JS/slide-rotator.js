var slideRotator = function (options) {
    var me = this;
    me.Slides = options.container.find("#slider-text > div");
	me.Images = options.container.find("#slider-images > img");

    if (!me.Slides.length || !me.Images.length) {
        return;
    }

    this.Init = function () {
        me.SlideContainer = options.container;
        me.CurrentSlide = me.Slides.first();
		me.CurrentImage = me.Images.first();
        me.RotateInterval = options.auto/*millisecs*/; // how long to wait between rotations, in milliseconds
        me.InactivityTimeout = 10/*secs*/ * 1000; // the time to wait after the user has mouseout and to resume the animation, in milliseconds, ORIG was 20 seconds

        me.IntervalKey = null;
        me.TimeoutKey = null;

        me.BindNavigationControls();

        // setup event listening for enabling/disabling animation
        me.SlideContainer.hoverIntent({
            over: function () { me.DisableAnimation(); },
            out: function () { me.EnableAnimation(); }
        });
    };

    me.BindNavigationControls = function () {
        me.NextButton = me.SlideContainer.find("#slider-nav-right");
		me.PrevButton = me.SlideContainer.find("#slider-nav-left");
		
		me.NextButton.click(function () {
            me.ShowNext();
            me.DisableAnimation();
            me.EnableAnimation();
            jQuery(this).blur();
            return false;
        });

        me.PrevButton.click(function () {
            me.ShowPrevious();
            me.DisableAnimation();
            me.EnableAnimation();
            jQuery(this).blur();
            return false;
        });
    };

    me.SetSlide = function (newSlide, newImage) { // check
        var currentSlide = me.SlideContainer.find(".CurrentSlide");
		var currentImage = me.SlideContainer.find(".CurrentImage");
		
        currentSlide.fadeOut(500, function () {
            currentSlide.removeClass("CurrentSlide");
			newSlide.fadeIn(500).addClass("CurrentSlide");
        });
		
		currentImage.fadeOut(500, function () {
            currentImage.removeClass("CurrentImage");
			newImage.fadeIn(500).addClass("CurrentImage");
        });
		
        // set new currents
        me.CurrentSlide = newSlide;
		me.CurrentImage = newImage;
    };

    // set the next feature
    me.ShowNext = function () {
        // get next element
        var nextSlide = me.CurrentSlide.next("div");
        if (!nextSlide || !nextSlide.length) {
            nextSlide = me.Slides.first();
        }
		
		var nextImage = me.CurrentImage.next("img");
		if (!nextImage || !nextImage.length) {
			nextImage = me.Images.first();
		}

        // set as current
        me.SetSlide(nextSlide, nextImage);
    };

    // set the previous feature
    me.ShowPrevious = function () {
        var prevSlide = me.CurrentSlide.prev("div");
        if (!prevSlide || !prevSlide.length) {
            prevSlide = me.Slides.last();
        }
		
		var prevImage = me.CurrentImage.prev("img");
		if (!prevImage || !prevImage.length) {
			prevImage = me.Images.last();
		}		

        me.SetSlide(prevSlide, prevImage);
    };

    // begins the animation
    me.Start = function () {
        // see if we have already started
        if (!me.IntervalKey) {
            me.IntervalKey = setInterval(me.ShowNext, me.RotateInterval);
        }
    };

    // enables the animation
    me.EnableAnimation = function () {
        // make sure we have not already enabled
        if (!me.IntervalKey && !me.TimeoutKey) {
            // animation is resumed after a certain timeout
            me.TimeoutKey = setTimeout(me.Start, me.InactivityTimeout);
        }
    };

    // disables the animation
    me.DisableAnimation = function () {
        // clear any intervals/timeouts
        clearInterval(me.IntervalKey);
        clearTimeout(me.TimeoutKey);
        me.IntervalKey = null;
        me.TimeoutKey = null;
    };

    // start animation
    me.Init();
    me.Start();
};