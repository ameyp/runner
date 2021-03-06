var startGame = function () {
    var canvas = $('canvas').get(0);

    var canvasSupported = !!window.HTMLCanvasElement;

    if ( !canvasSupported ) {
	$('div#content').html("<h1>Your browser does not support canvas, please upgrade to a modern browser</h1>");
	return;
    }
    var gs = new JSGameSoup(canvas, 30);

    //$("body").addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

    var levelData = {
	height: 112,
	origin: 100,
	hurdles: [
	    400, 700, 1000, 1400, 1700, 2300, 2600, 3000, 3300, 3600, 4000, 4400, 4700, 5000, 5300, 5600, 6000,
	    6300, 6600, 7000, 7300, 7600, 7900, 8200, 8500, 8800, 9200, 9500, 9800, 10100
	]
    };

    createLevel( gs, levelData );
};

var loadSprites = function() {
    Sprite.preload([
	"img/sheet.png",
	"img/background.png"
    ], startGame);
};