Object.defineProperty(exports, '__esModule', { value: true });
exports.terminalLog = null;
const terminal = document.querySelector('.terminal pre');
function terminalLog(text, where) {
	let reassignedWhere = where;
	if (reassignedWhere === null) {
		reassignedWhere = 'beforeend';
	}
	terminal.insertAdjacentHTML(reassignedWhere, `<div>${text}</div>`);
}
exports.terminalLog = terminalLog;
