"use client"
import { Raleway } from 'next/font/google';
const raleway = Raleway({
    subsets: ['latin'],
    weight: ['300']
})

import { CSSReset } from '../public/CSSReset.js'


export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <title>Ajuste de iluminação - bora codar 24</title>
            </head>
            <body suppressHydrationWarning={true} >
                <div className={raleway.className}>
                    <CSSReset />
                    {children}
                </div>
            </body>
        </html>
    );
}