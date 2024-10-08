import "./reset.scss"
import type {Metadata} from 'next'
import {Lora} from 'next/font/google'
import React from "react";
import {ThemeProvider} from "@/components/theme-provider";

const lora = Lora({
    subsets: ['latin'],
    weight: '500',
});

export const metadata: Metadata = {
    title: 'Храм свт. Иоанна Златоуста на Поликуровском холме, г.Ялта',
    description: 'Храм свт. Иоанна Златоуста на Поликуровском холме, г.Ялта',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={lora.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
