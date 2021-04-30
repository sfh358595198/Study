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

var compute = (function(){
	function plus(a,b){
		return a + b
	}
	function minus(a,b){
		return a - b
	}
	function mul(a,b){
		return a * b
	}
	function div(a,b){
		return a / b
	}
	return {
		plus: plus,
		minus: minus,
		mul: mul,
		div: div
	}
})()