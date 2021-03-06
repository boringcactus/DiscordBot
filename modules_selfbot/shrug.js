const SHRUG = "¯\\_(ツ)_/¯"

module.exports.events = {
    message(e) {
        if (e.author.id === e.client.user.id) {
            var i = e.content.indexOf('/shrug')
            if (i < 0) return

            let text = e.content

            // double slash escape
            if (e.content[i-1] === '/') {
                e.edit(text.replace('//shrug', '/shrug'))
                return
            }

            
            if (e.content.startsWith('/shrug ')) {
                // normal /shrug - prepends at end
                text = text.replace(/^\/shrug +/i, '') + ` ${SHRUG}`
            }
            e.edit(text.replace('/shrug', ` ${SHRUG} `))
            
        }
    }
}