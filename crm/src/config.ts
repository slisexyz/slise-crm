export const DEV_LOCALHOST = window.location.hostname == 'localhost'

export const CONFIG = DEV_LOCALHOST ? {
	TG_FRAME_ORIGIN: "http://localhost:1234",
	TG_IFRAME_URL: "http://localhost:1234",
	MAIN_FRAME_ORIGIN: "http://localhost:5173",
} : {
	TG_FRAME_ORIGIN: "https://slise-telegram.pages.dev",
	TG_IFRAME_URL: "https://slise-telegram.pages.dev",
	MAIN_FRAME_ORIGIN: "http://slise-crm.pages.dev",
}
