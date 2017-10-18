
var rec =
{
    "https://www.omniglot.com/images/langsamples/udhr_armenian-western.gif" : "" +
    "Բոլոր մարդիկ կը ծնուին ազատ եւ հաւասար իրենց արժանապատուութեամբ եւ իրաւունքներով:" +
    " Իրենք Օժտուած են բանականութեամբ ու խիղճով, եւ պարտաւորուած են միմեանց հանդէպ եղբայրութեան ոգիով վարուիլ:"
};
var urlG = "";
var finText = "";

var procURL = function()
{

    var url = document.getElementById("imgUrl").value;
    urlG = url;
    document.getElementById("armImg").src = url;

    document.getElementById("recognizedText").value = rec[url];
    save_text();

    document.getElementById("imgInfo").classList.remove('hidden');
};

var save_text = function()
{
    finText = document.getElementById("recognizedText").value;
    document.getElementById("finalText").innerHTML = finText;
};