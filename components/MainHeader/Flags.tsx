import { memo } from 'react';
// Georgian flag
export const GeorgianFlag = memo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="20" height="15">
            <rect width="60" height="30" fill="#fff" />
            <rect x="26" width="8" height="30" fill="#d40000" />
            <rect y="11" width="60" height="8" fill="#d40000" />
            <g fill="#d40000">
                <path d="M7 4 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z" />
                <path d="M51 4 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z" />
                <path d="M7 18 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z" />
                <path d="M51 18 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z" />
            </g>
        </svg>);
});

GeorgianFlag.displayName = "GeorgianFlag";

// Russian flag
export const RussianFlag = memo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="20" height="15">
            <rect width="60" height="10" fill="#fff" />
            <rect y="10" width="60" height="10" fill="#0033a0" />
            <rect y="20" width="60" height="10" fill="#d52b1e" />
        </svg>);

});
RussianFlag.displayName = "RussianFlag";

// USA flag
export const UsaFlag = memo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" width="20" height="15">
            <rect width="7410" height="3900" fill="#b22234" />
            <g fill="#fff">
                <rect width="7410" height="300" y="300" />
                <rect width="7410" height="300" y="900" />
                <rect width="7410" height="300" y="1500" />
                <rect width="7410" height="300" y="2100" />
                <rect width="7410" height="300" y="2700" />
                <rect width="7410" height="300" y="3300" />
            </g>
            <rect width="2964" height="2100" fill="#3c3b6e" />
            <g fill="#fff">
                {Array.from({ length: 9 }).map((_, row) => (
                    Array.from({ length: row % 2 === 0 ? 6 : 5 }).map((_, col) => (
                        <polygon
                            key={`${row}-${col}`}
                            points="140,0 54,218 225,84 55,84 226,218"
                            transform={`translate(${col * 494 + (row % 2 === 0 ? 0 : 247)}, ${row * 233}) scale(0.4)`}
                        />
                    ))
                ))}
            </g>
        </svg>);
});
UsaFlag.displayName = "UsaFlag";