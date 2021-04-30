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
		
		this.data = this.defineData()
		this.selectedIndex = 0
	}
	init(){
		this.render()
		this.bindEvent()
	}
	defineData(){
		let target = {
			method: 'plus',
			fVal: 0,
			sVal: 0
		}
		const _self = this;
		return new Proxy(target,{
			get(target,prop){
				return target[prop]
			},
			set(target,prop,value){
				target[prop] = value
				_self.setResult(_self.data.method,_self.data.fVal,_self.data.sVal)
				return true;
			}
		})
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
		this.oBtns = this.el.getElementsByClassName('btn')

		this.oBtnGroup.addEventListener('click',this.onBtnClick.bind(this),false)
		this.oInput[0].addEventListener('input',this.onInput.bind(this),false)
		this.oInput[1].addEventListener('input',this.onInput.bind(this),false)
	}
	onBtnClick(ev){
		const e = ev || window.event,
					tar = e.target || e.srcElement,
					tagName = tar.tagName.toLowerCase();

		if(tagName === 'button'){
			const method = tar.getAttribute('data-method')	
			this.setData('method',method)
			this.setBtnSelected(tar)
		}
	}
	onInput(ev){
		const e = ev || window.event,
					tar = e.target || e.srcElement,
					id = tar.getAttribute('data-id'),
					val = digitalize(trimSpace(tar.value)) || 0;
		this.setData(id,val)
	}
	setData(field,newVal){
		switch(field){
			case 'method':
				this.data.method = newVal
				break;
			case 'fVal':
				this.data.fVal = newVal
				break;
			case 'sVal':
				this.data.sVal = newVal
				break;
			default:
				break;
		}
	}
	setBtnSelected(target){
		this.oBtns[this.selectedIndex].className = 'btn'
		this.selectedIndex = [].indexOf.call(this.oBtns,target)
		this.oBtns[this.selectedIndex].className += ' selected'
	}
	setResult(method,val1,val2){
		this.oResult.innerText = this[method](val1,val2)
	}
}