/**
 * Pad.js
 *
 * Pads a string with additional characters.
 *
 * (c) 2013 Bill, BunKat LLC.
 * Pseudoloc is freely distributable under the MIT license.
 * For all details and documentation:
 *     http://bunkat.github.com/pseudoloc
 */

pseudoloc.padStr = ' one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty';

pseudoloc.pad = function(str, percent) {
	var padStr = pseudoloc.padStr;

	var len = Math.floor(str.length * percent) - pseudoloc.option.prepend.length - pseudoloc.option.append.length,
		pStr = str;
	while (padStr.length < len) {
		padStr += padStr;
	}
	if (len > 0) {
		pStr += padStr.substr(0, len);
	}

	return pStr;
};