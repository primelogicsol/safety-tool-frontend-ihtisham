import { useEffect, useState } from "react"

type ThemeType = "light-theme" | "dark-theme";

export default function ThemeSwitch() {
    const [togglETHeme, setTogglETHeme] = useState<ThemeType>(
        () => {
            const savedTheme = localStorage.getItem("togglETHeme");
            return savedTheme ? (JSON.parse(savedTheme) as ThemeType) : "light-theme";
        }
    )

    useEffect(() => {
        localStorage.setItem("togglETHeme", JSON.stringify(togglETHeme))
        document.body.classList.add(togglETHeme)
        return () => {
            document.body.classList.remove(togglETHeme)
        }
    }, [togglETHeme])

    return (
        <>
            <nav className="switcher__tab"
                onClick={() => togglETHeme === "light-theme" ? setTogglETHeme("dark-theme") : setTogglETHeme("light-theme")
                }
            >
                <span className="switcher__btn light-mode"><i className="flaticon-sun" /></span>
                <span className="switcher__mode" />
                <span className="switcher__btn dark-mode"><i className="flaticon-moon" /></span>
            </nav>
        </>
    )
}
