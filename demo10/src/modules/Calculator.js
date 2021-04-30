import compute from '../lib/compute'
import { trimSpace, digitalize } from '../utils/tools'
import ResultComponent from '../components/Result'
import InputGroupComponent from '../components/InputGroup'
import BtnGroupComponent from '../components/BtnGroup'

@compute
export default class Calculator {
	constructor(el){
		this.name = "Calculator"
		this.el = el
		this.resultComponent = new ResultComponent()
		this.inputGroupComponent = new InputGroupComponent()
		this.btnGroupComponent = new BtnGroupComponent()
	}
	init(){
		this.render()
		this.bindEvent()
	}
	render(){
		const oFrag = document.createDocumentFragment()
		oFrag.appendChild(this.resultComponent.tpl())
		oFrag.appendChild(this.inputGroupComponent.tpl())
		oFrag.appendChild(this.btnGroupComponent.tpl())
		this.el.appendChild(oFrag)
	}
	bindEvent(){
		this.oInput = this.el.getElementsByTagName('input')
		this.oBtnGroup = this.el.getElementsByClassName('btn-group')[0]
		this.oResult = this.el.getElementsByClassName('result')[0]
		this.oBtnGroup.addEventListener('click',this.onBtnClick.bind(this),false)
	}
	onBtnClick(ev){
		const e = ev || window.event,
					tar = e.target || e.srcElement,
					tagName = tar.tagName.toLowerCase();

		if(tagName === 'button'){
			const method = tar.getAttribute('data-method'),
						fVal = digitalize(trimSpace(this.oInput[0].value)),
						sVal = digitalize(trimSpace(this.oInput[1].value));

			this.setResult(method,fVal,sVal)
		}
	}
	setResult(method,val1,val2){
		this.oResult.innerText = this[method](val1,val2)
	}
}


