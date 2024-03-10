import React from "react"

type ButtonProps = {}

export const Button: React.FCC<ButtonProps> = (props) => {
	return <div>{props.children}</div>
}
