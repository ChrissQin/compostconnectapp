"use client"

import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <div className="flex flex-1 items-center">
            <Link href="/" className="flex items-center space-x-3 mr-8">
              <Image
                src="/images/logo.png"
                alt="CompostConnect Logo"
                width={160}
                height={53}
                className="h-10 w-auto"
                priority
              />
              <span className="text-lg font-semibold text-gray-900">CompostConnect</span>
            </Link>

            <div className="flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-medium px-0 py-1.5">Product</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        <li className="p-2 hover:bg-gray-50">Smart Sensors</li>
                        <li className="p-2 hover:bg-gray-50">AI Analytics</li>
                        <li className="p-2 hover:bg-gray-50">Educational Tools</li>
                        <li className="p-2 hover:bg-gray-50">Waste Management</li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-medium px-0 py-1.5">Learn</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[200px] p-4">
                        <li>
                          <Link href="/blog" className="block p-2 hover:bg-gray-50">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link href="/guides" className="block p-2 hover:bg-gray-50">
                            Guides
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link href="/pricing" className="text-base font-medium">
                Pricing
              </Link>

              <Link href="/reviews" className="text-base font-medium">
                Reviews
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/contact" className="text-base font-medium text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Button className="text-base bg-[#4CAF50] hover:bg-[#45a049]">Get Started</Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

