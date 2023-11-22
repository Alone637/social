import React from "react"
import { StyledButton } from "./AppButton.style"

interface IAppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonLabel: string
    isPrimary: boolean
}

export const AppButton = ({buttonLabel, type, isPrimary}: IAppButtonProps) => {
    return (
        <StyledButton type={type} className={isPrimary ? "primary" : "secondary"}>
            {buttonLabel}
        </StyledButton>
    )
}
