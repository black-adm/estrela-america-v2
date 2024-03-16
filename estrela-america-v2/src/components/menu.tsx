'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Box,
  BriefcaseIcon,
  Coffee,
  Cpu,
  Gift,
  NotebookPen,
  Timer,
  UtensilsCrossed,
  Vegan,
} from 'lucide-react'
import { Button } from './ui/button'

export function Menu() {
  return (
    <>
      <div className="pb-2 max-w-full h-auto">
        <div className="mx-auto max-w-6xl flex justify-center items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Button className="bg-transparent text-white text-xs hover:bg-orange-300 hover:text-black focus:bg-orange-300 focus:text-black">
                  <div className="flex items-center gap-1.5">
                    <Vegan className="size-4" />
                    Beleza
                  </div>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className="bg-transparent text-white text-xs hover:bg-orange-300 hover:text-black focus:bg-orange-300 focus:text-black">
                  <div className="flex items-center gap-1.5">
                    <Gift className="size-4" />
                    Brindes
                  </div>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className="bg-transparent text-white text-xs hover:bg-orange-300 hover:text-black focus:bg-orange-300 focus:text-black">
                  <div className="flex items-center gap-1.5">
                    <BriefcaseIcon className="size-4" />
                    Bolsas e mochilas
                  </div>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className="bg-transparent text-white text-xs hover:bg-orange-300 hover:text-black focus:bg-orange-300 focus:text-black">
                  <div className="flex items-center gap-1.5">
                    <Coffee className="size-4" />
                    Canecas e garrafas
                  </div>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className="bg-transparent text-white text-xs hover:bg-orange-300 hover:text-black focus:bg-orange-300 focus:text-black">
                  <div className="flex items-center gap-1.5">
                    <UtensilsCrossed className="size-4" />
                    Casa e cozinha
                  </div>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className="bg-transparent text-white text-xs hover:bg-orange-300 hover:text-black focus:bg-orange-300 focus:text-black">
                  <div className="flex items-center gap-1.5">
                    <NotebookPen className="size-4" />
                    Papelaria
                  </div>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className="bg-transparent text-white text-xs hover:bg-orange-300 hover:text-black focus:bg-orange-300 focus:text-black">
                  <div className="flex items-center gap-1.5">
                    <Timer className="size-4" />
                    Relógios
                  </div>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className="bg-transparent text-white text-xs hover:bg-orange-300 hover:text-black focus:bg-orange-300 focus:text-black">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="size-4" />
                    Tecnologia
                  </div>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className="bg-transparent text-white text-xs hover:bg-orange-300 hover:text-black focus:bg-orange-300 focus:text-black">
                  <div className="flex items-center gap-1.5">
                    <Box className="size-4" />
                    Utilidades
                  </div>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  )
}
