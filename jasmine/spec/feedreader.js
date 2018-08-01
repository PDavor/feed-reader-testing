$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            //check if allFeed is defined
            expect(allFeeds).toBeDefined();
            //check if it's empty
            expect(allFeeds.length).not.toBe(0);
        });

         it('have URLs defined and not empty', function() {
            //loop through each feed in allFeeds object
            for(let x = 0; x < allFeeds.length; x++) {
                //check if URLs are defined
                expect(allFeeds[x].url).toBeDefined();
                //check if URL is empty or not
                expect(allFeeds[x].url.length).not.toBe(0); 
            }
         });

        it('have names defined and not empty', function() {
            //loop through each feed in allFeeds object
            for(let x = 0; x < allFeeds.length; x++) {
                //check each feed has name defined
                expect(allFeeds[x].name).toBeDefined();
                //check if feed name is not empty
                expect(allFeeds[x].name.length).not.toBe(0); 
            }
         });
    });


    describe('The menu', function() {

         it('is hidden', function() {
            //check if menu is hidden by default
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

          it('changes visibility', function() {
            //trigger click
            $('.menu-icon-link').trigger('click');
            //check if menu is now visible
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //trigger second click
            $('.menu-icon-link').trigger('click');
            //check if menu is hidden again
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });


    describe('Initial Entries', function() {

         beforeEach(function(done) {
            //load first feed
            loadFeed(0, done);
         });

         it('have more than 0 entries', function() {
            //check if there is atleast one entry
            expect($('.feed .entry').length).not.toBe(0);
         });
    });


    describe('New Feed Selection', function () {

         var feed;
         beforeEach(function(done) {
            loadFeed(0, function() {
                //save old feed
                feed = $('.feed').html()
                //load new feed
                loadFeed(1, done)
             });
        });

         it('changes content', function() {
            //check if saved feed is different than new feed
            expect($('.feed').html()).not.toBe(feed);
         });
    });
}());
