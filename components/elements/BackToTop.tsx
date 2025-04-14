interface BackToTopProps {
  scroll: number;
}

export default function BackToTop({ scroll }: BackToTopProps) {

    return (
        <>
            {scroll && (
                <a className="scroll-to-top scroll-to-target d-block" href="#top">
                    <i className="fas fa-angle-up"></i>
                </a>
            )}
        </>
    )
}