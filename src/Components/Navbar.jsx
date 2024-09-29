import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';


const navigation = [
  { name: 'Hero', href: '#hero', current: true },
  { name: 'Graphs', href: '#visuals', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function scrollToSection(event, id) {
  event.preventDefault();
  const targetElement = document.querySelector(id); // Select the element with the ID
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to it
  } else {
    console.error(`Element with id ${id} not found.`);
  }
}


export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black shadow-lg w-full">
      <div className="px-8 mx-auto my-5 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center w-full">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </motion.div>
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-between w-full">
            <div className="flex flex-shrink-0 items-center mx-1">
              <motion.span
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.75 }}
                className='text-5xl lg:ml-5 text-blue-300 font-bold'
              >
                Team Capslock
              </motion.span>
            </div>
            <div className="hidden sm:flex sm:ml-auto">
              <div className="flex space-x-3">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white text-2xl' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-2xl font-medium',
                    )}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 60 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <motion.div
              key={item.name}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <DisclosureButton
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium md:mr-3 sm:mr-1',
                )}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </DisclosureButton>
            </motion.div>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
