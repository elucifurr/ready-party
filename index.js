module.exports = function ReadyP(dispatch) {

	const command = dispatch.command;

	command.add('r', {
		$none() {
			dispatch.send('C_CHAT', 1, {
				channel: 1,
				message: 'r'
			});
		}
	});
};