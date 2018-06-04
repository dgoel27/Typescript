class SocialProfile {
    private workplace : Work[];
    private schoolUniversity : Education[];
    private contactBasicInfo : ContactAndBasicInfo;
    private relationshipStatus : string; //Single, Married, Engaged, etc..    
    private family : Family[];
    private about : DetailsAboutYou;
    private placesStayed : PlacesYouHaveLived[];
    private lifeEvents : string;

    constructor(workplace : Work[], schoolUniversity : Education[],contactBasicInfo : ContactAndBasicInfo, relationshipStatus : string | 'Single', family : Family[], about : DetailsAboutYou, placesStayed : PlacesYouHaveLived[], lifeEvents? : string)
    {
        this.workplace = workplace;
        this.schoolUniversity = schoolUniversity;
        this.contactBasicInfo = contactBasicInfo;
        this.relationshipStatus = relationshipStatus;
        this.family = family;
        this.about = about;
        this.placesStayed = placesStayed;
        this.lifeEvents = <string>lifeEvents;
    }

    getWorkplace=() => {
        return this.workplace;
    }
    getEducationDetails=() => {
        return this.schoolUniversity;
    }
    getContactAndBasicInfo=() => {
        return this.contactBasicInfo;
    }
    getRelationshipStatus=() => {
        return this.relationshipStatus;
    }
    getFamilyDetails=() => {
        return this.family;
    }
    getPlacesStayed=() => {
        return this.placesStayed;
    }
    getLifeEvents=() => {
        return this.lifeEvents;
    }
}

class Work {
    private company : string;
    private position : string;
    private workLocation : string;
    private jobDescription : string;
    private timePeriod : number;
    private projects : string;
    private professionalSkill : string;
    private visibleTo : string; //Public,Friends,OnlyMe,Custom    

    constructor(visibleTo : string | 'Public', company : string, position? :string, workLocation? : string, jobDescription? : string, timePeriod? : number, projects? : string, professionalSkill? : string)
    {
        this.company = company;
        this.position = <string>position;
        this.workLocation = <string>workLocation;
        this.jobDescription = <string>jobDescription;
        this.timePeriod = <number>timePeriod;
        this.projects = <string>projects;
        this.professionalSkill = <string>professionalSkill;
        this.visibleTo = visibleTo;        
    }

    getCompany=() => {
        return this.company;
    }
    getPosition=() => {
        return this.position;
    }
    getWorkLocation=() => {
        return this.workLocation;
    }
    getJobDescription=() => {
        return this.jobDescription;
    }
    getTimePeriod=() => {
        return this.timePeriod;
    }
    getProjects=() => {
        return this.projects;
    }
    getProfessionalSkills=() => {
        return this.professionalSkill;
    }
    getVisibleTo=() => {
        return this.visibleTo;
    }
}

let myWork = new Work("Friends","EdWisor","Trainer","Gurgaon","Mentorship");

class Education {

    private university : string;
    private timePeriod : number; // in months
    private isGraduated : boolean;
    private description : string;
    private visibleTo : string; //Public,Friends,OnlyMe,Custom

    constructor(visibleTo : string | 'Public', university : string, timePeriod? : number, isGraduated? : boolean | true, description? : string)
    {
        this.university = university;
        this.timePeriod = <number>timePeriod;
        this.isGraduated = <boolean>isGraduated;
        this.description = <string>description;
        this.visibleTo = visibleTo;
    }

    getUniversity=() => {
        return this.university;
    }
    getTimePeriod=() => {
        return this.timePeriod;
    }
    HaveGraduated=() => {
        return this.isGraduated;
    }
    getDescription=() => {
        return this.description;
    }
    getVisibleTo=() => {
        return this.visibleTo;
    }
}

let myEducation = new Education("Friends","Harvard University",24,true,"M.Ed");

class PlacesYouHaveLived {
    private place : string;
    private timePeriod : number; // in months
    private movedFrom : string;
    private withWhom : string;
    private isCurrentCity : boolean;
    private isHomeTown : boolean;
    private story : string;
    private visibleTo : string; //Public,Friends,OnlyMe,Custom

    constructor(visibleTo : string | 'Public', place : string, isCurrentCity : boolean | true, isHomeTown? : boolean | false, timePeriod? : number, movedFrom? : string, withWhom? : string, story? : string)
    {
        this.place = place;
        this.timePeriod = <number>timePeriod;
        this.movedFrom = <string>movedFrom;
        this.withWhom = <string>withWhom;
        this.isCurrentCity = isCurrentCity;
        this.isHomeTown = <boolean>isHomeTown;
        this.story = <string>story;
        this.visibleTo = visibleTo;
    }

    getPlace=() => {
        return this.place;
    }
    getTimePeriod=() => {
        return this.timePeriod;
    }
    getMovedFrom=() => {
        return this.movedFrom;
    }
    getWithWhom=() => {
        return this.withWhom;
    }
    isThisCurrentCity=() => {
        return this.isCurrentCity;
    }
    isThisHomeTown=() => {
        return this.isHomeTown;
    }
    getStory=() => {
        return this.story;
    }
    getVisibleTo=() => {
        return this.visibleTo;
    }

}

let myPlace = new PlacesYouHaveLived("Friends","New York",true,undefined,18);

class ContactAndBasicInfo {
    private mobilePhone : number;
    private otherPhone : number;
    private emailAddress : string;
    private address : string;
    private website : string;
    private socialLink : string;
    private dateOfBirth : number; //Ex. 0101
    private yearOfBirth : number; //Ex. 2001
    private age : number;
    private gender : string; //Female, Male
    private language : string;
    private religiousViews : string;
    private politicalViews : string;
    private interestedIn : string; //Women, Men
    private visibleTo : string; //Public,Friends,OnlyMe,Custom

    constructor(visibleTo : string | 'Public', mobilePhone : number, emailAddress : string, gender? : string | 'Male', otherPhone? : number, address? : string, website? : string, socialLink? : string, dateOfBirth? : number, yearOfBirth? : number, language? : string, religiousViews? : string, politicalViews? : string, interestedIn? : string)
    {
        this.mobilePhone = mobilePhone;
        this.otherPhone = <number>otherPhone;
        this.emailAddress = emailAddress;
        this.address = <string>address;
        this.website = <string>website;
        this.socialLink = <string>socialLink;
        this.dateOfBirth = <number>dateOfBirth;
        this.yearOfBirth = <number>yearOfBirth;
        this.age = (new Date()).getFullYear() - this.yearOfBirth;
        this.gender = <string>gender;
        this.language = <string>language;
        this.religiousViews = <string>religiousViews;
        this.politicalViews = <string>politicalViews;
        this.interestedIn = <string>interestedIn;
        this.visibleTo = visibleTo;
    }

    getMobilePhone=() => {
        return this.mobilePhone;
    }
    getOtherPhone=() => {
        return this.otherPhone;
    }
    getEmailAddress=() => {
        return this.emailAddress;
    }
    getAddress=() => {
        return this.address;
    }
    getWebsite=() => {
        return this.website;
    }
    getSocialLink=() => {
        return this.socialLink;
    }
    getBirthday=() => {
        return this.dateOfBirth;
    }
    getBirthYear=() => {
        return this.yearOfBirth;
    }
    getAge=() => {
        return this.age;
    }
    getGender=() => {
        return this.gender;
    }
    getLanguage=() => {
        return this.language;
    }
    getReligiousViews=() => {
        return this.religiousViews;
    }
    getPoliticalViews=() => {
        return this.politicalViews;
    }
    getInterestedIn=() => {
        return this.interestedIn;
    }
    getVisibleTo=() => {
        return this.visibleTo;
    }
}

let myInfo = new ContactAndBasicInfo("Friends",9999999999,"example@example.com","Female",undefined,undefined,undefined,undefined,3101,2000,"English",undefined,undefined,"Men");

class Family {

    private familyMemberName : string;
    private familyMemberRelationship : string; //Mother, Sister, Brother, etc.
    private visibleTo : string; //Public,Friends,OnlyMe,Custom

    constructor(visibleTo : string | 'Public', familyMemberName : string, familyMemberRelationship : string)
    {
        this.familyMemberName = familyMemberName;
        this.familyMemberRelationship = familyMemberRelationship;
        this.visibleTo = visibleTo;
    }

    getFamilyMemberName=() => {
        return this.familyMemberName;
    }
    getFamilyMemberRelationship=() => {
        return this.familyMemberRelationship;
    }
    getVisibleTo=() => {
        return this.visibleTo;
    }
}

let familyDetails1 = new Family("Friends","Andy","Brother");
let familyDetails2 = new Family("Public","Eric","Husband");

class DetailsAboutYou {

    private aboutYou : string;
    private accountName : string;
    private nickName : string;
    private favouriteQuote : string;
    private bloodGroup : string;
    private isBloodDonor : boolean;
    private visibleTo : string; //Public,Friends,OnlyMe,Custom

    constructor(visibleTo : string | 'Public', accountName : string, aboutYou? : string, nickName? : string, favouriteQuote? : string, bloodGroup? : string, isBloodDonor? : boolean | false)
    {
        this.aboutYou = <string>aboutYou;
        this.accountName = accountName;
        this.nickName = <string>nickName;
        this.favouriteQuote = <string>favouriteQuote;
        this.bloodGroup = <string>bloodGroup;
        this.isBloodDonor = <boolean>isBloodDonor;
        this.visibleTo = visibleTo;
    }

    getAboutYou=() => {
        return this.aboutYou;
    }
    getAccountName=() => {
        return this.accountName;
    }
    getNickName=() => {
        return this.nickName;
    }
    geFavouriteQuote=() => {
        return this.favouriteQuote;
    }
    getBloodGroup=() => {
        return this.bloodGroup;
    }
    AreYouBloodDonor=() => {
        return this.isBloodDonor;
    }
    getVisibleTo=() => {
        return this.visibleTo;
    }
}

let myDetails = new DetailsAboutYou("Friends","Bella Swan","Born to be true, not to be perfect","Bell","The ONLY purpose of our lives is to be happy. -Dalai Lama");

let mySocialProfileOverview = new SocialProfile([myWork],[myEducation],myInfo,"Married",[familyDetails1,familyDetails2],myDetails,[myPlace]);

console.log(mySocialProfileOverview);