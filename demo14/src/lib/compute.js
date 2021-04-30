export default target => {
	target.prototype.plus = (a,b) => {
		return a + b
	}
	target.prototype.minus = (a,b) => {
		return a - b
	}
	target.prototype.mul = (a,b) => {
		return a * b
	}
	target.prototype.div = (a,b) => {
		return a / b
	}
}