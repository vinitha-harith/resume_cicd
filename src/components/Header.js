import { Fragment } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
// import { ReactComponent as Logo } from "../images/Logo.svg";

const navigation = [
  { name: "Vinitha Sivaraman", href: "/Home" },
  { name: "Profile", href: "/Profile" },
  { name: "Professional Experience", href: "/Experience" },
  { name: "Site Architecture", href: "/Architecture" },
  //  { name: "Location", href: "/Location" },
  { name: "About Me", href: "/Personal" }
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Header(props) {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          style={{
                            color:
                              item.name === "Vinitha Sivaraman"
                                ? "#f08"
                                : "white"
                          }}
                          className={({ isActive }) => {
                            return (
                              "px-3 py-2 rounded-md text-sm font-bold no-underline " +
                              (!isActive
                                ? " text-gray-300 hover:bg-gray-700 hover:text-white"
                                : "bg-gray-900 text-white") +
                              (!isActive && item.name !== "Vinitha Sivaraman"
                                ? " text-gray-300 hover:bg-gray-700 hover:text-white"
                                : "bg-gray-900")
                            );
                          }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <NavLink to={"/personal"}>
                          <img
                            className="h-10 w-9 rounded-full"
                            src="images/VS.jpg"
                            alt=""
                          />
                        </NavLink>
                      </Menu.Button>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    as="a"
                    to={item.href}
                    className={({ isActive }) => {
                      return (
                        "block px-3 py-2 rounded-md text-base font-bold no-underline " +
                        (!isActive
                          ? " text-gray-300 hover:bg-white-700 hover:text-white"
                          : "bg-white-900 text-white")
                      );
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="bg-white-300">
        <div className="max-w-7xl mx-auto min-h-screen px-3 py-2">
          {props.children}
        </div>
      </div>
    </>
  );
}
