import { Helmet } from "react-helmet"

export const PageLayout = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </>
    )
}
