
function selectChat(id)
{
	console.log(`selecting chat: ${id}`)

	// document.getElementById('telegram').contentWindow.postMessage({ type: "openChat", chatId: `${id}` })

	actionsRequester.call("openChat", { id })
}
let oldHref
function syncLocation()
{
	let tg = document.getElementById("telegram")
	if (!tg)
		return

	if (oldHref != tg.contentWindow.location.href)
	{
		oldHref = tg.contentWindow.location.href

		let hash = tg.contentWindow.location.hash || ""
		hash = hash.replace(/^#/, "")
		let chatId = hash ? parseInt(hash) : undefined
		let elem = document.getElementById("selectedChatName")
		if (chatId)
		{
			elem.setAttribute("data-chat-id", chatId + "")
			elem.innerText = CHATS[chatId]?.title || chatId
		}
		else
		{
			elem.removeAttribute("data-chat-id")
			elem.innerText = ""
		}
	}
}
setInterval(syncLocation, 200)
