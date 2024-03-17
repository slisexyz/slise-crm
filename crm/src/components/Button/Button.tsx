import React from "react"
import { css } from "../../../styled-system/css"
import { token } from "../../../styled-system/tokens"
import { styled } from "../../../styled-system/jsx"

type ButtonProps = {}

export const Button: React.FCC<ButtonProps> = (props) => {
	return <div>{props.children}</div>
}
