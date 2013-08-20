// Constructor
var Oeffnungszeiten = function() {};

// Fill it with properties, methods
Oeffnungszeiten.prototype = {

	// This is the method that is called from outside
	run: function(oeffnungszeiten, dayNames) {

		// Save input as properties
		this.oeffnungszeiten = oeffnungszeiten;
		this.dayNames = dayNames;

		// Find any sequences (of length 1-n) of *true* values and return them in a 2-dimensional array
		this.sequences = this.findTrueSequences();

		// Format and look up the dayNames for the found sequences.
		// If the sequence is shorter than three, do a straight lookup.
		// Else determine 'end' and 'start' day of the sequence and add a hyphen in between.
		var string = this.buildStrings().join(',');

		return string;
	}

	,buildStrings: function() {
		var strings = []
			,start
			,end
		;
		this.sequences.forEach(function(value, index) {
			if (value.length < 3) {
				strings.push(this.getDayNames(value));
			}
			else {
				start = value[0];
				end = value[value.length-1];
				strings.push(this.dayNames[start] +'-'+ this.dayNames[end]);
			}
		}, this);

		return strings;
	}

	,getDayNames: function(sequence) {
		var dayNames = sequence.map(function(value, index) {
			return this.dayNames[value];
		}, this);

		return dayNames.join(',');
	}

	,findTrueSequences: function() {
		var sequences = []
			,sequence
		;

		this.oeffnungszeiten.forEach(function(value, index) {
			if (value && !sequence) {
				sequence = [index];
			}
			else if (value && sequence) {
				sequence.push(index);
			}
			else if (!value && sequence) {
				sequences.push(sequence);
				sequence = null;
			}
			else {
				sequence = null;
			}

			// last array element and sequence is open, add it to sequences
			if (index == this.oeffnungszeiten.length-1 && sequence) {
				sequences.push(sequence);
			}

		}, this);

		return sequences;
	}
};


module.exports = new Oeffnungszeiten;
