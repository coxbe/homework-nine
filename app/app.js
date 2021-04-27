import * as MODEL from "../model/model.js";
var currentHeroImage = "home";

function init() {
    $("nav a").click(function (e){
        let btnId = this.id;
        let contentID = btnId + "Content";

        if (btnId =="home") {
            $(".hero").css("display", "block");
            $(".hero").removeClass('${currentHeroImage}-hero-image');
            $("#app").removeClass("otherPadding").addClass("homePadding");

            currentHeroImage = btnId;
            MODEL.getPageContent(contentID, addHomeListeners);
        } else if (btnId == "about"){
            removeHero(currentHeroImage);

            MODEL.getPageContent(contentID, addPromoListeners);
        } else {
            removeHero(currentHeroImage);
            MODEL.getPageContent(contentID);
        }

        $(".hero-content .page-name").html(btnId);
    });

    $(".outside a").click(function (e) {
        console.log("here");
    });
}

function removeHero(currentHeroImage) {
    $(".hero").removeClass(`${currentHeroImage}-hero-image`);
    $(".hero").css("dislay", "none");
    $(".#app").removeClass("homePadding").addClass("otherPadding");
    currentHeroImage - currentHeroImage;
}

function addPromoListeners(){
    // paste the promo listeners here
    $("#app .about .heroThree a").click(function (e) {
        console.log(this.id);
    });
}

$(document).ready(function () {
    init();
    MODEL.getPageContent("homeContent");
    $("#app").addClass("homePadding");
});