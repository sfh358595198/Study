import Compute from '../lib/Compute'

export default class Calculator extends Compute {
	constructor(el){
		super()
		this.name = 'Calculator'
		this.el = el
		this.oInput = el.getElementsByTagName('input')
		this.oBtnGroup = el.getElementsByClassName('btn-group')[0]
		this.oResult = el.getElementsByClassName('result')[0]
	}
	init(){
		this.bindEvent()
	}
	bindEvent(){
		this.oBtnGroup.addEventListener('click',this.onBtnClick.bind(this),false)
	}
	onBtnClick(ev){
		const e = ev || window.event,
					tar = e.target || e.srcElement,
					tagName = tar.tagName.toLowerCase();

		if(tagName === 'button'){
			const method = tar.getAttribute('data-method'),
						fVal = Number(this.oInput[0].value.replace(/\s+/g,'')) || 0,
						sVal = Number(this.oInput[1].value.replace(/\s+/g,'')) || 0;

			this.setResult(method,fVal,sVal)
		}
	}
	setResult(method,val1,val2){
		this.oResult.innerText = this[method](val1,val2)
	}
}