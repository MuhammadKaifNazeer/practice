import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div
      id="sidebar"
      data-testid="sidebar"
      className="fixed flex md:top-0 w-full transition-all md:sticky md:h-screen md:w-auto md:min-w-min mt-16 md:mt-0 z-0 opacity-100"
    >
      <div id="desktop" className="hidden md:block">
        <div className="flex h-screen w-full flex-col justify-start md:border-r border-grey-200 bg-white md:min-h-screen md:w-64 pb-40 md:pb-0 md:max-h-full overflow-y-auto">
          <div className="flex flex-col justify-between flex-1">
            <div className="flex flex-col pt-6 px-3">
              <div tabIndex={0} className="cursor-pointer z-30 relative">
                <button
                  className="group focus:outline-none flex h-full w-full cursor-pointer items-center text-left focus:ring-0"
                  title="Open settings menu"
                  id="headlessui-menu-button-4"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="flex justify-between items-center w-full group-hover:text-grey-800 text-grey-900">
                    <h2
                      className="line-clamp-1 pr-2 flex-1 text-left tracking-tightest font-semibold text-h2"
                      aria-label="Muhammad Kaif's Workspace"
                    >
                      Muhammad Kaif's Workspace
                    </h2>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.70711 4.29289C2.31658 3.90237 1.68342 3.90237 1.29289 4.29289C0.902369 4.68342 0.902369 5.31658 1.29289 5.70711L7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071L14.7071 5.70711C15.0976 5.31658 15.0976 4.68342 14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289L8 9.58579L2.70711 4.29289Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="mt-6">
                <h5
                  className="!text-grey-700 mb-2 text-left tracking-widest font-semibold text-h5"
                  aria-label="Teamspaces"
                >
                  Teamspaces
                </h5>
                <div
                  data-testid="teamspace-switcher-menu"
                  className="relative w-full"
                >
                  <button
                    className="p-3 rounded-lg bg-white border border-grey-300 flex w-full justify-between items-center cursor-pointer hover:shadow-sm"
                    id="headlessui-menu-button-3"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <h3
                      className="line-clamp-1 flex-1 pr-2 text-left tracking-wide font-semibold text-h3"
                      aria-label="Personal"
                      title="Personal"
                    >
                      Personal
                    </h3>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-sm text-grey-900"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.0303 4.28033L6.53033 8.78033C6.23744 9.07322 5.76256 9.07322 5.46967 8.78033L0.96967 4.28033C0.676777 3.98744 0.676777 3.51256 0.96967 3.21967C1.26256 2.92678 1.73744 2.92678 2.03033 3.21967L6 7.18934L9.96967 3.21967C10.2626 2.92678 10.7374 2.92678 11.0303 3.21967C11.3232 3.51256 11.3232 3.98744 11.0303 4.28033Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="my-5">
                <a className="relative" href="/teamspace/7698749/dashboard">
                  <button
                    data-testid="sidebar-dashboard"
                    aria-label="Home"
                    tabIndex={0}
                    className="group focus:outline-none select-none items-center rounded-lg font-semibold focus:ring-grey-300 hover:text-grey-900 text-md w-full py-3 px-3 hover:bg-grey-100 md:text-sm inline-flex border hover:border-grey-200 group-hover:text-grey-900 bg-grey-100 border-grey-200 text-grey-900 focus:shadow-none"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 !h-4 !w-4 !mr-1 group-hover:text-grey-900 text-grey-900"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.86896 0.382346C7.1935 0.135072 7.59036 0 8 0C8.40964 0 8.8065 0.135072 9.13104 0.382346L15.256 5.04901C15.4887 5.22631 15.6762 5.45512 15.8048 5.71644C15.9334 5.97769 16 6.26493 16 6.55556V14.1111C16 14.607 15.8062 15.0858 15.4564 15.4412C15.106 15.7971 14.6274 16 14.125 16H10.625C10.1226 16 9.64401 15.7971 9.29363 15.4412C8.94378 15.0858 8.75 14.607 8.75 14.1111V11.5556H7.25V14.1111C7.25 14.607 7.05622 15.0858 6.70637 15.4412C6.35599 15.7971 5.87741 16 5.375 16H1.875C1.3726 16 0.894006 15.7971 0.543629 15.4412C0.19378 15.0858 0 14.607 0 14.1111V6.55556C0 6.26493 0.0665742 5.97769 0.195163 5.71644C0.323779 5.45512 0.511263 5.2263 0.743957 5.04901L6.86896 0.382346ZM8 2.03496L2 6.60639V14H5.25V11.4444C5.25 10.9485 5.44378 10.4698 5.79363 10.1144C6.144 9.75845 6.62259 9.55556 7.125 9.55556H8.875C9.37741 9.55556 9.856 9.75845 10.2064 10.1144C10.5562 10.4698 10.75 10.9485 10.75 11.4444V14H14V6.60638L8 2.03496Z"
                        fill="currentColor"
                      />
                    </svg>
                    <h3
                      className="flex-nowrap whitespace-nowrap ml-2 flex-1 text-left tracking-wide font-semibold text-h3"
                      aria-label="Home"
                    >
                      Home
                    </h3>
                  </button>
                </a>
              </div>
              <div className="flex flex-col space-y-8">
                <div>
                  <h5
                    className="!text-grey-700 mb-2 text-left tracking-widest font-semibold text-h5"
                    aria-label="Pinned"
                  >
                    Pinned
                  </h5>
                  <div className="p-3 bg-grey-100 border border-grey-200 rounded-lg space-y-5">
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center justify-start space-x-3">
                        <span
                          className="block rounded-md h-8 w-8 flex items-center justify-center bg-yellow-400 text-white font-semibold text-sm flex-none"
                          aria-label="😎"
                        >
                          😎
                        </span>
                        <div className="flex flex-col">
                          <a
                            className="text-h3 font-semibold text-grey-900 line-clamp-1"
                            href="/pages/3587281"
                          >
                            Muhammad Kaif's Homepage
                          </a>
                          <span
                            className="text-xs text-grey-600"
                            aria-label="2 days ago"
                          >
                            2 days ago
                          </span>
                        </div>
                      </div>
                      <button
                        className="flex items-center justify-center p-1 hover:bg-grey-200 rounded-md"
                        type="button"
                        aria-label="More options"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6 7.33333C6.73638 7.33333 7.33333 6.73638 7.33333 6C7.33333 5.26362 6.73638 4.66667 6 4.66667C5.26362 4.66667 4.66667 5.26362 4.66667 6C4.66667 6.73638 5.26362 7.33333 6 7.33333ZM10.6667 7.33333C11.403 7.33333 12 6.73638 12 6C12 5.26362 11.403 4.66667 10.6667 4.66667C9.93029 4.66667 9.33333 5.26362 9.33333 6C9.33333 6.73638 9.93029 7.33333 10.6667 7.33333ZM2.66667 7.33333C3.40305 7.33333 4 6.73638 4 6C4 5.26362 3.40305 4.66667 2.66667 4.66667C1.93029 4.66667 1.33333 5.26362 1.33333 6C1.33333 6.73638 1.93029 7.33333 2.66667 7.33333Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-grey-100 border border-grey-200 rounded-lg space-y-5">
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center justify-start space-x-3">
                      <span
                        className="block rounded-md h-8 w-8 flex items-center justify-center bg-yellow-400 text-white font-semibold text-sm flex-none"
                        aria-label="😎"
                      >
                        😎
                      </span>
                      <div className="flex flex-col">
                        <a
                          className="text-h3 font-semibold text-grey-900 line-clamp-1"
                          href="/pages/3587281"
                        >
                          Muhammad Kaif's Homepage
                        </a>
                        <span
                          className="text-xs text-grey-600"
                          aria-label="2 days ago"
                        >
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <button
                      className="flex items-center justify-center p-1 hover:bg-grey-200 rounded-md"
                      type="button"
                      aria-label="More options"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 7.33333C6.73638 7.33333 7.33333 6.73638 7.33333 6C7.33333 5.26362 6.73638 4.66667 6 4.66667C5.26362 4.66667 4.66667 5.26362 4.66667 6C4.66667 6.73638 5.26362 7.33333 6 7.33333ZM10.6667 7.33333C11.403 7.33333 12 6.73638 12 6C12 5.26362 11.403 4.66667 10.6667 4.66667C9.93029 4.66667 9.33333 5.26362 9.33333 6C9.33333 6.73638 9.93029 7.33333 10.6667 7.33333ZM2.66667 7.33333C3.40305 7.33333 4 6.73638 4 6C4 5.26362 3.40305 4.66667 2.66667 4.66667C1.93029 4.66667 1.33333 5.26362 1.33333 6C1.33333 6.73638 1.93029 7.33333 2.66667 7.33333Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 space-y-3">
            <button
              className="group focus:outline-none select-none items-center rounded-lg font-semibold focus:ring-grey-300 hover:text-grey-900 text-md w-full py-3 px-3 hover:bg-grey-100 md:text-sm inline-flex border hover:border-grey-200 group-hover:text-grey-900 bg-grey-100 border-grey-200 text-grey-900 focus:shadow-none"
              aria-label="Create new page"
              type="button"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 !h-4 !w-4 !mr-1 group-hover:text-grey-900 text-grey-900"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.99992 0.666656C8.3681 0.666656 8.66659 0.965147 8.66659 1.33333V7.33333H14.6666C15.0348 7.33333 15.3333 7.63182 15.3333 8C15.3333 8.36818 15.0348 8.66667 14.6666 8.66667H8.66659V14.6667C8.66659 15.0348 8.3681 15.3333 7.99992 15.3333C7.63173 15.3333 7.33325 15.0348 7.33325 14.6667V8.66667H1.33325C0.965065 8.66667 0.666588 8.36818 0.666588 8C0.666588 7.63182 0.965065 7.33333 1.33325 7.33333H7.33325V1.33333C7.33325 0.965147 7.63173 0.666656 7.99992 0.666656Z"
                  fill="currentColor"
                />
              </svg>
              Create new page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
