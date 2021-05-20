import React, { Fragment } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Container from "./Container";
import NavigationDropdown from "./NavigationDropdown";
import NavigationLink from "./NavigationLink";

function Component() {
  const data = useStaticQuery(graphql`
    {
      navigation: settingYaml(slug: { eq: "navigation" }) {
        title
        links {
          text
          url
          type
          links {
            text
            url
          }
        }
      }
    }
  `);
  const { navigation } = data;

  return (
    <nav>
      <Container layout="sm">
        <div className="border-b">
          <Popover className="relative bg-white">
            {({ open }) => (
              <>
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link to="/">
                      <h1 className="text-3xl font-bold tracking-tight leading-tight text-gray-700 hover:text-gray-800 transition ease-in-out duration-150">
                        {navigation.title}
                      </h1>
                    </Link>
                  </div>
                  <div className="md:hidden">
                    <Popover.Button className="bg-white border-2 border-gray-100 rounded-md px-2 py-1.5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                      <span className="sr-only">Menü öffnen</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Popover.Group as="nav" className="hidden md:flex space-x-4">
                    {navigation.links &&
                      navigation.links.map((link) => {
                        if (link.type === "link")
                          return <NavigationLink key={link.text} link={link} />;
                        if (link.type === "links")
                          return <NavigationDropdown key={link.text} link={link} />;
                        return "?";
                      })}
                  </Popover.Group>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 pt-2 transition transform origin-top-right z-40 md:hidden"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                      <div className="pt-4 pb-6 px-5">
                        <div className="flex items-center justify-between border-b pb-2">
                          <Link to="/">
                            <h1 className="text-3xl font-bold tracking-tight leading-tight text-gray-700 hover:text-gray-800 transition ease-in-out duration-150">
                              {navigation.title}
                            </h1>
                          </Link>
                          <div className="">
                            <Popover.Button className="bg-white rounded-md border-2 border-gray-100 px-2 py-1.5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                              <span className="sr-only">Menü schließen</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="mt-6 space-y-4">
                          {navigation.links &&
                            navigation.links.map((link) => {
                              if (link.type === "link")
                                return <NavigationLink key={link.text} link={link} />;
                              if (link.type === "links")
                                return <NavigationDropdown key={link.text} link={link} />;
                              return "?";
                            })}
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </Container>
    </nav>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
