/**
 * Created by User on 10/18/2017.
 */
var states = new Bloodhound({
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.word); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 4,
    local: [
        { word: "https://www.omniglot.com/images/langsamples/udhr_armenian-western.gif" },
        /*{ word: "Alaska" },
        { word: "Arizona" },
        { word: "Arkansas" },
        { word: "California" },
        { word: "Colorado" }*/
    ]
});

states.initialize();
/*
$('#imgUrl').typeahead(null, {
    name: 'states',
    displayKey: 'word',
    source: states.ttAdapter()
});*/