import {
  useAuthenticationStatus,
  useProviderLink,
  useSignOut,
  useUserData,
} from "@nhost/react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export function NavBar() {
  return (
    <div className="sticky top-0 flex border-b border-gray-200 bg-white px-2 py-1">
      <div className="flex-grow"></div>
      <NavBarDropdown />
    </div>
  );
}

function NavBarDropdown() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const { github } = useProviderLink();
  const { signOut } = useSignOut();
  const user = useUserData();

  return (
    <Menu>
      <Menu.Button>
        <img src={user?.avatarUrl} className="h-12" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active ? "bg-violet-500 text-white" : "text-gray-900"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) =>
              isAuthenticated ? (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={signOut}
                >
                  Sign Out
                </button>
              ) : (
                <a
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  href={github}
                >
                  Sign in
                </a>
              )
            }
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
