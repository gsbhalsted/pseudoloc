/**
 * Str.js
 *
 * Replaces all characters in str with pseudolocalized version according to
 * pseudoloc.options.
 *
 * (c) 2013 Bill, BunKat LLC.
 * Pseudoloc is freely distributable under the MIT license.
 * For all details and documentation:
 *     http://bunkat.github.com/pseudoloc
 */
pseudoloc.str = function(str) {
	var opts = pseudoloc.option,
		startdelim = opts.startDelimiter || opts.delimiter,
		enddelim = opts.endDelimiter || opts.delimiter,
		i = 0, result = '', c, pc, inDelimCount = 0;
	
	str = pseudoloc.pad(str, opts.extend);

	while(i < str.length) {
		if (inDelimCount && i === str.indexOf(enddelim, i)) {
			inDelimCount = Math.max(0, inDelimCount-1);
			result += enddelim;
			i += enddelim.length;
			continue;
		}
		if (i === str.indexOf(startdelim, i)) {
			inDelimCount += 1;
			result += startdelim;
			i += startdelim.length;
			continue;
		} 
		if (inDelimCount !== 0) {
			result += str[i];
			i++;
			continue;
		}

		c = opts.override !== undefined ? opts.override : str[i];
		pc = pseudoloc.table[c];
		if (pc) {
			var diacriticalIndex = str.length % pc.length;
			c = pc[diacriticalIndex];
		}
		result += c;
		i++;
	}

	return opts.prepend + result + opts.append;
};

