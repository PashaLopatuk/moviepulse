import React from 'react'

import {redirect} from "next/navigation";
import {twMerge} from 'tailwind-merge';

import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';

export default function SidebarNavigationMenu(
  {
    routes,
    className,
  }: {
    routes: any;
    className?: string;
  }) {
  return (
    <div className={twMerge('flex flex-col gap-2', className)}>
      {routes.map((route, index, arr) => {
        if (!route.nested) {
          return (
            <React.Fragment key={route.name}>
              <Button
                variant="ghost"
                className="justify-start"
                key={route.name}
                onClick={() => {
                  redirect(route.route ?? '')
                }}
              >
                {route.name}
              </Button>

              {index + 1 != arr.length && (
                <Separator className="mx-4 border-[1px]"/>
              )}
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={route.name}>
              <div className="flex flex-col gap-2">
                {route.nested.map((nestedRoute) => {
                  return (
                    <Button
                      variant="ghost"
                      className="justify-start"
                      key={nestedRoute.name}
                      onClick={() => {

                      }}
                    >
                      {nestedRoute.name}
                    </Button>
                  );
                })}
                {index + 1 != arr.length && (
                  <Separator className="mx-4 border-[1px]"/>
                )}
              </div>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
}
