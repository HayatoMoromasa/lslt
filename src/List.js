import { useEffect } from 'react';

export const List = ({langs}) => {
     useEffect(() => {
         console.log('list: useEffect');
         return () => {
             console.log('unmount')
         }
     })
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

