var $div, $slices, $spinTwoThree, $wheel, spinTwoThree, $triggerSpinBtn;

function onSpinStart(e) {

    console.log('Spin started',e);

    $div.html = $('');
}

function onSpinComplete(e) {
    console.log('Spin complete',e);
    //$div.html = e.slots[0].getSlice(0).getAttribute("data-name");
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function loadData(){

    $slices.html('');
    shuffle(games);
    renderGames();

}

function renderGames(){
    var count = 0;
    $.each(games,function(key,value){
        $slices.append($('<div class="slice" data-name="'+value.id+'"><img src="'+value.header+'" /></div>'));
        count++;
    });
    $wheel.css('height',count*215);
}

function onTriggerSpin(e){
    e.preventDefault();
    loadData();
    //spinTwoThree.shuffle();
    spinTwoThree.spin();

}

$(document).ready(function(){

    $triggerSpinBtn = $('#trigger-spin-btn');

    //console.log($triggerSpinBtn)

    $div = $('<div class="output"></div>');
    $spinTwoThree = $('#spin-two-three');
    $wheel = $spinTwoThree.find('.wheel');
    $slices = $spinTwoThree.find('.wheel > .slices');
    $slices.html('');

    $('body').append($div);

    spinTwoThree = new SpinTwoThree($("#spin-two-three")[0]);
    spinTwoThree.setCallbackStart(onSpinStart);
    spinTwoThree.setCallbackComplete(onSpinComplete);

    $triggerSpinBtn.bind('click',onTriggerSpin);

    loadData();

});