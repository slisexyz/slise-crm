import React, { useContext, useEffect, useMemo, useRef, useState } from "react"
import { Requester, Responder } from "jsonrpc-iframe"
import { CONFIG } from "../config"

import { Actions, Methods, Custom, Events } from "./types"
import { useInterval } from "usehooks-ts"

export type TelegramWindowContextType = {
	actions: Requester<Actions>,
	methods: Requester<Methods>,
	custom: Requester<Custom>,
	events: Responder<Events>
	iframe: HTMLIFrameElement,
}
export const TelegramWindowContext = React.createContext<TelegramWindowContextType | undefined>(undefined)
// export const TelegramIframeContext = React.createContext<HTMLIFrameElement>((() =>
// {
// 	let iframe = document.createElement("iframe")
// 	iframe.src = CONFIG.TG_FRAME_ORIGIN
// 	iframe.className = "iframe-telegram"
// 	iframe.style.display = "none"
// 	document.body.appendChild(iframe)
// 	return iframe
// })())

// export const TelegramIframeContext = React.createContext<React.RefObject<HTMLIFrameElement> | undefined>(undefined)

// export const TelegramIframeProvider: React.FC<React.PropsWithChildren> = ({ children }) =>
// {
// 	console.log("TelegramIframeProvider")
// 	let iframe = useRef<HTMLIFrameElement>(null)
// 	return (
// 		<TelegramIframeContext.Provider value={iframe}>
// 			{children}
// 		</TelegramIframeContext.Provider>
// 	)
// }
// export function useTelegramIframeRef()
// {
// 	const ref = React.useContext(TelegramIframeContext)
// 	return ref
// }

function getTelegramIframe()
{
	return document.querySelector<HTMLIFrameElement>("iframe#telegram-iframe")
}
export const TelegramWindowProvider: React.FC<React.PropsWithChildren> = ({ children }) =>
{
	let [iframe, setIframe] = useState(getTelegramIframe())

	useInterval(() =>
	{
		let newIframe = getTelegramIframe()
		if (iframe != newIframe)
			setIframe(newIframe)
	}, iframe?.contentWindow ? null : 100)

	const args = useMemo(() =>
	{
		if (!iframe || !iframe.contentWindow)
			return undefined

		const actions = new Requester<Actions>("actions", iframe.contentWindow, CONFIG.TG_FRAME_ORIGIN)
		const methods = new Requester<Methods>("methods", iframe.contentWindow, CONFIG.TG_FRAME_ORIGIN)
		const custom = new Requester<Custom>("custom", iframe.contentWindow, CONFIG.TG_FRAME_ORIGIN)
		const events = new Responder<Events>("events", CONFIG.TG_FRAME_ORIGIN)

		return ({
			actions,
			methods,
			custom,
			events,
			iframe,
		})
	}, [iframe, iframe?.contentWindow])
	console.log("TelegramWindowProvider", iframe, args)
	return (
		<TelegramWindowContext.Provider value={args}>
			{children}
		</TelegramWindowContext.Provider>
	)
}

// export function useTelegramWindowRef<T extends HTMLElement>()
// {
// 	const context = React.useContext(TelegramWindowContext)
// 	const ref = useRef<T>(null)
// 	useEffect(() =>
// 	{
// 		console.log("useTelegramWindowRef", ref.current, context?.iframe)
// 		if (!context?.iframe)
// 			return

// 		if (!ref.current)
// 		{
// 			context.iframe.style.display = "none"
// 			document.body.appendChild(context.iframe)
// 			return
// 		}

// 		context.iframe.style.display = ""

// 		if (context.iframe.parentElement == ref.current)
// 			return

// 		ref.current.appendChild(context.iframe)
// 	}, [ref.current])
// 	return ref
// }

export function useTelegram()
{
	const context = React.useContext(TelegramWindowContext)
	return context
}
