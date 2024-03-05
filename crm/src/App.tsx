import React, { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import { CONFIG } from './config'
import { TelegramWindowContextType, useTelegram } from './telegram/context'
import { fetchChatFolders, loadChatsInFolder, state$ as tgApiState$ } from './state/telegram-api'
import { For, useSelector } from '@legendapp/state/react'
import { sleep } from './utils/sleep'

type AuthState = { authed: false } | { authed: true, userId: string }
type AppAuthState = { authed: false } | { authed: true, token: string, sliseUserId: string }

const RootHeader: React.FC<React.PropsWithChildren> = ({ children }) =>
{
	return <div id="root-header">{children}</div>
}
const RootFooter: React.FC<React.PropsWithChildren> = ({ children }) =>
{
	return <div id="root-footer">{children}</div>
}
const RootMiddle: React.FC<React.PropsWithChildren> = ({ children }) =>
{
	let style = useMemo(() => ({ display: "flex", justifyContent: "center", alignItems: "center" }), [])
	return <div id="root-middle-container" style={style}>{children}</div>
}
const RootLeft: React.FC<React.PropsWithChildren> = ({ children }) =>
{
	return <div id="root-left">{children}</div>
}
const RootRight: React.FC<{ auth: AuthState, appAuth: AppAuthState }> = ({ auth, appAuth }) =>
{
	let width = !auth.authed ? "0"
		: !appAuth.authed ? "100%"
		: "30%"

	return (
		<div id="root-right" style={{ width, display: auth.authed ? undefined : "none", height: "100vh", backgroundColor: "#f0f0f0" }}>
			{auth.authed && <TestPanel auth={auth} appAuth={appAuth} />}
		</div>
	)
}

const BOT_CHAT_ID = "7110011886"
const BOT_USERNAME = "slise_crm_bot"

const TestPanelLoaded: React.FC<{ auth: AuthState, appAuth: AppAuthState, tg: TelegramWindowContextType }> = ({ auth, tg: { methods, actions, custom, events } }) =>
{
	let folders = useSelector(tgApiState$.folders.list)
	let selectedFolderId = useSelector(tgApiState$.folders.selected)
	let loadChats = useCallback(() => selectedFolderId && loadChatsInFolder(custom, selectedFolderId), [custom, selectedFolderId])

	let canLoadChats = selectedFolderId && !!folders.length
	let chatsInFolder = useSelector(() => tgApiState$.chats.inFolder[selectedFolderId].get())
	let lastMessages = useSelector(tgApiState$.chats.lastMessages)

	let chatsAreLoaded = selectedFolderId && !!chatsInFolder?.length

	let selectedChatId = useSelector(tgApiState$.chats.selected)
	let selectedChatInfo = useSelector(() => tgApiState$.chats.byId[selectedChatId].get())
	let initiallyLoaded = useSelector(tgApiState$.folders.initiallyLoaded)

	let selectChat = useCallback((id: string | number | undefined) => (console.log("SELECTED CHAT", id), actions.proxy.openChat({ id: id?.toString() })), [actions])
	let selectBotChat = useCallback((token: string) =>
	{
		(async() =>
		{
			// console.log("sending...")
			await actions.proxy.openChatByUsername({ username: BOT_USERNAME, startParam: token })
			await sleep(2000)
			// await actions.proxy.sendBotCommand({ command: `/start`, chatId: BOT_CHAT_ID })
			// await actions.proxy.sendBotCommand({ command: `/start ${token}`, chatId: BOT_CHAT_ID })
			// await actions.proxy.openChatByUsername({ username: "slise_crm_bot" })
			// await actions.proxy.startBot({ botId: BOT_CHAT_ID, param: token })
			// await actions.proxy.sendBotCommand({ command: "/start", chatId: BOT_CHAT_ID })
			// await actions.proxy.loadFullUser({ userId: BOT_CHAT_ID })
			// await actions.proxy.openChat({ id: BOT_CHAT_ID })
		})()
	}, [actions])

	useEffect(() =>
	{
		fetchChatFolders(methods)
		let timer = setInterval(() =>
		{
			if (!initiallyLoaded)
				fetchChatFolders(methods)
			else
				clearInterval(timer)
		}, 1000)
		return () => clearInterval(timer)
	}, [methods, auth.authed, initiallyLoaded])

	useEffect(() => events.subscribe("chatOpened", chatId => (console.log(`CHAT_OPENED ${chatId}`), void tgApiState$.chats.selected.set(parseInt(chatId)))), [events, tgApiState$.chats.selected])
	useEffect(() => events.subscribe("chatClosed", () => (console.log(`CHAT CLOSED`), void tgApiState$.chats.selected.set(0))), [events, tgApiState$.chats.selected])
	useEffect(() =>
	{
		if (!folders.length)
			return

		if (selectedFolderId > folders.length)
			tgApiState$.folders.selected.set(folders[0]?.id || 0)

		if (selectedFolderId == 0)
			tgApiState$.folders.selected.set(folders[0]!.id)
	}, [folders, selectedFolderId, tgApiState$.folders.selected])

	return (
		<>
			hi
			<div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
				<select id="listOfFolders" value={selectedFolderId} onChange={e => tgApiState$.folders.selected.set(parseInt(e.currentTarget.value + ""))}>
					{folders.map((folder) => (
						folder && <option key={folder.id} value={folder.id}>{folder.title}</option>
					))}
				</select>
				{canLoadChats ? <>
					{chatsAreLoaded ? <>
						{selectedChatInfo
							? <div><h6>selected chat:</h6>
								<span id="selectedChatName">{selectedChatInfo?.chat?.title}</span>
							</div>
							: <div>no chat selected {selectedChatId}</div>}
						<ul id="listOfChats">
							{chatsInFolder?.map(chat => (
								<li key={chat.id}>
									<span>id: {chat.id}</span>
									<span><b>{chat.chat?.title?.substring(0, 20)}</b></span><br />
									<span>{lastMessages[chat.id!]?.content?.text?.text?.substring(0, 20)}</span>
									<span>by {lastMessages[chat.id!]?.senderId}</span>
									<button onClick={() => selectChat(chat.id)}>Select</button>
								</li>
							))}
						</ul>
					</> : <button onClick={loadChats}>Load chats</button>}
				</> : `Select a folder to load chats ${selectedFolderId} ${folders.length}`}
				<button onClick={() => selectBotChat(new Date().toISOString().replace(/[\D|\W]/g, '-'))}>Open chat with Slise Bot</button>
			</div>
		</>
	)
}
const TestPanel: React.FC<{ auth: AuthState, appAuth: AppAuthState }> = ({ auth, appAuth }) =>
{
	let tg = useTelegram()
	if (!tg)
		return <div style={auth.authed ? {} : { display: "none" }}>Loading...</div>

	return <TestPanelLoaded tg={tg} auth={auth} appAuth={appAuth} />
}

function App()
{
	let tg = useTelegram()
	let [authState, setAuthState] = useState<AuthState>({ authed: false })
	let [appAuthState, setAppAuthState] = useState<AppAuthState>({ authed: false })
	useEffect(() => tg?.events.subscribe("authStateChanged", state => setAuthState(state)), [tg, tg?.events, setAuthState])

	let [iframeVisible, setIframeVisible] = useState(true)

	let iframeVisibleCalculated =
		!authState.authed ? true :
		!appAuthState.authed ? false :
		iframeVisible

	return (
		<>
			<RootHeader />
			<RootMiddle>
				<RootLeft />
				<div style={iframeVisibleCalculated ? { width: "70%" } : { width: "0", visibility: "hidden" }}><iframe id="telegram-iframe" src={CONFIG.TG_IFRAME_URL}></iframe></div>
				<RootRight auth={authState} appAuth={appAuthState} />
			</RootMiddle>
			<RootFooter />
		</>
	)
}

export default App
