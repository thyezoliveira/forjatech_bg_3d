import { useEffect, useState } from "react";
import styled from "styled-components";

const MainStyled = styled.main`
    svg {
        position: absolute;
        width: 0;
        height: 0;
    }

    /* Div com filtro semitransparente */
    .filter-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.3);
        z-index: 10;
        backdrop-filter: blur(0px);
        filter: url(#chromatic-aberration);
        pointer-events: none;
        box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.4);
    }
`;

export default function Filtro() {
    const [intensity] = useState(4.4);
    const [opacity] = useState(5);

    useEffect(() => {
        const filter = document.querySelector('#chromatic-aberration');
        if (!filter) return;

        const redOffset = filter.querySelector('feOffset[result="red-offset"]');
        const blueOffset = filter.querySelector('feOffset[result="blue-offset"]');
        
        if (redOffset && blueOffset) {
            redOffset.setAttribute('dx', -intensity);
            blueOffset.setAttribute('dx', intensity);
        }
    }, [intensity]);

    return (
        <MainStyled>
            <div 
                className="filter-overlay"
                style={{ background: `rgba(255, 255, 255, ${opacity / 100})` }}
            />

            {/* SVG Filter */}
            <svg>
                <defs>
                    <filter id="chromatic-aberration">
                        <feOffset in="SourceGraphic" dx="-3" dy="0" result="red-offset"/>
                        <feColorMatrix in="red-offset" type="matrix" 
                            values="1 0 0 0 0
                                    0 0 0 0 0
                                    0 0 0 0 0
                                    0 0 0 1 0" result="red-channel"/>
                        <feColorMatrix in="SourceGraphic" type="matrix" 
                            values="0 0 0 0 0
                                    0 1 0 0 0
                                    0 0 0 0 0
                                    0 0 0 1 0" result="green-channel"/>
                        <feOffset in="SourceGraphic" dx="3" dy="0" result="blue-offset"/>
                        <feColorMatrix in="blue-offset" type="matrix" 
                            values="0 0 0 0 0
                                    0 0 0 0 0
                                    0 0 1 0 0
                                    0 0 0 1 0" result="blue-channel"/>
                        <feBlend in="red-channel" in2="green-channel" mode="screen" result="rg"/>
                        <feBlend in="rg" in2="blue-channel" mode="screen"/>
                    </filter>
                </defs>
            </svg>
        </MainStyled>
    );
}