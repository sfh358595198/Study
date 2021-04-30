import tpl from './index.tpl';
import './index.scss';

export default class BtnGroupComponent {
	constructor(){
		this.name = 'BtnGroupComponent'
	}
	tpl(){
		const oDiv = document.createElement('div')
		oDiv.className = 'btn-group'
		oDiv.innerHTML = tpl()
		return oDiv
	}
}


// 导入进来的是一个函数 
// function tpl(){
// 	return ''
// }