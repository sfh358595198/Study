(function(doc){
	var oCalculator = doc.getElementsByClassName('J_calculator')[0],
			oInput = oCalculator.getElementsByTagName('input'),
			oBtnGroup = oCalculator.getElementsByClassName('btn-group')[0],
			oResult = oCalculator.getElementsByClassName('result')[0];
	var init = function(){
		bindEvent()
	}
	function bindEvent(){
		oBtnGroup.addEventListener('click',onBtnClick,false)
	}
	//事件处理函数
	function onBtnClick(e){
		var tar = tools.getTarget(e),
				tagName = tar.tagName.toLowerCase();
		if(tagName === 'button'){
			var method = tar.getAttribute('data-method'),
					fVal = tools.digitalize(oInput[0].value),
					sVal = tools.digitalize(oInput[1].value);

			render(compute[method](fVal,sVal))
		}
	}
	//渲染函数
	function render(result){
		oResult.innerText = result
	}
	init()
})(document)