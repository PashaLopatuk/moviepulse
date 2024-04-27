import Link from "next/link";

import {BurgerIcon, LogoIcon} from '@/shared/assets/icons'
import {Sheet, SheetContent, SheetHeader, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import SidebarNavigationMenu from "@/components/layout/Sidebar";
import {ThemeSwitcher} from "@/components/ThemeSwitcher";
import React from "react";

const Header = () => {
  return (
    <header
      className="sticky px-4 py-2 top-0 backdrop-blur-md  border-b-2 border-border flex justify-between items-center gap-2 z-50"
    >
      <div className="flex items-center justify-between w-full">
        <Link className="" href={'/'}>
          <LogoIcon className={'h-10 w-10'}/>
        </Link>

        <nav>
          {/*{routes.length !== 0 && (*/}
          {/*  <div className="hidden sm:block">*/}
          {/*    */}
          {/*  </div>*/}
          {/*)}*/}
        </nav>

        <div className="flex gap-2">
          <ThemeSwitcher/>
          <Sheet>
            <SheetTrigger className="sm:hidden" asChild>
              <Button variant="ghost">
                <BurgerIcon className={'min-w-14 min-h-14'} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] sm:w-[540px]"
            >
              <SheetHeader
                className={'text-start'}
              >
                <h2
                  className="font-extrabold text-2xl lg:text-7xl bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent"
                >MoviePulse</h2>
              </SheetHeader>
              <SidebarNavigationMenu routes={[] as any[]} className="pt-8"/>
            </SheetContent>
          </Sheet>
        </div>


      </div>
    </header>


  )
}

export default Header;