import * as React from 'react';

interface LogoIconProps {
    className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = (props: LogoIconProps) => (
    <svg className={props.className} width="118" height="20" viewBox="0 0 118 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
        <path class="cls-1" d="M37.4,0.019H0.118V41.972L24.932,64.355V23.639H38.181c8.421,0,12.575,4.049,12.575,10.573V65.367c0,6.523-3.93,10.91-12.575,10.91H0.005v23.732H37.283c19.986,0.113,38.737-9.9,38.737-32.842V33.649C76.132,10.254,57.381.019,37.4,0.019h0Z" transform="translate(0 -0.031)" fill="#FFF"/>
    </svg>

);
