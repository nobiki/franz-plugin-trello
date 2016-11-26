module.exports = (Franz, options) => {
    function getMessages() {
        $('.item-box-title h1 a').each((i, e) => {
            $(e).attr('target', '_blank');
        });

        var unread = 0;
        const flush = $('div.flush-button.active')[0];
        const notify = parseInt($('div.globalNotifications_count')[0].textContent)
        Franz.setBadge(notify, unread);
    }

    Franz.loop(getMessages);
}
