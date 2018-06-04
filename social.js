var SocialProfile = /** @class */ (function () {
    function SocialProfile(workplace, schoolUniversity, contactBasicInfo, relationshipStatus, family, about, placesStayed, lifeEvents) {
        var _this = this;
        this.getWorkplace = function () {
            return _this.workplace;
        };
        this.getEducationDetails = function () {
            return _this.schoolUniversity;
        };
        this.getContactAndBasicInfo = function () {
            return _this.contactBasicInfo;
        };
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getFamilyDetails = function () {
            return _this.family;
        };
        this.getPlacesStayed = function () {
            return _this.placesStayed;
        };
        this.getLifeEvents = function () {
            return _this.lifeEvents;
        };
        this.workplace = workplace;
        this.schoolUniversity = schoolUniversity;
        this.contactBasicInfo = contactBasicInfo;
        this.relationshipStatus = relationshipStatus;
        this.family = family;
        this.about = about;
        this.placesStayed = placesStayed;
        this.lifeEvents = lifeEvents;
    }
    return SocialProfile;
}());
var Work = /** @class */ (function () {
    function Work(visibleTo, company, position, workLocation, jobDescription, timePeriod, projects, professionalSkill) {
        var _this = this;
        this.getCompany = function () {
            return _this.company;
        };
        this.getPosition = function () {
            return _this.position;
        };
        this.getWorkLocation = function () {
            return _this.workLocation;
        };
        this.getJobDescription = function () {
            return _this.jobDescription;
        };
        this.getTimePeriod = function () {
            return _this.timePeriod;
        };
        this.getProjects = function () {
            return _this.projects;
        };
        this.getProfessionalSkills = function () {
            return _this.professionalSkill;
        };
        this.getVisibleTo = function () {
            return _this.visibleTo;
        };
        this.company = company;
        this.position = position;
        this.workLocation = workLocation;
        this.jobDescription = jobDescription;
        this.timePeriod = timePeriod;
        this.projects = projects;
        this.professionalSkill = professionalSkill;
        this.visibleTo = visibleTo;
    }
    return Work;
}());
var myWork = new Work("Friends", "EdWisor", "Trainer", "Gurgaon", "Mentorship");
var Education = /** @class */ (function () {
    function Education(visibleTo, university, timePeriod, isGraduated, description) {
        var _this = this;
        this.getUniversity = function () {
            return _this.university;
        };
        this.getTimePeriod = function () {
            return _this.timePeriod;
        };
        this.HaveGraduated = function () {
            return _this.isGraduated;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getVisibleTo = function () {
            return _this.visibleTo;
        };
        this.university = university;
        this.timePeriod = timePeriod;
        this.isGraduated = isGraduated;
        this.description = description;
        this.visibleTo = visibleTo;
    }
    return Education;
}());
var myEducation = new Education("Friends", "Harvard University", 24, true, "M.Ed");
var PlacesYouHaveLived = /** @class */ (function () {
    function PlacesYouHaveLived(visibleTo, place, isCurrentCity, isHomeTown, timePeriod, movedFrom, withWhom, story) {
        var _this = this;
        this.getPlace = function () {
            return _this.place;
        };
        this.getTimePeriod = function () {
            return _this.timePeriod;
        };
        this.getMovedFrom = function () {
            return _this.movedFrom;
        };
        this.getWithWhom = function () {
            return _this.withWhom;
        };
        this.isThisCurrentCity = function () {
            return _this.isCurrentCity;
        };
        this.isThisHomeTown = function () {
            return _this.isHomeTown;
        };
        this.getStory = function () {
            return _this.story;
        };
        this.getVisibleTo = function () {
            return _this.visibleTo;
        };
        this.place = place;
        this.timePeriod = timePeriod;
        this.movedFrom = movedFrom;
        this.withWhom = withWhom;
        this.isCurrentCity = isCurrentCity;
        this.isHomeTown = isHomeTown;
        this.story = story;
        this.visibleTo = visibleTo;
    }
    return PlacesYouHaveLived;
}());
var myPlace = new PlacesYouHaveLived("Friends", "New York", true, undefined, 18);
var ContactAndBasicInfo = /** @class */ (function () {
    function ContactAndBasicInfo(visibleTo, mobilePhone, emailAddress, gender, otherPhone, address, website, socialLink, dateOfBirth, yearOfBirth, language, religiousViews, politicalViews, interestedIn) {
        var _this = this;
        this.getMobilePhone = function () {
            return _this.mobilePhone;
        };
        this.getOtherPhone = function () {
            return _this.otherPhone;
        };
        this.getEmailAddress = function () {
            return _this.emailAddress;
        };
        this.getAddress = function () {
            return _this.address;
        };
        this.getWebsite = function () {
            return _this.website;
        };
        this.getSocialLink = function () {
            return _this.socialLink;
        };
        this.getBirthday = function () {
            return _this.dateOfBirth;
        };
        this.getBirthYear = function () {
            return _this.yearOfBirth;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getLanguage = function () {
            return _this.language;
        };
        this.getReligiousViews = function () {
            return _this.religiousViews;
        };
        this.getPoliticalViews = function () {
            return _this.politicalViews;
        };
        this.getInterestedIn = function () {
            return _this.interestedIn;
        };
        this.getVisibleTo = function () {
            return _this.visibleTo;
        };
        this.mobilePhone = mobilePhone;
        this.otherPhone = otherPhone;
        this.emailAddress = emailAddress;
        this.address = address;
        this.website = website;
        this.socialLink = socialLink;
        this.dateOfBirth = dateOfBirth;
        this.yearOfBirth = yearOfBirth;
        this.age = (new Date()).getFullYear() - this.yearOfBirth;
        this.gender = gender;
        this.language = language;
        this.religiousViews = religiousViews;
        this.politicalViews = politicalViews;
        this.interestedIn = interestedIn;
        this.visibleTo = visibleTo;
    }
    return ContactAndBasicInfo;
}());
var myInfo = new ContactAndBasicInfo("Friends", 9999999999, "example@example.com", "Female", undefined, undefined, undefined, undefined, 3101, 2000, "English", undefined, undefined, "Men");
var Family = /** @class */ (function () {
    function Family(visibleTo, familyMemberName, familyMemberRelationship) {
        var _this = this;
        this.getFamilyMemberName = function () {
            return _this.familyMemberName;
        };
        this.getFamilyMemberRelationship = function () {
            return _this.familyMemberRelationship;
        };
        this.getVisibleTo = function () {
            return _this.visibleTo;
        };
        this.familyMemberName = familyMemberName;
        this.familyMemberRelationship = familyMemberRelationship;
        this.visibleTo = visibleTo;
    }
    return Family;
}());
var familyDetails1 = new Family("Friends", "Andy", "Brother");
var familyDetails2 = new Family("Public", "Eric", "Husband");
var DetailsAboutYou = /** @class */ (function () {
    function DetailsAboutYou(visibleTo, accountName, aboutYou, nickName, favouriteQuote, bloodGroup, isBloodDonor) {
        var _this = this;
        this.getAboutYou = function () {
            return _this.aboutYou;
        };
        this.getAccountName = function () {
            return _this.accountName;
        };
        this.getNickName = function () {
            return _this.nickName;
        };
        this.geFavouriteQuote = function () {
            return _this.favouriteQuote;
        };
        this.getBloodGroup = function () {
            return _this.bloodGroup;
        };
        this.AreYouBloodDonor = function () {
            return _this.isBloodDonor;
        };
        this.getVisibleTo = function () {
            return _this.visibleTo;
        };
        this.aboutYou = aboutYou;
        this.accountName = accountName;
        this.nickName = nickName;
        this.favouriteQuote = favouriteQuote;
        this.bloodGroup = bloodGroup;
        this.isBloodDonor = isBloodDonor;
        this.visibleTo = visibleTo;
    }
    return DetailsAboutYou;
}());
var myDetails = new DetailsAboutYou("Friends", "Bella Swan", "Born to be true, not to be perfect", "Bell", "The ONLY purpose of our lives is to be happy. -Dalai Lama");
var mySocialProfileOverview = new SocialProfile([myWork], [myEducation], myInfo, "Married", [familyDetails1, familyDetails2], myDetails, [myPlace]);
console.log(mySocialProfileOverview);
