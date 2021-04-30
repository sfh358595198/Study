import Calculator from '../modules/Calculator.js'
(function(doc){
	const oClaculator = doc.getElementsByClassName('J_calculator')[0]
	const init = () => {
		new Calculator(oClaculator).init()
	}
	init()
})(document)