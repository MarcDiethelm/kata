/*
Kata: Es geht darum, in einem Kundenprojekt aus einem Boolean-Array einen String mit spezieller Formatierung zu
generieren. Im Boolean-Array (Länge = 7) ist für jeden Wochentag definiert ob dieser im String erscheinen soll oder
nicht. Einzelne Wochentage werden kommasepariert, wenn mehr als zwei Wochentage hintereinander 'true' sind, müssen diese
mit einem Bindestrich verbunden werden.

Beispiele:
Boolean[] days = {false, true, true, false, true, true, true} -> "Di, Mi, Fr-So"
Boolean[] days = {true, true, true, false, true, true, true} -> "Mo-Mi, Fr-So"
Boolean[] days = {true, true, false, true, true, false, true} -> "Mo, Di, Do, Fr, So"
Boolean[] days = {true, true, true, true, true, true, true} -> "Mo-So"

Ziel:
Implementiere anhand der Tests eine Funktion, welche diesen String generiert und damit alle Tests auf grün setzt.
*/

var kata = require('../lib/oeffnungszeiten')
	,assert = require('assert')
	,dayNames = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
;

describe('Oeffnungszeiten', function() {

	it('test 1', function() {
		var oeffnungszeiten = [true,true,false,true,true,true,false];
		assert.equal("Mo,Di,Do-Sa", kata.run(oeffnungszeiten, dayNames));
	});

	it('test 2', function() {
		var oeffnungszeiten = [false,true,false,false,false,true,true];
		assert.equal("Di,Sa,So", kata.run(oeffnungszeiten, dayNames));
	});

	it('test 3', function() {
		var oeffnungszeiten = [true,true,true,true,true,true,true];
		assert.equal("Mo-So", kata.run(oeffnungszeiten, dayNames));
	});

	it('test 4', function() {
		var oeffnungszeiten = [false,true,false,true,false,true,false];
		assert.equal("Di,Do,Sa", kata.run(oeffnungszeiten, dayNames));
	});

	it('test 5', function() {
		var oeffnungszeiten = [true,false,true,false,true,false,true];
		assert.equal("Mo,Mi,Fr,So", kata.run(oeffnungszeiten, dayNames));
	});

	it('test 6', function() {
		var oeffnungszeiten = [true,true,true,false,true,true,true];
		assert.equal("Mo-Mi,Fr-So", kata.run(oeffnungszeiten, dayNames));
	});

	it('test 7', function() {
		var oeffnungszeiten = [false,true,true,true,true,true,false];
		assert.equal("Di-Sa", kata.run(oeffnungszeiten, dayNames));
	});

});