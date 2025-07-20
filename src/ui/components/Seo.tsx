interface Props {
    title: string;
    description: string;
}

export const Seo = ({title, description}: Props) => {
    return (
        <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport"
            content="width=device=width, initial-scale=1" />
        </>
    )
}