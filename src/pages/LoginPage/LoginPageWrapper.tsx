import React from "react"
import { StyledLoginPage } from "./LoginPage.style"

interface ILoginPageWrapperProps {
    children: React.ReactNode
}
export const LoginPageWrapper = ({children}: ILoginPageWrapperProps) => {
    return (
        <StyledLoginPage>
            {children}
        </StyledLoginPage>
    )
}