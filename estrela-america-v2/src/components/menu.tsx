'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Box,
  Cpu,
  Gift,
  NotebookPen,
  Timer,
  UtensilsCrossed,
  Vegan,
} from 'lucide-react'

const components: { title: string; href: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
  },
]

export function Menu() {
  return (
    <>
      <div className="py-3 max-w-full h-auto">
        <div className="mx-auto max-w-6xl flex justify-center items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-sky-200 focus:bg-sky-200">
                  <div className="flex items-center gap-1.5">
                    <Vegan className="h-5 w-5" />
                    Beleza
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex justify-center">
                  <ul className="flex flex-col w-60 gap-3 p-4">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-sky-200 focus:bg-sky-200">
                  <div className="flex items-center gap-1.5">
                    <Gift className="h-5 w-5" />
                    Brindes
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex justify-center">
                  <ul className="flex flex-col w-60 gap-3 p-4">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-sky-200 focus:bg-sky-200">
                  <div className="flex items-center gap-1.5">
                    <UtensilsCrossed className="h-5 w-5" />
                    Casa e cozinha
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex justify-center">
                  <ul className="flex flex-col w-60 gap-3 p-4">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-sky-200 focus:bg-sky-200">
                  <div className="flex items-center gap-1.5">
                    <NotebookPen className="h-5 w-5" />
                    Papelaria
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex justify-center">
                  <ul className="flex flex-col w-60 gap-3 p-4">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-sky-200 focus:bg-sky-200">
                  <div className="flex items-center gap-1.5">
                    <Timer className="h-5 w-5" />
                    Relógios
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex justify-center">
                  <ul className="flex flex-col w-60 gap-3 p-4">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-sky-200 focus:bg-sky-200">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="h-5 w-5" />
                    Tecnologia
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex justify-center">
                  <ul className="flex flex-col w-60 gap-3 p-4">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-sky-200 focus:bg-sky-200">
                  <div className="flex items-center gap-1.5">
                    <Box className="h-5 w-5" />
                    Utilidades
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex">
                  <ul className="flex flex-col w-60 gap-3 p-4">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
