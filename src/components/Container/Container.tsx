import React from "react"
import { StyledContainer } from "./Container.style"

interface IContainerProps {
    children: React.ReactNode
}

export const Container = ({children}: IContainerProps) => {
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}