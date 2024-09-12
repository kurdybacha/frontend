import Link from "next/link"
import Image from "next/image"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { Fragment } from "react"
import links from "../lib/links"

const Header = () => (
  <nav className="container mx-auto w-full z-30 xl:px-32">
    <Popover className="container mx-auto flex items-center justify-between py-6">
      <Link href="/">
        <a className="flex items-center">
          <img src="/header/logo.svg" />
        </a>
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex md:items-center space-x-0 text-redrose">
        <Link href={links.twitter}>
          <a target="_blank">
            <div className="text-white mr-8 lg:mr-16">Twitter</div>
          </a>
        </Link>
        <Link href={links.discord}>
          <a target="_blank">
            <div className="flex w-24 h-10 bg-[#BAC4FA] rounded-sm justify-center items-center font-semibold">
              Discord
            </div>
          </a>
        </Link>
      </div>
      {/* Mobile Navigation */}
      <div className="-mr-2 flex items-center lg:hidden">
        <Popover.Button className="stroke-white text-white rounded-md p-2 inline-flex items-center justify-center hover:text-[#FEDB9E] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open main menu</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link href="/">
                  <a className="flex items-center gap-x-4">
                    <Image src="/logo.svg" width="60" height="60" alt="" />
                    <Image
                      src="/hyperscale.svg"
                      width="150"
                      height="80"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href={links.twitter}>
                <a target="_blank">
                  <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Twitter
                  </div>
                </a>
              </Link>
              <Link href={links.discord}>
                <a target="_blank">
                  <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Discord
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  </nav>
)

export default Header
