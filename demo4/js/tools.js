var tools = (function(){

	function digitalize(str){
		return Number(str.replace(/\s+/g,'')) || 0;
	}
	function getTarget(e){
		var e = e || window.event
		return e.target || e.srcElement
	}

	return {
		digitalize: digitalize,
		getTarget: getTarget
	}
})()