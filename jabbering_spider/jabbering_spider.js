Feeds = new Meteor.Collection('feeds');

if (Meteor.isServer) {
    var twitter_user_id = 0;
    var boundCallback = Meteor.bindEnvironment(function (err, resp) {
        if (err !== null) {
            console.log(err);
            return;
        }
        for (var obj in resp['statuses']) {
            twitter_user_id = resp['statuses'][obj].user.id;
            if (Feeds.find({feed_id: resp['statuses'][obj].id}).count() == 0) {
                Feeds.insert({
                    feed: resp['statuses'][obj].text,
                    created_at: resp['statuses'][obj].created_at.slice(0, 19),
                    feed_id: resp['statuses'][obj].id,
                    profile_img: resp['statuses'][obj].user.profile_image_url,
                    screen_name: resp['statuses'][obj].user.screen_name
                });
            }
        }
    });

    Meteor.startup(function () {
        Feeds.remove({});
    });

    Meteor.methods({
        twit_get: function() {
            Twit = new TwitMaker({
                consumer_key: 'iM78JP8Yu4ctNlQR4F45A',
                consumer_secret: 'sJ1xfu0WlvytQzVjCwpgetZ8Qjt7htpiINvm566pHs',
                access_token: '2257292881-LVbYWcJctixrM9fAahbxt2rfE5fzlUXlBZWYKTK',
                access_token_secret: '1BDIctxDdVJgpuY3bWQaYPpg85VX6iw9xx5AmsPDwqxAT'
            });
            Twit.get(
                'search/tweets',
                {
                    q: '#rico_test since_id:' + twitter_user_id,
                    count: 1
                },
                boundCallback
            );
        }
    });
}

if (Meteor.isClient) {
    var query = Feeds.find({});

    Meteor.setInterval(function () {
        Meteor.call('twit_get');
        var count = Feeds.find({}).count();
        while (count > 6) {
            var feed = Feeds.find({}, {sort: {created_at: 1}}).fetch()[0];
            Feeds.remove({_id: feed._id});
            --count;
        }
    }, 30000);

    Template.twitter_feeds.feeds = function () {
        return Feeds.find({}, {sort: {created_at: -1}});
    };
}

