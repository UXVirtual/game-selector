var $div, $slices, $spinTwoThree, $wheel, spinTwoThree, $triggerSpinBtn, $container, $slotContainer, $slotMusic,
    $bleepSound, $coin1Sound, $coin2Sound, $coin3Sound, $coin4Sound, $lightContainer, lightInterval, $lights;

function onSpinStart(e) {

    startLightFlash();

    console.log('Spin started',e);

    $slotMusic[0].play();

    var rnd = Math.floor((Math.random() * 4) + 1);

    switch(rnd){
        case 1:
            $coin1Sound[0].play();
            break;
        case 2:
            $coin2Sound[0].play();
            break;
        case 3:
            $coin3Sound[0].play();
            break;
        case 4:
            $coin4Sound[0].play();
            break;
    }



    $slotContainer.addClass('spinning');
    $div.html = $('');
}

function onSpinComplete(e) {

    stopLightFlash();

    finishLightFlash();

    console.log('Spin complete',e);

    $slotMusic[0].pause();
    $slotMusic[0].currentTime = 0;

    $bleepSound[0].play();

    $slotContainer.removeClass('spinning');
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

function startLightFlash(){

    console.log('Light flash started');

    var currentIndex = 0;

    activateLight(currentIndex);

    clearInterval(lightInterval);

    lightInterval = setInterval(function(){
        deactivateLights();
        activateLight(currentIndex);
        currentIndex++;

        if(currentIndex > 2){
            currentIndex = 0;
        }
    },100);

}

function finishLightFlash(){

    var currentIndex = 0;

    activateLight(0);
    activateLight(1);
    activateLight(2);

    clearInterval(lightInterval);

    lightInterval = setInterval(function(){
        deactivateLights();

        switch(currentIndex){
            case 0:
                activateLight(0);
                activateLight(1);
                activateLight(2);
                break;
            case 1:
                deactivateLights();
                break;
            case 2:
                activateLight(0);
                activateLight(1);
                activateLight(2);
                break;
            case 3:
                deactivateLights();
                break;
        }

        currentIndex++;
    },100);
}

function activateLight(index){
    $lights.eq(index).addClass('on');
}

function deactivateLights(){
    $lights.removeClass('on');
}

function stopLightFlash(){

    console.log('Light flash stopped');

    clearInterval(lightInterval);
    deactivateLights();
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

function onResize(e){
    $container.height($(window).height());
}

$(document).ready(function(){

    $container = $('.container');
    $slotContainer = $('.slot-container');
    $lightContainer = $('.light-container');
    $lights = $lightContainer.find('.light');

    $triggerSpinBtn = $('#trigger-spin-btn');
    $slotMusic = $('#slot-music');

    $bleepSound = $('#bleep-sound');
    $coin1Sound = $('#coin1-sound');
    $coin2Sound = $('#coin2-sound');
    $coin3Sound = $('#coin3-sound');
    $coin4Sound = $('#coin4-sound');

    //console.log($triggerSpinBtn)

    $div = $('<div class="output"></div>');
    $spinTwoThree = $('#spin-two-three');
    $wheel = $spinTwoThree.find('.wheel');
    $slices = $spinTwoThree.find('.wheel > .slices');
    $slices.html('');

    onResize();

    $('body').append($div);

    spinTwoThree = new SpinTwoThree($("#spin-two-three")[0]);
    spinTwoThree.setCallbackStart(onSpinStart);
    spinTwoThree.setCallbackComplete(onSpinComplete);

    $triggerSpinBtn.bind('click',onTriggerSpin);
    $(window).on('resize',onResize);

    loadData();

});