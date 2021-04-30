import tpl from './index.tpl'

export default class ResultComponent {
	constructor(){
		this.name = 'ResultComponent'
	}
	tpl(){
		const oDiv = document.createElement('div')
		oDiv.innerHTML = tpl()
		return oDiv
	}
}


// 导入进来的是一个函数 
// function tpl(){
// 	return ''
// }