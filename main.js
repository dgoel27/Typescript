var YouTubeVideo = /** @class */ (function () {
    function YouTubeVideo(videoId, videoTitle, videoLength, elapsedTime, publishDate, aboutVideo, volume, caption, subtitles_On, annotation, annotations_On, speed, quality, isTheatreMode, isFullScreen, isLive, channelId, channelName, numberOfSubscribers, numberOfViews, isLiked, numberOfLikes, isDisliked, numberOfDislikes, numberOfComments, videoPlaylistName, watchLaterFlag, autoPlay_On, isChatHidden, chats, comments, sCPN, viewport, currentRes, optimalRes, normalizedVolume, codecs, color, host, connectionSpeed, networkActivity, bufferHealth, droppedFrames, liveLatency, liveMode, pageAdId, pageAdURL, pageAdImageId, pageAdImageURL) {
        var _this = this;
        this.getVideoId = function () {
            return _this.videoId;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getVideoURL = function () {
            return _this.videoURL;
        };
        this.getVideoLength = function () {
            return _this.videoLength;
        };
        this.getElapsedTime = function () {
            return _this.elapsedTime;
        };
        this.getPublishDate = function () {
            return _this.publishDate;
        };
        this.getAboutVideo = function () {
            return _this.aboutVideo;
        };
        this.getPageAdId = function () {
            return _this.pageAdId;
        };
        this.getPageAdURL = function () {
            return _this.pageAdURL;
        };
        this.getPageAdImageId = function () {
            return _this.pageAdImageId;
        };
        this.getPageAdImageURL = function () {
            return _this.pageAdImageURL;
        };
        this.getVolume = function () {
            return _this.volume;
        };
        this.getCaption = function () {
            return _this.caption;
        };
        this.isSubtitles_On = function () {
            return _this.subtitles_On;
        };
        this.getAnnotation = function () {
            return _this.annotation;
        };
        this.getRelatedVideos = function () {
            _this.getAnnotation();
        };
        this.isAnnotations_On = function () {
            return _this.annotations_On;
        };
        this.getSpeed = function () {
            return _this.speed;
        };
        this.getQuality = function () {
            return _this.quality;
        };
        this.isVideoInTheatreMode = function () {
            _this.isTheatreMode;
        };
        this.isVideoOnFullScreen = function () {
            _this.isFullScreen;
        };
        this.isVideoLive = function () {
            return _this.isLive;
        };
        this.getChannelId = function () {
            return _this.channelId;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getNumberOfSubscribers = function () {
            return _this.numberOfSubscribers;
        };
        this.getNumberOfViews = function () {
            return _this.numberOfViews;
        };
        this.isVideoLiked = function () {
            return _this.isLiked;
        };
        this.getNumberOfLikes = function () {
            return _this.numberOfLikes;
        };
        this.isVideoDisliked = function () {
            return _this.isDisliked;
        };
        this.getNumberOfDislikes = function () {
            return _this.numberOfDislikes;
        };
        this.getNumberOfComments = function () {
            return _this.numberOfComments;
        };
        this.getVideoPlaylistName = function () {
            return _this.videoPlaylistName;
        };
        this.toBeWatchedLater = function () {
            return _this.watchLaterFlag;
        };
        this.isAutoPlay_On = function () {
            return _this.autoPlay_On;
        };
        this.isVideoChatHidden = function () {
            return _this.isChatHidden;
        };
        this.getChats = function () {
            return _this.chats;
        };
        this.getComments = function () {
            return _this.comments;
        };
        //stats for nerds
        this.getSCPN = function () {
            return _this.sCPN;
        };
        this.getViewport = function () {
            return _this.viewport;
        };
        this.getCurrentRes = function () {
            return _this.currentRes;
        };
        this.getOptimalRes = function () {
            return _this.optimalRes;
        };
        this.getNormalizedVolume = function () {
            return _this.normalizedVolume;
        };
        this.getCodecs = function () {
            return _this.codecs;
        };
        this.getColor = function () {
            return _this.color;
        };
        this.getHost = function () {
            return _this.host;
        };
        this.getConnectionSpeed = function () {
            return _this.connectionSpeed;
        };
        this.getNetworkActivity = function () {
            return _this.networkActivity;
        };
        this.getBufferHealth = function () {
            return _this.bufferHealth;
        };
        this.getLiveLatency = function () {
            return _this.liveLatency;
        };
        this.getLiveMode = function () {
            return _this.liveMode;
        };
        this.getDroppedFrames = function () {
            return _this.droppedFrames;
        };
        this.videoId = videoId;
        this.videoTitle = videoTitle;
        this.videoURL = "https://youtu.be/" + videoId;
        this.videoLength = videoLength;
        this.elapsedTime = elapsedTime;
        this.publishDate = publishDate;
        this.aboutVideo = aboutVideo;
        this.pageAdId = pageAdId;
        this.pageAdURL = pageAdURL;
        this.pageAdImageId = pageAdImageId;
        this.pageAdImageURL = pageAdImageURL;
        this.volume = volume;
        this.caption = caption;
        this.subtitles_On = subtitles_On;
        this.annotation = annotation;
        this.annotations_On = annotations_On;
        this.speed = speed;
        this.quality = quality;
        this.isTheatreMode = isTheatreMode;
        this.isFullScreen = isFullScreen;
        this.isLive = isLive;
        this.channelId = channelId;
        this.channelName = channelName;
        this.numberOfSubscribers = numberOfSubscribers;
        this.numberOfViews = numberOfViews;
        this.isLiked = isLiked;
        this.numberOfLikes = numberOfLikes;
        this.isDisliked = isDisliked;
        this.numberOfDislikes = numberOfDislikes;
        this.numberOfComments = numberOfComments;
        this.videoPlaylistName = videoPlaylistName;
        this.watchLaterFlag = watchLaterFlag;
        this.autoPlay_On = autoPlay_On;
        this.isChatHidden = isChatHidden;
        this.chats = chats;
        this.comments = comments;
        this.sCPN = sCPN;
        this.viewport = viewport;
        this.currentRes = currentRes;
        this.optimalRes = optimalRes;
        this.normalizedVolume = normalizedVolume;
        this.codecs = codecs;
        this.color = color;
        this.host = host;
        this.connectionSpeed = connectionSpeed;
        this.networkActivity = networkActivity;
        this.bufferHealth = bufferHealth;
        this.liveLatency = liveLatency;
        this.liveMode = liveMode;
        this.droppedFrames = droppedFrames;
    }
    return YouTubeVideo;
}());
var Chats = /** @class */ (function () {
    function Chats(userId, userName, message) {
        var _this = this;
        this.getUserId = function () {
            return _this.userId;
        };
        this.getUserName = function () {
            return _this.userName;
        };
        this.getMessage = function () {
            return _this.message;
        };
        this.userId = userId;
        this.userName = userName;
        this.message = message;
    }
    return Chats;
}());
var myChat1 = new Chats("Jen123", "Jennie", "Hi everyone..!!");
var myChat2 = new Chats("Bot123", "Nightbot", "Hey Jennie");
var Comments = /** @class */ (function () {
    function Comments(userId, userName, userComment, commentTime, numberOfLikes, numberOfDislikes, hasReply, numberOfReplies, reply) {
        var _this = this;
        this.getUserId = function () {
            return _this.userId;
        };
        this.getUserName = function () {
            return _this.userName;
        };
        this.getUserComment = function () {
            return _this.userComment;
        };
        this.getCommentTime = function () {
            return _this.commentTime;
        };
        this.getNumberOfLikes = function () {
            return _this.numberOfLikes;
        };
        this.getNumberOfDislikes = function () {
            return _this.numberOfDislikes;
        };
        this.havingReply = function () {
            return _this.hasReply;
        };
        this.getNumberOfReplies = function () {
            return _this.numberOfReplies;
        };
        this.getReply = function () {
            return _this.reply;
        };
        this.userId = userId;
        this.userName = userName;
        this.userComment = userComment;
        this.commentTime = commentTime;
        this.numberOfLikes = numberOfLikes;
        this.numberOfDislikes = numberOfDislikes;
        this.hasReply = hasReply;
        this.numberOfReplies = numberOfReplies;
        this.reply = reply;
    }
    return Comments;
}());
var myReply1 = new Comments("User2", "Glooper", "Lol.. :D", "6 days ago", 1, 0, false, 0, []);
var myReply2 = new Comments("User3", "Siyan", "so funnyyyyyy", "6 days ago", 1, 0, false, 0, []);
var myComment = new Comments("User1", "brayzbeats", "That girl with sausage on her head.", "1 month ago", 992, 0, true, 2, [myReply1, myReply2]);
var myYouTubeVideo = new YouTubeVideo("iWZmdoY1aTE", "Ed Sheeran - Happier (Official Video)", 215, 50, "Published on Apr 27, 2018", "÷. Out Now: https://atlanti.cr/yt-album Subscribe to Ed's channel: http://bit.ly/SubscribeToEdSheeran", 90, "...", true, "Info : Click here for related videos", true, 1, 720, false, false, false, "UC0C-w0YjGpqDXGB8IHb662A", "Ed Sheeran", 31428693, 84310879, true, 1500000, true, 38000, 69672, ["LikedVideos", "myPlaylist2"], false, true, false, [myChat1, myChat2], [myComment], "9AEX PJP2 X5CK", "854x480", "1280x720@25", "1280x720@25", 60, "vp09.00.51.08.01.01.01.01 (247) / opus (251)", "bt709 / bt709", "r2---sn-qxovoapox-qxae", 45337, 347, 11.06, 88, 11.42, "Manifestless, Optimized for Low Latency", "CzUJ9-_0TW5e6M4mWtOUP06C4kA69zcbrUfmW2JvDB4bmvYTmBxABIOP7kwNg5erog-AOoAG87N22A8gBA6kCWMg18NQCUD6oAwHIAxmYBAWqBNMBT9Ak1j0zpNgUKAhYiIfm0bx0u5q--vkvqQmJGH91z6LRRKpl5SRYtEFhFUPu0gef4ys567c1P0m_PPOdSe6QYfzKYsP-stJPC_Mj8KKVpV4mxZ-jyWZDB4GUqQrAJK13i_ENAHhZvFzJmlYBuVnDvJ_lwyGUnG67FvDsmM_5jj4JHuiBkbdp1bIfCKGTbc5nZt2oAwAPvE39SW5YWqdWsvbNxu0VjHsgOSZXppBdZyPw5AHL0GCQFPr8zx2G40fG_unmTlTfXfz9gvWDUSvNDX7GBKAGA4AHrJOiSagHjs4bqAeNzRuoB9XJG6gHz8wbqAemvhuoB5jOG9gHAdIIBwiAYRABGAPyCBxjYS1ob3N0LXB1Yi00NDA0NjkyMTAzNTM3NzA5sQnazTrGbNH9SYAKAdgTAg", "https://www.googleadservices.com/pagead/aclk?sa=L&ai=CzUJ9-_0TW5e6M4mWtOUP06C4kA69zcbrUfmW2JvDB4bmvYTmBxABIOP7kwNg5erog-AOoAG87N22A8gBA6kCWMg18NQCUD6oAwHIAxmYBAWqBNMBT9Ak1j0zpNgUKAhYiIfm0bx0u5q--vkvqQmJGH91z6LRRKpl5SRYtEFhFUPu0gef4ys567c1P0m_PPOdSe6QYfzKYsP-stJPC_Mj8KKVpV4mxZ-jyWZDB4GUqQrAJK13i_ENAHhZvFzJmlYBuVnDvJ_lwyGUnG67FvDsmM_5jj4JHuiBkbdp1bIfCKGTbc5nZt2oAwAPvE39SW5YWqdWsvbNxu0VjHsgOSZXppBdZyPw5AHL0GCQFPr8zx2G40fG_unmTlTfXfz9gvWDUSvNDX7GBKAGA4AHrJOiSagHjs4bqAeNzRuoB9XJG6gHz8wbqAemvhuoB5jOG9gHAdIIBwiAYRABGAPyCBxjYS1ob3N0LXB1Yi00NDA0NjkyMTAzNTM3NzA5sQnazTrGbNH9SYAKAdgTAg&num=1&cid=CAASEuRolkDOrc_sQ-qkALkNl6WxUA&sig=AOD64_28u1NzfUhbV85Y-EZ6_t0GCfSMyA&client=ca-pub-6219811747049371&adurl=https://www.coolwinks.com/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DDR-Sunglasses-Listing-Page-Desktop-7Days%26utm_adgroup%3DSunglasses-Listing-Page%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DDR-Sunglasses-Listing-Page-Desktop-Google-Build%26utm_adgroup%3DSunglasses-Listing-Page&nm=1&nx=441.5&ny=29&clkt=177&nm=2&nx=323.5&ny=51&clkt=153", "CICAgKCbkufvuAEQ2AUYWjIIeeRX0UlX5Qg", "https://pagead2.googlesyndication.com/pagead/imgad?id=CICAgKCbkufvuAEQ2AUYWjIIeeRX0UlX5Qg");
console.log(myYouTubeVideo);
