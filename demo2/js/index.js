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
		var e = e || window.event,
				tar = e.target || e.srcElement,
				tagName = tar.tagName.toLowerCase();
		if(tagName === 'button'){
			var method = tar.getAttribute('data-method'),
					fVal = Number(oInput[0].value.replace(/\s+/g,'')) || 0,
					sVal = Number(oInput[1].value.replace(/\s+/g,'')) || 0;

			switch(method){
				case 'plus':
					oResult.innerText = fVal + sVal;
					break;
				case 'minus':
					oResult.innerText = fVal - sVal;
					break;
				case 'mul':
					oResult.innerText = fVal * sVal;
					break;
				case 'div':
					oResult.innerText = fVal / sVal;
					break;
				default:
					break
			}
		}
	}
	init()
})(document)