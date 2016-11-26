module.exports = (Franz, options) => {
    function getMessages() {
		const now_count = $(".board-canvas .is-due-now").length;
		const soon_count = $(".board-canvas .is-due-soon").length;

        Franz.setBadge(now_count+soon_count);
    }
    Franz.loop(getMessages);
}
