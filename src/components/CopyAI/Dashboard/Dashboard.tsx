import React from "react";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <div
        className="flex w-full flex-wrap"
        style={{ maxWidth: "calc(100% - 256px)" }}
      >
        <div
          className="top-0 w-full max-w-full self-start text-grey-900 md:pt-0 pt-14"
          style={{ minHeight: "calc(100vh - 60px)", height: "auto" }}
        >
          <div className="flex flex-1 flex-col">
            <div className="flex h-full flex-1">
              <div className="flex max-w-full flex-1 flex-col ">
                <div className="flex flex-1 justify-center px-6 py-8 duration-500 pt-16">
                  <div className="flex w-full flex-1 flex-col max-w-screen-xl mx-auto">
                    <div className="space-y-12 pb-12">
                      <h1
                        className="!text-3xl !font-bold !text-grey-900 text-left tracking-wide font-semibold text-h1"
                        aria-label="Personal"
                      >
                        Personal
                      </h1>
                      <div>
                        <h2
                          className="mb-8 !text-grey-900 text-left tracking-tightest font-semibold text-h2"
                          aria-label="Get started with Chat"
                        >
                          Get started with Chat
                        </h2>
                        <div className="mt-2 grid grid-cols-12 gap-5">
                          <div className="col-span-12 lg:col-span-6 xl:col-span-4 overflow-hidden rounded-xl border border-grey-300">
                            <div className="h-80 cursor-pointer flex flex-col max-w-2xl relative duration-200 bg-center hover:shadow-card bg-grey-200">
                              <div className="absolute top-3 right-3 bg-white flex items-center justify-center rounded-full h-6 w-6 shadow-card cursor-pointer duration-200 hover:bg-white/25">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="text-grey-600 h-3 w-3"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.7071 3.70711C14.0976 3.31658 14.0976 2.68342 13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289L8 6.58579L3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L6.58579 8L2.29289 12.2929C1.90237 12.6834 1.90237 13.3166 2.29289 13.7071C2.68342 14.0976 3.31658 14.0976 3.70711 13.7071L8 9.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L9.41421 8L13.7071 3.70711Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                              <div
                                className="h-40 bg-no-repeat bg-center"
                                style={{
                                  backgroundImage:
                                    "url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgwIiBoZWlnaHQ9IjE1NiIgdmlld0JveD0iMCAwIDM4MCAxNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iMTU2IiBmaWxsPSIjRTRFREYxIi8+CjxwYXRoIGQ9Ik0zMTkuMDMyIDU3LjExNThIMzIxLjk5QzMyMy4yODIgNTcuMTE1OCAzMjQuMzMgNTguMTI2NyAzMjQuMzMgNTkuMzczNlYxMzguNDE0QzMyNC4zMyAxNDAuOTU5IDMyMi4xOTEgMTQzLjAyMyAzMTkuNTUyIDE0My4wMjNIMjExLjA4NUMyMDkuNzkyIDE0My4wMjMgMjA4Ljc0NSAxNDIuMDEyIDIwOC43NDUgMTQwLjc2NVYxMzcuMTQyIiBmaWxsPSIjRTBFOEVDIi8+CjxwYXRoIGQ9Ik0zMTkuMDMyIDU3LjExNThIMzIxLjk5QzMyMy4yODIgNTcuMTE1OCAzMjQuMzMgNTguMTI2NyAzMjQuMzMgNTkuMzczNlYxMzguNDE0QzMyNC4zMyAxNDAuOTU5IDMyMi4xOTEgMTQzLjAyMyAzMTkuNTUyIDE0My4wMjNIMjExLjA4NUMyMDkuNzkyIDE0My4wMjMgMjA4Ljc0NSAxNDIuMDEyIDIwOC43NDUgMTQwLjc2NVYxMzcuMTQyIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMzEyLjg4NSAzMi4xNzVIMTg0LjE4N0MxODEuMDA2IDMyLjE3NSAxNzguNDI3IDM0LjcyMzMgMTc4LjQyNyAzNy44NjY3VjEzMi43MTNDMTc4LjQyNyAxMzUuODU2IDE4MS4wMDYgMTM4LjQwNCAxODQuMTg3IDEzOC40MDRIMzEyLjg4NUMzMTYuMDY2IDEzOC40MDQgMzE4LjY0NSAxMzUuODU2IDMxOC42NDUgMTMyLjcxM1YzNy44NjY3QzMxOC42NDUgMzQuNzIzMyAzMTYuMDY2IDMyLjE3NSAzMTIuODg1IDMyLjE3NVoiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMzEyLjY1NiAzMi4xNzVIMTg0LjUzNEMxODEuMzY3IDMyLjE3NSAxNzguOCAzNC42NjA0IDE3OC44IDM3LjcyNjNWNDYuNjUzOEgzMTguMzlWMzcuNzI2M0MzMTguMzkgMzQuNjYwNCAzMTUuODIyIDMyLjE3NSAzMTIuNjU2IDMyLjE3NVpNMTg5LjYwMSA0My4zMzU4QzE4Ny43NjYgNDMuMzM1OCAxODYuMjc4IDQxLjg5NTIgMTg2LjI3OCA0MC4xMTgzQzE4Ni4yNzggMzguMzQxMyAxODcuNzY2IDM2LjkwMDggMTg5LjYwMSAzNi45MDA4QzE5MS40MzcgMzYuOTAwOCAxOTIuOTI1IDM4LjM0MTMgMTkyLjkyNSA0MC4xMTgzQzE5Mi45MjUgNDEuODk1MiAxOTEuNDM3IDQzLjMzNTggMTg5LjYwMSA0My4zMzU4Wk0yMDEuNzcgNDMuMzM1OEMxOTkuOTM0IDQzLjMzNTggMTk4LjQ0NiA0MS44OTUyIDE5OC40NDYgNDAuMTE4M0MxOTguNDQ2IDM4LjM0MTMgMTk5LjkzNCAzNi45MDA4IDIwMS43NyAzNi45MDA4QzIwMy42MDUgMzYuOTAwOCAyMDUuMDkzIDM4LjM0MTMgMjA1LjA5MyA0MC4xMTgzQzIwNS4wOTMgNDEuODk1MiAyMDMuNjA1IDQzLjMzNTggMjAxLjc3IDQzLjMzNThaTTIxMy45MzggNDMuMzM1OEMyMTIuMTAzIDQzLjMzNTggMjEwLjYxNSA0MS44OTUyIDIxMC42MTUgNDAuMTE4M0MyMTAuNjE1IDM4LjM0MTMgMjEyLjEwMyAzNi45MDA4IDIxMy45MzggMzYuOTAwOEMyMTUuNzc0IDM2LjkwMDggMjE3LjI2MiAzOC4zNDEzIDIxNy4yNjIgNDAuMTE4M0MyMTcuMjYyIDQxLjg5NTIgMjE1Ljc3NCA0My4zMzU4IDIxMy45MzggNDMuMzM1OFoiIGZpbGw9IiMyNDIwMjAiLz4KPHBhdGggZD0iTTE5Ni40MjggNjQuNTA1N0gyMTEuNTg3IiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMTkxLjY5MSA3Mi44MTkzSDIxMS41ODciIHN0cm9rZT0iIzI0MjAyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0xOTEuNjkxIDgwLjIwOTFIMjExLjU4NyIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTI5MS4xNyAxMTEuNjE2SDMwNS4zODEiIHN0cm9rZT0iIzI0MjAyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0yODUuNDg2IDExOS4wMDZIMzA1LjM4MSIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTI4NS40ODYgMTI2LjM5NkgzMDUuMzgxIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMjk5LjY5NyA3Mi44MTkzQzMwNC45MjkgNzIuODE5MyAzMDkuMTcxIDY4LjY4MzYgMzA5LjE3MSA2My41ODE5QzMwOS4xNzEgNTguNDgwMyAzMDQuOTI5IDU0LjM0NDYgMjk5LjY5NyA1NC4zNDQ2QzI5NC40NjQgNTQuMzQ0NiAyOTAuMjIzIDU4LjQ4MDMgMjkwLjIyMyA2My41ODE5QzI5MC4yMjMgNjguNjgzNiAyOTQuNDY0IDcyLjgxOTMgMjk5LjY5NyA3Mi44MTkzWiIgZmlsbD0iI0NDRDlFMCIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTIwMS4xNjUgMTMwLjA5MUMyMDYuMzk4IDEzMC4wOTEgMjEwLjY0IDEyNi4xNjIgMjEwLjY0IDEyMS4zMTVDMjEwLjY0IDExNi40NjkgMjA2LjM5OCAxMTIuNTQgMjAxLjE2NSAxMTIuNTRDMTk1LjkzMyAxMTIuNTQgMTkxLjY5MSAxMTYuNDY5IDE5MS42OTEgMTIxLjMxNUMxOTEuNjkxIDEyNi4xNjIgMTk1LjkzMyAxMzAuMDkxIDIwMS4xNjUgMTMwLjA5MVoiIGZpbGw9IiNDQ0Q5RTAiIHN0cm9rZT0iIzI0MjAyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0yNTEuMTA3IDE0OC4wNTFMMjQ1LjgxMyAxNTUuNTU0QzI0NS4yNzQgMTU2LjMxOCAyNDQuMTM5IDE1NS45MiAyNDQuMTI0IDE1NC45NjJMMjQzLjc5OSAxMzQuMDc3QzI0My43ODMgMTMzLjA1MyAyNDQuODk5IDEzMi40ODUgMjQ1LjYyOSAxMzMuMTQ2TDI2MC41MTcgMTQ2LjYxOUMyNjEuMiAxNDcuMjM3IDI2MC43NjkgMTQ4LjQzMiAyNTkuODc2IDE0OC4zOTZMMjUxLjEwNyAxNDguMDUxWiIgZmlsbD0iIzI0MjAyMCIvPgo8cGF0aCBkPSJNMTYxLjk0NyAxMTEuODNMMTQ4LjExIDEwMy43MDlMMTg2LjAwNiA5NC45ODg5TDE2NS4yNTYgMTI3LjMyTDE2MS45NDcgMTExLjgzWiIgZmlsbD0iI0NDRDlFMCIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTI3NS4wODUgMTAwLjU1QzI3Ny45OTkgOTcuODYxNSAyNzkuNzcxIDk0LjM2ODQgMjc5Ljc3MSA5MC41Mzk0QzI3OS43NzEgODIuMDYzIDI3MS4xMzkgNzUuMTkxNSAyNjAuNDkgNzUuMTkxNUMyNDkuODQgNzUuMTkxNSAyNDEuMjA4IDgyLjA2MyAyNDEuMjA4IDkwLjUzOTRDMjQxLjIwOCA5OS4wMTU3IDI0OS44NCAxMDUuODg3IDI2MC40OSAxMDUuODg3QzI2My4yNjcgMTA1Ljg4NyAyNjUuOSAxMDUuNDExIDI2OC4yODUgMTA0LjU3TDI3NS4zMjYgMTA2Ljk0MkwyNzUuMDg1IDEwMC41NVoiIGZpbGw9IiNGNkZBRkIiIHN0cm9rZT0iIzI0MjAyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0yNTguNDg3IDc1LjI3NDVDMjU0Ljk1MiA3MS43OTE3IDI0OS41NSA2OS41NTk5IDI0My40ODcgNjkuNTU5OUMyMzIuODM4IDY5LjU1OTkgMjI0LjIwNSA3Ni40MzE0IDIyNC4yMDUgODQuOTA3OEMyMjQuMjA1IDg4LjM3MjcgMjI1LjY2NCA5MS41NTg1IDIyOC4wOTggOTQuMTI3M0wyMjYuNjE2IDk5LjY2NjZMMjMzLjU3MiA5OC4wNTNDMjM2LjQ3MiA5OS40NDIgMjM5Ljg1NiAxMDAuMjU2IDI0My40ODcgMTAwLjI1NkMyNDQuMTYzIDEwMC4yNTYgMjQ0LjgzMSAxMDAuMjI3IDI0NS40ODkgMTAwLjE3M0MyNDIuODE1IDk3LjUzODEgMjQxLjIwOCA5NC4xODk3IDI0MS4yMDggOTAuNTM5NEMyNDEuMjA4IDgyLjYwMTMgMjQ4Ljc3OSA3Ni4wNzE5IDI1OC40ODcgNzUuMjc0NVoiIGZpbGw9IiNDQ0Q5RTAiIHN0cm9rZT0iIzI0MjAyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0yNTEuOTUzIDkyLjc5NDdDMjUyLjkzMiA5Mi43OTQ3IDI1My43MjYgOTIuMDIxIDI1My43MjYgOTEuMDY2NkMyNTMuNzI2IDkwLjExMjIgMjUyLjkzMiA4OS4zMzg1IDI1MS45NTMgODkuMzM4NUMyNTAuOTc1IDg5LjMzODUgMjUwLjE4MSA5MC4xMTIyIDI1MC4xODEgOTEuMDY2NkMyNTAuMTgxIDkyLjAyMSAyNTAuOTc1IDkyLjc5NDcgMjUxLjk1MyA5Mi43OTQ3WiIgZmlsbD0iI0NDRDlFMCIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTI2MC4zNSA5Mi43OTQ3QzI2MS4zMjkgOTIuNzk0NyAyNjIuMTIyIDkyLjAyMSAyNjIuMTIyIDkxLjA2NjZDMjYyLjEyMiA5MC4xMTIyIDI2MS4zMjkgODkuMzM4NSAyNjAuMzUgODkuMzM4NUMyNTkuMzcxIDg5LjMzODUgMjU4LjU3OCA5MC4xMTIyIDI1OC41NzggOTEuMDY2NkMyNTguNTc4IDkyLjAyMSAyNTkuMzcxIDkyLjc5NDcgMjYwLjM1IDkyLjc5NDdaIiBmaWxsPSIjQ0NEOUUwIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMjY4Ljc0NiA5Mi43OTQ3QzI2OS43MjUgOTIuNzk0NyAyNzAuNTE4IDkyLjAyMSAyNzAuNTE4IDkxLjA2NjZDMjcwLjUxOCA5MC4xMTIyIDI2OS43MjUgODkuMzM4NSAyNjguNzQ2IDg5LjMzODVDMjY3Ljc2NyA4OS4zMzg1IDI2Ni45NzQgOTAuMTEyMiAyNjYuOTc0IDkxLjA2NjZDMjY2Ljk3NCA5Mi4wMjEgMjY3Ljc2NyA5Mi43OTQ3IDI2OC43NDYgOTIuNzk0N1oiIGZpbGw9IiNDQ0Q5RTAiIHN0cm9rZT0iIzI0MjAyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0xMTYuNzM5IDM3LjcxNzRWNzQuNDYwOSIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTk3Ljg5NjUgNTYuMDg5MkgxMzUuNTgyIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMTMwLjA2MyA0My4wOTg0TDEwMy40MTUgNjkuMDgiIHN0cm9rZT0iIzI0MjAyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0xMDMuNDE1IDQzLjA5ODRMMTMwLjA2MyA2OS4wOCIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTk0LjgxMjIgMTIxLjMwNUM5NC44MTIyIDExNi4wNTMgOTIuODYxOCAxMTQuMTUxIDg3LjQ3NDkgMTE0LjE1MUM5Mi44NjE4IDExNC4xNTEgOTQuODEyMiAxMTIuMjUgOTQuODEyMiAxMDYuOTk3Qzk0LjgxMjIgMTEyLjI1IDk2Ljc2MjcgMTE0LjE1MSAxMDIuMTUgMTE0LjE1MUM5Ni43NjI3IDExNC4xNTEgOTQuODEyMiAxMTYuMDUzIDk0LjgxMjIgMTIxLjMwNVoiIGZpbGw9IiMyNDIwMjAiLz4KPHBhdGggZD0iTTY0LjA1NCA4Mi41NzJDNjYuMjkyOSA4Mi41NzIgNjguMTA3OSA4MC44MDIzIDY4LjEwNzkgNzguNjE5NEM2OC4xMDc5IDc2LjQzNjQgNjYuMjkyOSA3NC42NjY3IDY0LjA1NCA3NC42NjY3QzYxLjgxNSA3NC42NjY3IDYwIDc2LjQzNjQgNjAgNzguNjE5NEM2MCA4MC44MDIzIDYxLjgxNSA4Mi41NzIgNjQuMDU0IDgyLjU3MloiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L3N2Zz4K&quot;)",
                                }}
                              >
                                {/* Background image style can be set here */}
                              </div>
                              <div className="flex flex-col justify-end px-5 pb-6 h-44">
                                <h2
                                  className="!text-black !text-xl mb-2 text-left tracking-tightest font-semibold text-h2"
                                  aria-label="Discover Chat"
                                  title="Discover Chat"
                                >
                                  Discover Chat
                                </h2>
                                <p
                                  className="!text-black !font-medium text-left tracking-tightest font-normal text-h4"
                                  aria-label="Chat acts as your AI assistant to help you with everyday tasks like writing, brainstorming, researching, and much more."
                                  title="Chat acts as your AI assistant to help you with everyday tasks like writing, brainstorming, researching, and much more."
                                >
                                  Chat acts as your AI assistant to help you
                                  with everyday tasks like writing,
                                  brainstorming, researching, and much more.
                                </p>
                                <div className="mt-5">
                                  <button
                                    aria-label="New Chat"
                                    tabIndex={0}
                                    className="group focus:outline-none flex select-none items-center rounded-lg px-3 py-2 font-semibold focus:ring-grey-300 bg-grey-900 text-white hover:bg-grey-800 ring-offset-2 focus:ring-2"
                                  >
                                    <h3
                                      className="flex-nowrap whitespace-nowrap text-left tracking-wide font-semibold text-h3"
                                      aria-label="New Chat"
                                    >
                                      New Chat
                                    </h3>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                            <div className="h-80 cursor-pointer flex flex-col border border-grey-300 rounded-xl overflow-hidden max-w-2xl relative duration-200 hover:shadow-card">
                              <div className="absolute top-3 right-3 bg-white flex items-center justify-center rounded-full h-6 w-6 shadow-card cursor-pointer duration-200 hover:bg-white/25">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="text-grey-600 h-3 w-3"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.7071 3.70711C14.0976 3.31658 14.0976 2.68342 13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289L8 6.58579L3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L6.58579 8L2.29289 12.2929C1.90237 12.6834 1.90237 13.3166 2.29289 13.7071C2.68342 14.0976 3.31658 14.0976 3.70711 13.7071L8 9.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L9.41421 8L13.7071 3.70711Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-1 bg-grey-200">
                                <img
                                  src="/_next/static/media/brand-voice.1a9bed42.svg"
                                  alt="Tailor Chat to your Brand Voice"
                                  className="bg-center object-cover h-full mx-auto"
                                />
                              </div>
                              <div className="flex flex-col justify-between pt-4 px-5 pb-6 h-40">
                                <div>
                                  <h3
                                    className="!text-lg !text-black mb-2 text-left tracking-wide font-semibold text-h3"
                                    aria-label="Tailor Chat to your Brand Voice"
                                    title="Tailor Chat to your Brand Voice"
                                  >
                                    Tailor Chat to your Brand Voice
                                  </h3>
                                  <p
                                    className="!text-grey-800 !font-medium text-left tracking-tightest font-normal text-h4"
                                    aria-label="Create content that's on-brand and uses your unique tone and voice."
                                    title="Create content that's on-brand and uses your unique tone and voice."
                                  >
                                    Create content that's on-brand and uses your
                                    unique tone and voice.
                                  </p>
                                </div>
                                <div>
                                  <button
                                    aria-label="Define your Brand Voice"
                                    tabIndex={0}
                                    className="group focus:outline-none flex select-none items-center rounded-lg px-3 py-2 font-semibold focus:ring-grey-300 bg-grey-900 text-white hover:bg-grey-800 ring-offset-2 focus:ring-2"
                                  >
                                    <h3
                                      className="flex-nowrap whitespace-nowrap text-left tracking-wide font-semibold text-h3"
                                      aria-label="Define your Brand Voice"
                                    >
                                      Define your Brand Voice
                                    </h3>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                            <div className="h-80 cursor-pointer flex flex-col border border-grey-300 rounded-xl overflow-hidden max-w-2xl relative duration-200 hover:shadow-card">
                              <div className="absolute top-3 right-3 bg-white flex items-center justify-center rounded-full h-6 w-6 shadow-card cursor-pointer duration-200 hover:bg-white/25">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="text-grey-600 h-3 w-3"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.7071 3.70711C14.0976 3.31658 14.0976 2.68342 13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289L8 6.58579L3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L6.58579 8L2.29289 12.2929C1.90237 12.6834 1.90237 13.3166 2.29289 13.7071C2.68342 14.0976 3.31658 14.0976 3.70711 13.7071L8 9.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L9.41421 8L13.7071 3.70711Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              <div className="flex flex-1 bg-grey-200">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI4IiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDMyOCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjcuNSIgaGVpZ2h0PSIxNjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiIGZpbGw9IiNFNEVERjEiLz4KPHBhdGggZD0iTTIyNi41OTMgMzguN0gxMTYuNzY3QzExNC43ODYgMzguNyAxMTMuMTggNDAuMDMzNyAxMTMuMTggNDEuNjc5VjExNy45NDZDMTEzLjE4IDExOS41OTEgMTE0Ljc4NiAxMjAuOTI1IDExNi43NjcgMTIwLjkyNUgxMjMuMjMzQzEyNC42MzEgMTIwLjkyNSAxMjUuNzY1IDEyMS44NjYgMTI1Ljc2NSAxMjMuMDI3VjEyOC42QzEyNS43NjUgMTI5LjQ0IDEyNi45MzggMTI5LjkwNCAxMjcuNzI0IDEyOS4zNzVMMTM5LjEyMyAxMjEuNzAxQzEzOS44NyAxMjEuMTk5IDE0MC44MDEgMTIwLjkyNSAxNDEuNzYxIDEyMC45MjVIMjI2LjU5M0MyMjguNTc0IDEyMC45MjUgMjMwLjE4IDExOS41OTEgMjMwLjE4IDExNy45NDZWNDEuNjc5MUMyMzAuMTggNDAuMDMzOCAyMjguNTc0IDM4LjcgMjI2LjU5MyAzOC43WiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzI0MjAyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0yMjYuNTkzIDM3Ljc5OTlIMTE2Ljc2N0MxMTQuNzg2IDM3Ljc5OTkgMTEzLjE4IDM5LjQ2NjIgMTEzLjE4IDQxLjUyMTdWNDcuNjk5OUgyMzAuMThWNDEuNTIxN0MyMzAuMTggMzkuNDY2MiAyMjguNTc0IDM3Ljc5OTkgMjI2LjU5MyAzNy43OTk5Wk0xMjAuMzcxIDQ0LjkwMjFDMTE5LjIyNiA0NC45MDIxIDExOC4yOTcgNDMuOTM4NSAxMTguMjk3IDQyLjc0OTlDMTE4LjI5NyA0MS41NjE0IDExOS4yMjYgNDAuNTk3OCAxMjAuMzcxIDQwLjU5NzhDMTIxLjUxNyA0MC41OTc4IDEyMi40NDYgNDEuNTYxNCAxMjIuNDQ2IDQyLjc0OTlDMTIyLjQ0NiA0My45Mzg1IDEyMS41MTcgNDQuOTAyMSAxMjAuMzcxIDQ0LjkwMjFaTTEyNy41NjMgNDQuOTAyMUMxMjYuNDE3IDQ0LjkwMjEgMTI1LjQ4OCA0My45Mzg1IDEyNS40ODggNDIuNzQ5OUMxMjUuNDg4IDQxLjU2MTQgMTI2LjQxNyA0MC41OTc4IDEyNy41NjMgNDAuNTk3OEMxMjguNzA5IDQwLjU5NzggMTI5LjYzNyA0MS41NjE0IDEyOS42MzcgNDIuNzQ5OUMxMjkuNjM3IDQzLjkzODUgMTI4LjcwOSA0NC45MDIxIDEyNy41NjMgNDQuOTAyMVpNMTM0Ljc1NCA0NC45MDIxQzEzMy42MDkgNDQuOTAyMSAxMzIuNjggNDMuOTM4NSAxMzIuNjggNDIuNzQ5OUMxMzIuNjggNDEuNTYxNCAxMzMuNjA5IDQwLjU5NzggMTM0Ljc1NCA0MC41OTc4QzEzNS45IDQwLjU5NzggMTM2LjgyOSA0MS41NjE0IDEzNi44MjkgNDIuNzQ5OUMxMzYuODI5IDQzLjkzODUgMTM1LjkgNDQuOTAyMSAxMzQuNzU0IDQ0LjkwMjFaIiBmaWxsPSIjMjQyMDIwIi8+CjxwYXRoIGQ9Ik0yMDUuMzczIDEwMS4wN0gxMjcuNjM3QzEyNi45NTkgMTAxLjA3IDEyNi40MSAxMDEuNjM4IDEyNi40MSAxMDIuMzRWMTA4LjcxQzEyNi40MSAxMDkuNDExIDEyNi45NTkgMTA5Ljk4IDEyNy42MzcgMTA5Ljk4SDIwNS4zNzNDMjA2LjA1IDEwOS45OCAyMDYuNiAxMDkuNDExIDIwNi42IDEwOC43MVYxMDIuMzRDMjA2LjYgMTAxLjYzOCAyMDYuMDUgMTAxLjA3IDIwNS4zNzMgMTAxLjA3WiIgZmlsbD0iI0U0RURGMSIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTIxNS44NDggMTA0LjQ2TDIxMi4zNDYgMTAwLjAxMUMyMTIuMTY5IDk5Ljc4NTIgMjEyLjMyMyA5OS40MjY5IDIxMi41ODYgOTkuNDUxMUwyMjQuMjczIDEwMC41MjRDMjI0LjQwNiAxMDAuNTM2IDIyNC40NjggMTAwLjcxOSAyMjQuMzc3IDEwMC44MzFMMjE2LjM5MSAxMTAuNjgyQzIxNi4yMTEgMTEwLjkwNSAyMTUuODg3IDExMC43NiAyMTUuODg1IDExMC40NTZMMjE1Ljg0OCAxMDQuNDZaIiBmaWxsPSIjRTRFREYxIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMjI0LjQyIDEwMS4wN0wyMTUuNTEgMTA1LjEyIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNODAuOTYgMTIzLjEyQzg5LjAxMjMgMTIzLjEyIDk1LjU0IDEyMC45NDQgOTUuNTQgMTE4LjI2Qzk1LjU0IDExNS41NzYgODkuMDEyMyAxMTMuNCA4MC45NiAxMTMuNEM3Mi45MDc3IDExMy40IDY2LjM4IDExNS41NzYgNjYuMzggMTE4LjI2QzY2LjM4IDEyMC45NDQgNzIuOTA3NyAxMjMuMTIgODAuOTYgMTIzLjEyWiIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTgwLjk2IDEyOS42Qzg5LjAxMjMgMTI5LjYgOTUuNTQgMTI3LjI0MyA5NS41NCAxMjQuMzM1Qzk1LjU0IDEyMS40MjcgODkuMDEyMyAxMTkuMDcgODAuOTYgMTE5LjA3QzcyLjkwNzcgMTE5LjA3IDY2LjM4IDEyMS40MjcgNjYuMzggMTI0LjMzNUM2Ni4zOCAxMjcuMjQzIDcyLjkwNzcgMTI5LjYgODAuOTYgMTI5LjZaIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMjUzLjk4NSAxMTMuMTNDMjYwLjQ3MiAxMTMuMTMgMjY1LjczIDEwNy44NzEgMjY1LjczIDEwMS4zODVDMjY1LjczIDk0Ljg5ODMgMjYwLjQ3MiA4OS42Mzk5IDI1My45ODUgODkuNjM5OUMyNDcuNDk4IDg5LjYzOTkgMjQyLjI0IDk0Ljg5ODMgMjQyLjI0IDEwMS4zODVDMjQyLjI0IDEwNy44NzEgMjQ3LjQ5OCAxMTMuMTMgMjUzLjk4NSAxMTMuMTNaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTI1My41OCAxMTMuMTNDMjU3LjYwNiAxMTMuMTMgMjYwLjg3IDEwNy44NzEgMjYwLjg3IDEwMS4zODVDMjYwLjg3IDk0Ljg5ODMgMjU3LjYwNiA4OS42Mzk5IDI1My41OCA4OS42Mzk5QzI0OS41NTQgODkuNjM5OSAyNDYuMjkgOTQuODk4MyAyNDYuMjkgMTAxLjM4NUMyNDYuMjkgMTA3Ljg3MSAyNDkuNTU0IDExMy4xMyAyNTMuNTggMTEzLjEzWiIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTI1My41OCA4OS42Mzk5VjExMy4xMyIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTI0Mi4yNCAxMDAuOThIMjY1LjczIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNNTUuNjI1IDg4LjI5QzU1LjYyNSA4NS42MTM5IDU0LjY1NiA4NC42NDUgNTEuOTggODQuNjQ1QzU0LjY1NiA4NC42NDUgNTUuNjI1IDgzLjY3NjEgNTUuNjI1IDgxQzU1LjYyNSA4My42NzYxIDU2LjU5MzkgODQuNjQ1IDU5LjI3IDg0LjY0NUM1Ni41OTM5IDg0LjY0NSA1NS42MjUgODUuNjEzOSA1NS42MjUgODguMjlaIiBmaWxsPSIjMjQyMDIwIi8+CjxwYXRoIGQ9Ik0yNjQuODMgNTRDMjY0LjgzIDUxLjAyNjYgMjYzLjc1MyA0OS45NSAyNjAuNzggNDkuOTVDMjYzLjc1MyA0OS45NSAyNjQuODMgNDguODczNCAyNjQuODMgNDUuOUMyNjQuODMgNDguODczNCAyNjUuOTA3IDQ5Ljk1IDI2OC44OCA0OS45NUMyNjUuOTA3IDQ5Ljk1IDI2NC44MyA1MS4wMjY2IDI2NC44MyA1NFoiIGZpbGw9IiMyNDIwMjAiLz4KPHBhdGggZD0iTTI3NSA3MC43NEMyNzUuODk1IDcwLjc0IDI3Ni42MiA3MC4wMTQ3IDI3Ni42MiA2OS4xMkMyNzYuNjIgNjguMjI1MyAyNzUuODk1IDY3LjUgMjc1IDY3LjVDMjc0LjEwNSA2Ny41IDI3My4zOCA2OC4yMjUzIDI3My4zOCA2OS4xMkMyNzMuMzggNzAuMDE0NyAyNzQuMTA1IDcwLjc0IDI3NSA3MC43NFoiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMjAxLjIyMSA2Ny41TDEzMC40NCA2Ny41MDAxQzEyOC4zNjMgNjcuNTAwMSAxMjYuNjggNjkuMDk1OSAxMjYuNjggNzEuMDY0NVY4My45MTU1QzEyNi42OCA4NS44ODQxIDEyOC4zNjMgODcuNDc5OSAxMzAuNDQgODcuNDc5OUgxMzQuMTE4VjkyLjYxMjZDMTM0LjExOCA5My41NDEzIDEzNS4zNDkgOTMuOTU0NSAxMzUuOTY2IDkzLjIzMjdMMTQwLjg3NyA4Ny40Nzk5TDIwMS4yMjEgODcuNDc5OUMyMDMuMjk3IDg3LjQ3OTkgMjA0Ljk4IDg1Ljg4NCAyMDQuOTggODMuOTE1NVY3MS4wNjQ0QzIwNC45OCA2OS4wOTU4IDIwMy4yOTcgNjcuNSAyMDEuMjIxIDY3LjVaIiBmaWxsPSIjRTRFREYxIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMTM0Ljc4IDc0LjdIMTk3Ljc4IiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMTM0Ljc4IDgwLjFIMTk3Ljc4IiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMjAxLjAxNiAzMi40SDIzOS4wOTRDMjQwLjg4MSAzMi40IDI0Mi4zMyAzMy44MTUzIDI0Mi4zMyAzNS41NjFWNTcuMzIxNUMyNDIuMzMgNTkuMDY3MyAyNDAuODgxIDYwLjQ4MjUgMjM5LjA5NCA2MC40ODI1SDIzNS45MjdWNjUuNTUzNEMyMzUuOTI3IDY2LjMwMzQgMjM1LjAxNiA2Ni42OTggMjM0LjQ0NyA2Ni4xOTQ2TDIyNy45ODYgNjAuNDgyNUgyMDEuMDE2QzE5OS4yMjkgNjAuNDgyNSAxOTcuNzggNTkuMDY3MiAxOTcuNzggNTcuMzIxNVYzNS41NjFDMTk3Ljc4IDMzLjgxNTMgMTk5LjIyOSAzMi40IDIwMS4wMTYgMzIuNFoiIGZpbGw9IiNDQ0Q5RTAiIHN0cm9rZT0iIzI0MjAyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0yMTkuNzQgNTcuMDU5OUMyMjUuMjA4IDU3LjA1OTkgMjI5LjY0IDUyLjYyNzUgMjI5LjY0IDQ3LjE1OTlDMjI5LjY0IDQxLjY5MjMgMjI1LjIwOCAzNy4yNTk5IDIxOS43NCAzNy4yNTk5QzIxNC4yNzIgMzcuMjU5OSAyMDkuODQgNDEuNjkyMyAyMDkuODQgNDcuMTU5OUMyMDkuODQgNTIuNjI3NSAyMTQuMjcyIDU3LjA1OTkgMjE5Ljc0IDU3LjA1OTlaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTIyMi41MyA0Ni45Nzk5QzIyMy40MjUgNDYuOTc5OSAyMjQuMTUgNDYuMjU0NiAyMjQuMTUgNDUuMzU5OUMyMjQuMTUgNDQuNDY1MiAyMjMuNDI1IDQzLjczOTkgMjIyLjUzIDQzLjczOTlDMjIxLjYzNSA0My43Mzk5IDIyMC45MSA0NC40NjUyIDIyMC45MSA0NS4zNTk5QzIyMC45MSA0Ni4yNTQ2IDIyMS42MzUgNDYuOTc5OSAyMjIuNTMgNDYuOTc5OVoiIGZpbGw9IiMyNDIwMjAiLz4KPHBhdGggZD0iTTIxNi44NiA0Ni45Nzk5QzIxNy43NTUgNDYuOTc5OSAyMTguNDggNDYuMjU0NiAyMTguNDggNDUuMzU5OUMyMTguNDggNDQuNDY1MiAyMTcuNzU1IDQzLjczOTkgMjE2Ljg2IDQzLjczOTlDMjE1Ljk2NSA0My43Mzk5IDIxNS4yNCA0NC40NjUyIDIxNS4yNCA0NS4zNTk5QzIxNS4yNCA0Ni4yNTQ2IDIxNS45NjUgNDYuOTc5OSAyMTYuODYgNDYuOTc5OVoiIGZpbGw9IiMyNDIwMjAiLz4KPHBhdGggZD0iTTIyNC4yNCA1MC4zOTk5QzIyMS42NCA1Mi43OTk5IDIxNy44NCA1Mi43OTk5IDIxNS4yNCA1MC4zOTk5IiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMTAzLjY1NyA4Ny41MTk2QzEwNC41NyA4Ny41MTk2IDEwNS4zMSA4Ni43Nzk2IDEwNS4zMSA4NS44NjY4QzEwNS4zMSA4NC45NTQgMTA0LjU3IDg0LjIxNCAxMDMuNjU3IDg0LjIxNEMxMDIuNzQ1IDg0LjIxNCAxMDIuMDA1IDg0Ljk1NCAxMDIuMDA1IDg1Ljg2NjhDMTAyLjAwNSA4Ni43Nzk2IDEwMi43NDUgODcuNTE5NiAxMDMuNjU3IDg3LjUxOTZaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMjQyMDIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTc3Ljk3ODEgNzUuMDYxM1Y4NS44NjY4SDEwMi4wMDUiIHN0cm9rZT0iIzI0MjAyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik05Mi45NzM1IDM0LjJINjIuOTgyNEM2MS4zNzk0IDM0LjIgNjAuMDggMzUuNDk5NCA2MC4wOCAzNy4xMDI0VjY3LjA5MzVDNjAuMDggNjguNjk2NSA2MS4zNzk0IDY5Ljk5NiA2Mi45ODI0IDY5Ljk5Nkg5Mi45NzM1Qzk0LjU3NjUgNjkuOTk2IDk1Ljg3NiA2OC42OTY1IDk1Ljg3NiA2Ny4wOTM1VjM3LjEwMjRDOTUuODc2IDM1LjQ5OTQgOTQuNTc2NSAzNC4yIDkyLjk3MzUgMzQuMloiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNODUuODUyMSA0OS43ODZDODUuODUyMSA0NS4zNjg0IDgyLjAyNTYgNDEuODQ0NSA3Ny41MDYzIDQyLjM0NzlDNzQuMjAxNCA0Mi43MTYxIDcxLjQ2OTMgNDUuMzI1MyA3MC45Njk0IDQ4LjYxMjhDNzAuNTQ2NSA1MS4zOTM5IDcxLjY1NzcgNTMuOTM2MSA3My41ODI0IDU1LjUzNTZDNzQuNTA4NyA1Ni4zMDU1IDc1LjAxMDMgNTcuNDcyOSA3NS4wMTAzIDU4LjY3NzNWNjAuMTExNkg4MS43MjE5VjU4LjY3NkM4MS43MjE5IDU3LjQ0OTIgODIuMjYyOCA1Ni4yODYyIDgzLjE5OTUgNTUuNDk0Qzg0LjgyMTEgNTQuMTIyNiA4NS44NTIxIDUyLjA3NjQgODUuODUyMSA0OS43ODZaIiBmaWxsPSIjQ0NEOUUwIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNNzMuMzg2MSA1MS4yMDU4SDc1Ljg4MTRMNzcuMzQ0MiA0Ni45ODk1TDc5LjA0MzYgNTQuMzAzNUw4MC43NjQ2IDUwLjY0NjVIODMuMzQ2IiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNNzguMzY2MSA2NC45MjY4Qzc3LjAwOCA2NC45MjY4IDc1LjkwNzEgNjMuODI1OSA3NS45MDcxIDYyLjQ2NzhWNjEuOTY1OUg4MC44MjUxVjYyLjQ2NzhDODAuODI1MSA2My44MjU5IDc5LjcyNDIgNjQuOTI2OCA3OC4zNjYxIDY0LjkyNjhaIiBmaWxsPSIjQ0NEOUUwIiBzdHJva2U9IiMyNDIwMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L3N2Zz4K" // Add image source URL here
                                  alt="Browse example chats"
                                  className="bg-center object-cover h-full mx-auto"
                                />
                              </div>
                              <div className="flex flex-col justify-between pt-4 px-5 pb-6 h-40">
                                <div>
                                  <h3
                                    className="!text-lg !text-black mb-2 text-left tracking-wide font-semibold text-h3"
                                    aria-label="Browse example chats"
                                    title="Browse example chats"
                                  >
                                    Browse example chats
                                  </h3>
                                  <p
                                    className="!text-grey-800 !font-medium text-left tracking-tightest font-normal text-h4"
                                    aria-label="Experience Chat's efficiency and versatility firsthand through curated examples."
                                    title="Experience Chat's efficiency and versatility firsthand through curated examples."
                                  >
                                    Experience Chat's efficiency and versatility
                                    firsthand through curated examples.
                                  </p>
                                </div>
                                <div>
                                  <button
                                    aria-label="Browse"
                                    tabIndex={0}
                                    className="group focus:outline-none flex select-none items-center rounded-lg px-3 py-2 font-semibold focus:ring-grey-300 bg-grey-900 text-white hover:bg-grey-800 ring-offset-2 focus:ring-2"
                                  >
                                    <h3
                                      className="flex-nowrap whitespace-nowrap text-left tracking-wide font-semibold text-h3"
                                      aria-label="Browse"
                                    >
                                      Browse
                                    </h3>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
