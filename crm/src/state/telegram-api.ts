import { mergeIntoObservable, observable } from "@legendapp/state"
import { Methods, Custom } from "../telegram/types"
import { Requester } from "jsonrpc-iframe"
import { ApiChat, ApiChatFullInfo, ApiMessage } from "../../../telegram-tt/src/api/types"

type FoldersResponse = NonNullable<Awaited<ReturnType<Methods["fetchChatFolders"]>>>
type Folder = FoldersResponse["byId"][number]

type MergedChat = {
	id: number
	chat: ApiChat | undefined
	info: ApiChatFullInfo | undefined
}

export const state$ = observable({
	folders: {
		selected: 0,
		byId: {} as FoldersResponse["byId"],
		list: [] as Folder[],
		initiallyLoaded: false,
	},
	chats: {
		selected: 0,
		byId: {} as Record<number | string, MergedChat | undefined>,
		inFolder: {} as Record<number, MergedChat[] | undefined>,
		lastMessages: {} as Record<string | number, ApiMessage>,
	},
})

export async function fetchChatFolders(methods: Requester<Methods>)
{
	console.log("fetchChatFolders")
	console.log(methods.target)
	let response = await methods.proxy.fetchChatFolders()

	console.log("fetchChatFolders response", response)

	if (!response)
		return

	let folders = response
	state$.folders.initiallyLoaded.set(true)
	state$.folders.byId.assign(folders.byId)
	let byId = state$.folders.byId.peek()
	state$.folders.list.set(folders.orderedIds.map(id => byId[id]).filter(Boolean))

	console.log("fetchChatFolders", state$.folders.list.peek())
}

export async function loadChatsInFolder(custom: Requester<Custom>, folderId: number)
{
	let response = await custom.proxy.getChatsInTheFolder(folderId)
	console.log("loadChatsInFolder", folderId, response)
	state$.chats.inFolder[folderId].set(response.map(({id, chat, fullInfo}) => ({ id, chat: chat!, info: fullInfo })))
	let chats = {} as Record<number | string, MergedChat>
	let lastMessages = {} as Record<number | string, ApiMessage>
	for (let { id, chat, msg, fullInfo } of response)
	{
		if (!chat)
			continue

		chats[id] = { id, chat, info: fullInfo }
		if (msg)
			lastMessages[id] = msg
	}
	mergeIntoObservable(state$.chats.byId, chats)
	mergeIntoObservable(state$.chats.lastMessages, lastMessages)
}
