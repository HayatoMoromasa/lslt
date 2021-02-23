export const List = ({langs}) => {
    return (
        <div>
            {
                langs.map((lang,index) => {
                    return <p key={index}>{lang}</p>
                })
            }
        </div>
    )
}

