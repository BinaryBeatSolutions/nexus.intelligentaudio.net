"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Accessibility, Zap } from "lucide-react"

export const Navbar = () => {
    const { theme, setTheme } = useTheme()
   //const [mounted, setMounted] = useState(false)

    // Viktigt: Vänta på att klienten har laddat för att undvika Hydration Error
    //useEffect(() => {
    //    setMounted(true)
    //}, [])

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-300 bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <span className="text-xl font-bold tracking-tighter">
                        NEXUS<span className="text-primary">.</span>
                    </span>
                </div>

                {/* THEME TOGGLE */}
                <div className="flex items-center gap-4">
                    {/*{!mounted ? (*/}
                    {/*    // Placeholder med samma storlek för att undvika Layout Shift*/}
                    {/*    <div className="w-[140px] h-9" />*/}
                    {/*) : (*/}
                    {/*    <Button*/}
                    {/*        variant="outline"*/}
                    {/*        size="sm"*/}
                    {/*        onClick={() => setTheme(theme === "contrast" ? "light" : "contrast")}*/}
                    {/*        className="border-2 border-foreground contrast:border-primary font-bold gap-2 text-xs transition-all"*/}
                    {/*    >*/}
                    {/*        <Accessibility className="w-4 h-4" />*/}
                    {/*        {theme === "contrast" ? "Standard Visning" : "Høykontrast"}*/}
                    {/*    </Button>*/}
                    {/*)}*/}
                </div>
            </div>
        </nav>
    )
}
