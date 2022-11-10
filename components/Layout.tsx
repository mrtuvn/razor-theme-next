import React from "react"

type Props = {
    children?: any
}

export const Layout = () :React.FC<Props> = ({
    children
}) => {
    return (
        <div>Inner leaf</div>
        {children}
    )
}
