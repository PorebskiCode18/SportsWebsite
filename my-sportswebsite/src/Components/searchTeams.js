// import logo from './assets/background.png';

import React, { useEffect } from 'react';
import {
    Ripple,
    Input,
    initTWE,
} from "tw-elements";

// Initialize tw-elements
initTWE({ Ripple, Input });

export default function AppSearch() {
    useEffect(() => {
        const searchInputDropdown = document.getElementById('search-input-dropdown');
        const dropdownOptions = document.querySelectorAll('#dropdown-search [data-twe-dropdown-item-ref]');

        // Add event listener for filtering dropdown options
        const handleInput = () => {
            const filter = searchInputDropdown.value.toLowerCase();
            showOptions();
            const valueExist = !!filter.length;

            if (valueExist) {
                dropdownOptions.forEach((el) => {
                    const elText = el.textContent.trim().toLowerCase();
                    const isIncluded = elText.includes(filter);
                    if (!isIncluded) {
                        el.classList.add("hidden");
                    }
                });
            }
        };

        const showOptions = () => {
            dropdownOptions.forEach((el) => {
                el.classList.remove("hidden");
            });
        };

        searchInputDropdown.addEventListener('input', handleInput);

        // Clean up event listener on component unmount
        return () => {
            searchInputDropdown.removeEventListener('input', handleInput);
        };
    }, []);

    return (
        <section id="home" className="hero-block relative flex justify-center items-center min-h-screen bg-gray-100">
            <div className="relative" data-twe-dropdown-ref id="dropdown-search">
                <button
                    className="mx-auto flex items-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-twe-dropdown-toggle-ref
                    aria-expanded="false"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    Dropdown
                </button>
                <ul
                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                    aria-labelledby="dropdownMenuButton1"
                    data-twe-dropdown-menu-ref>
                    <li>
                        <div className="relative mx-2 mt-2" data-twe-input-wrapper-init>
                            <input
                                type="search"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                placeholder="Search"
                                aria-label="Search"
                                id="search-input-dropdown"
                                aria-describedby="basic-addon1" />
                            <label
                                htmlFor="search-input-dropdown"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                            >
                                Search
                            </label>
                        </div>
                    </li>
                    <hr className="my-2 h-0 border border-t-0 border-solid border-neutral-100 dark:border-white/10" />
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                            href="#"
                            data-twe-dropdown-item-ref
                        >
                            Action
                        </a>
                    </li>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                            href="#"
                            data-twe-dropdown-item-ref
                        >
                            Another action
                        </a>
                    </li>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                            href="#"
                            data-twe-dropdown-item-ref
                        >
                            Something else here
                        </a>
                    </li>
                </ul>
            </div>
            <div className="my-4"></div>
        </section>
    );
}