class YouTubeVideo {

    private videoId : string;
    private videoURL : string;
    private videoTitle : string;
    private videoLength : number; // in seconds
    private elapsedTime : number; // in seconds
    private publishDate : string;
    private aboutVideo : string;
    private pageAdId : string;
    private pageAdURL : string;
    private pageAdImageId : string;
    private pageAdImageURL : string;
    private volume : number;    
    private caption : string;
    private subtitles_On : boolean;
    private annotation : string;
    private annotations_On : boolean;
    private speed : number;
    private quality : number; // in pixels
    private isTheatreMode : boolean;
    private isFullScreen : boolean;
    private isLive : boolean;
    private channelId : string;
    private channelName : string;
    private numberOfSubscribers : number;
    private numberOfViews : number;
    private isLiked : boolean;
    private numberOfLikes : number;
    private isDisliked : boolean;
    private numberOfDislikes : number;
    private numberOfComments : number;
    private videoPlaylistName : string[];
    private watchLaterFlag : boolean;
    private autoPlay_On : boolean;
    private isChatHidden : boolean;
    private chats : Chats[];
    private comments : Comments[];

    //stats for nerds
    private sCPN : string;
    private viewport : string;
    private currentRes : string;
    private optimalRes : string;
    private normalizedVolume : number;
    private codecs : string;
    private color : string;
    private host : string;
    private connectionSpeed : number; // in Kbps
    private networkActivity : number; // in KB
    private bufferHealth : number; // in seconds
    private liveLatency : number; // in seconds
    private liveMode : string;
    private droppedFrames : number;    

    constructor(videoId : string,videoTitle : string,videoLength : number,elapsedTime : number,publishDate : string,aboutVideo : string,volume : number,caption : string,subtitles_On : boolean,annotation : string,annotations_On : boolean,speed : number,quality : number,isTheatreMode : boolean,isFullScreen : boolean,isLive : boolean,channelId : string,channelName : string,numberOfSubscribers : number,numberOfViews : number,isLiked : boolean,numberOfLikes : number,isDisliked : boolean,numberOfDislikes : number,numberOfComments : number,videoPlaylistName : string[],watchLaterFlag : boolean,autoPlay_On : boolean,isChatHidden : boolean, chats : Chats[],comments : Comments[],sCPN : string,viewport : string,currentRes : string,optimalRes : string,normalizedVolume : number,codecs : string,color : string,host : string,connectionSpeed : number,networkActivity : number,bufferHealth : number,droppedFrames : number,liveLatency? : number | null,liveMode? : string | null,pageAdId? : string | null,pageAdURL? : string | null,pageAdImageId? : string | null,pageAdImageURL? : string | null)
    {
        this.videoId = videoId;
        this.videoTitle = videoTitle;
        this.videoURL = "https://youtu.be/" + videoId;
        this.videoLength = videoLength;
        this.elapsedTime = elapsedTime;
        this.publishDate = publishDate;
        this.aboutVideo = aboutVideo;
        this.pageAdId = <string>pageAdId;
        this.pageAdURL = <string>pageAdURL;
        this.pageAdImageId = <string>pageAdImageId;
        this.pageAdImageURL = <string>pageAdImageURL;
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
        this.liveLatency = <number>liveLatency;
        this.liveMode = <string>liveMode;
        this.droppedFrames = droppedFrames;
    }

    getVideoId=() => {
        return this.videoId;
    }
    getVideoTitle=() => {
        return this.videoTitle;
    }
    getVideoURL=() => {
        return this.videoURL;
    }
    getVideoLength=() => {
        return this.videoLength;
    }
    getElapsedTime=() => {
        return this.elapsedTime;
    }
    getPublishDate=() => {
        return this.publishDate;
    }
    getAboutVideo=() => {
        return this.aboutVideo;
    }
    getPageAdId=() => {
        return this.pageAdId;
    }
    getPageAdURL=() => {
        return this.pageAdURL;
    }
    getPageAdImageId=() => {
        return this.pageAdImageId;
    }
    getPageAdImageURL=() => {
        return this.pageAdImageURL;
    }
    getVolume=() => {
        return this.volume;
    }
    getCaption=() => {
        return this.caption;
    }
    isSubtitles_On=() => {
        return this.subtitles_On;
    }
    getAnnotation=() => {
        return this.annotation;
    }
    getRelatedVideos=() => {
        this.getAnnotation();
    }
    isAnnotations_On=() => {
        return this.annotations_On;
    }
    getSpeed=() => {
        return this.speed;
    }
    getQuality=() => {
        return this.quality;
    }
    isVideoInTheatreMode=() => {
        this.isTheatreMode;
    }
    isVideoOnFullScreen=() => {
        this.isFullScreen;
    }
    isVideoLive=() => {
        return this.isLive;
    }
    getChannelId=() => {
        return this.channelId;
    }
    getChannelName=() => {
        return this.channelName;
    }
    getNumberOfSubscribers=() => {
        return this.numberOfSubscribers;
    }
    getNumberOfViews=() => {
        return this.numberOfViews;
    }
    isVideoLiked=() => {
        return this.isLiked;
    }
    getNumberOfLikes=() => {
        return this.numberOfLikes;
    }
    isVideoDisliked=() => {
        return this.isDisliked;
    }
    getNumberOfDislikes=() => {
        return this.numberOfDislikes;
    }
    getNumberOfComments=() => {
        return this.numberOfComments;
    }
    getVideoPlaylistName=() => {
        return this.videoPlaylistName;
    }
    toBeWatchedLater=() => {
        return this.watchLaterFlag;
    }
    isAutoPlay_On=() => {
        return this.autoPlay_On;
    }
    isVideoChatHidden=() => {
        return this.isChatHidden;
    }
    getChats=() => {
        return this.chats;
    }
    getComments=() => {
        return this.comments;
    }

    //stats for nerds
    getSCPN=() => {
        return this.sCPN;
    }
    getViewport=() => {
        return this.viewport;
    }
    getCurrentRes=() => {
        return this.currentRes;
    }
    getOptimalRes=() => {
        return this.optimalRes;
    }
    getNormalizedVolume=() => {
        return this.normalizedVolume;
    }
    getCodecs=() => {
        return this.codecs;
    }
    getColor=() => {
        return this.color;
    }
    getHost=() => {
        return this.host;
    }
    getConnectionSpeed=() => {
        return this.connectionSpeed;
    }
    getNetworkActivity=() => {
        return this.networkActivity;
    }
    getBufferHealth=() => {
        return this.bufferHealth;
    }
    getLiveLatency=() => {
        return this.liveLatency;
    }
    getLiveMode=() => {
        return this.liveMode;
    }
    getDroppedFrames=() => {
        return this.droppedFrames;
    }

}

class Chats {

    private userId : string;
    private userName : string;
    private message : string;

    constructor(userId : string, userName : string, message : string)
    {
        this.userId = userId;
        this.userName = userName;
        this.message = message;
    }

    getUserId=() => {
        return this.userId;
    }
    getUserName=() => {
        return this.userName;
    }
    getMessage=() => {
        return this.message;
    }
}

let myChat1 = new Chats("Jen123","Jennie","Hi everyone..!!");
let myChat2 = new Chats("Bot123","Nightbot","Hey Jennie");

class Comments {

    private userId : string;
    private userName : string;
    private userComment : string;
    private commentTime : string;
    private numberOfLikes : number;
    private numberOfDislikes : number;
    private hasReply : boolean;
    private numberOfReplies : number;
    private reply : Comments[];

    constructor(userId : string,userName : string,userComment : string,commentTime : string,numberOfLikes : number,numberOfDislikes : number,hasReply : boolean,numberOfReplies : number,reply : Comments[])
    {
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

    getUserId=() => {
        return this.userId;
    }
    getUserName=() => {
        return this.userName;
    }
    getUserComment=() => {
        return this.userComment;
    }
    getCommentTime=() => {
        return this.commentTime;
    }
    getNumberOfLikes=() => {
        return this.numberOfLikes;
    }
    getNumberOfDislikes=() => {
        return this.numberOfDislikes;
    }
    havingReply=() => {
        return this.hasReply;
    }
    getNumberOfReplies=() => {
        return this.numberOfReplies;
    }
    getReply=() => {
        return this.reply;
    }

}

let myReply1 = new Comments("User2","Glooper","Lol.. :D","6 days ago",1,0,false,0,[]);
let myReply2 = new Comments("User3","Siyan","so funnyyyyyy","6 days ago",1,0,false,0,[]);
let myComment = new Comments("User1","brayzbeats","That girl with sausage on her head.","1 month ago",992,0,true,2,
                [myReply1,myReply2]);


let myYouTubeVideo = new YouTubeVideo("iWZmdoY1aTE","Ed Sheeran - Happier (Official Video)",215,50,"Published on Apr 27, 2018",
"÷. Out Now: https://atlanti.cr/yt-album Subscribe to Ed's channel: http://bit.ly/SubscribeToEdSheeran",90,"...",true,
"Info : Click here for related videos",true,1,720,false,false,false,"UC0C-w0YjGpqDXGB8IHb662A","Ed Sheeran",31428693,
84310879,true,1500000,true,38000,69672,["LikedVideos","myPlaylist2"],false,true
,false,[myChat1,myChat2],[myComment],"9AEX PJP2 X5CK","854x480",
"1280x720@25","1280x720@25",60,"vp09.00.51.08.01.01.01.01 (247) / opus (251)","bt709 / bt709",
"r2---sn-qxovoapox-qxae",45337,347,11.06,88,11.42,"Manifestless, Optimized for Low Latency",
"CzUJ9-_0TW5e6M4mWtOUP06C4kA69zcbrUfmW2JvDB4bmvYTmBxABIOP7kwNg5erog-AOoAG87N22A8gBA6kCWMg18NQCUD6oAwHIAxmYBAWqBNMBT9Ak1j0zpNgUKAhYiIfm0bx0u5q--vkvqQmJGH91z6LRRKpl5SRYtEFhFUPu0gef4ys567c1P0m_PPOdSe6QYfzKYsP-stJPC_Mj8KKVpV4mxZ-jyWZDB4GUqQrAJK13i_ENAHhZvFzJmlYBuVnDvJ_lwyGUnG67FvDsmM_5jj4JHuiBkbdp1bIfCKGTbc5nZt2oAwAPvE39SW5YWqdWsvbNxu0VjHsgOSZXppBdZyPw5AHL0GCQFPr8zx2G40fG_unmTlTfXfz9gvWDUSvNDX7GBKAGA4AHrJOiSagHjs4bqAeNzRuoB9XJG6gHz8wbqAemvhuoB5jOG9gHAdIIBwiAYRABGAPyCBxjYS1ob3N0LXB1Yi00NDA0NjkyMTAzNTM3NzA5sQnazTrGbNH9SYAKAdgTAg",
"https://www.googleadservices.com/pagead/aclk?sa=L&ai=CzUJ9-_0TW5e6M4mWtOUP06C4kA69zcbrUfmW2JvDB4bmvYTmBxABIOP7kwNg5erog-AOoAG87N22A8gBA6kCWMg18NQCUD6oAwHIAxmYBAWqBNMBT9Ak1j0zpNgUKAhYiIfm0bx0u5q--vkvqQmJGH91z6LRRKpl5SRYtEFhFUPu0gef4ys567c1P0m_PPOdSe6QYfzKYsP-stJPC_Mj8KKVpV4mxZ-jyWZDB4GUqQrAJK13i_ENAHhZvFzJmlYBuVnDvJ_lwyGUnG67FvDsmM_5jj4JHuiBkbdp1bIfCKGTbc5nZt2oAwAPvE39SW5YWqdWsvbNxu0VjHsgOSZXppBdZyPw5AHL0GCQFPr8zx2G40fG_unmTlTfXfz9gvWDUSvNDX7GBKAGA4AHrJOiSagHjs4bqAeNzRuoB9XJG6gHz8wbqAemvhuoB5jOG9gHAdIIBwiAYRABGAPyCBxjYS1ob3N0LXB1Yi00NDA0NjkyMTAzNTM3NzA5sQnazTrGbNH9SYAKAdgTAg&num=1&cid=CAASEuRolkDOrc_sQ-qkALkNl6WxUA&sig=AOD64_28u1NzfUhbV85Y-EZ6_t0GCfSMyA&client=ca-pub-6219811747049371&adurl=https://www.coolwinks.com/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DDR-Sunglasses-Listing-Page-Desktop-7Days%26utm_adgroup%3DSunglasses-Listing-Page%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DDR-Sunglasses-Listing-Page-Desktop-Google-Build%26utm_adgroup%3DSunglasses-Listing-Page&nm=1&nx=441.5&ny=29&clkt=177&nm=2&nx=323.5&ny=51&clkt=153",
"CICAgKCbkufvuAEQ2AUYWjIIeeRX0UlX5Qg","https://pagead2.googlesyndication.com/pagead/imgad?id=CICAgKCbkufvuAEQ2AUYWjIIeeRX0UlX5Qg");  


console.log(myYouTubeVideo);