import { useEffect } from 'react'

export default function DataBg() {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>('[data-bg]')

        elements.forEach((element) => {
            const bgUrl = element.getAttribute('data-bg');
            if (bgUrl) {
                element.style.backgroundImage = `url(${bgUrl})`;
            }
        })
    }, [])
    return (
        <>

        </>
    )
}