import React from 'react';
import Link from "next/link";
import Logo from "@/components/icons/Logo";
import {Sheet, SheetContent, SheetHeader, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";

import SidebarNavigationMenu from "@/components/layout/Sidebar";
import {Input} from "@/components/ui/input";

const Header = () => {
  return (

    <header
      className="sticky px-8 py-2 top-0 backdrop-blur-md  border-b-2 border-border flex justify-between items-center gap-2 z-50"
    >
      <div className="flex items-center justify-between ">
        <Link className="hidden md:block" href={'/'}>
          <Logo className={'h-10 w-10'}/>
        </Link>
        <Sheet>
          <SheetTrigger className="sm:hidden " asChild>
            <Button variant="secondary">
              {/*<RxHamburgerMenu />*/}
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[540px] ">
            <SheetHeader>
              <Logo/>
            </SheetHeader>
            <SidebarNavigationMenu routes={[] as any} className="pt-8"/>
          </SheetContent>
        </Sheet>
        <nav>
          link
        </nav>

        {/*{routes.length !== 0 && (*/}
        {/*  <div className="hidden sm:block">*/}
        {/*    */}
        {/*  </div>*/}
        {/*)}*/}
      </div>
      {/*<Input*/}
      {/*  placeholder={'search'}*/}
      {/*  className="bg-background flex items-center gap-4 w-full max-w-[400px]"*/}
      {/*/>*/}
    </header>


  )
}

export default Header;