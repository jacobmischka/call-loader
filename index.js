module.exports = function callLoader(source){
	let functionName = 'functionToExport';
	while(source.indexOf(functionName) !== -1)
		functionName += '_';

	let newSource = source.replace(/(export)\s(default)/g, 'var ' + functionName + ' =');
	newSource += '\n\nexport default ' + functionName + '();';
	
	return newSource;
}
