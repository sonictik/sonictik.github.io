var translation = {
    "https://www.omniglot.com/images/langsamples/udhr_armenian-western.gif" : "" +
    "All people are born freely and equally with their dignity and rights. " +
        "They are minded by reason and conscience, and are obliged to behave" +
    " in a spirit of brotherhood toward each other."
};

var translateText = function()
{
    /*var lang = "am";
    var langto = "en";
    google.language.translate(translateDiv.get("html"),lang,toLang,callback);*/

    finText = translation[urlG];
    document.getElementById("finalText").innerHTML = finText;
};