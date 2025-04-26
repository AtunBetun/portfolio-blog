import React from "react";
import { Header } from "@/components/ui/header-on-page";
import Link from "next/link";
import AnimationWrapper from "@/components/ui/animation-wrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About me and where to find me.",
};

type Props = {};

async function Page({ }: Props) {
    // About page should have my image and a short description of me with some links to my socials
    return (
        <AnimationWrapper>
            <Header
                title={"Hi, I am Alberto"}
                subtitle={"I tinker with code, drink espresso, and learn new hobbies every day :D."}
                subtitle2={"Otherwise busy hitting the gym xD."}
            />

            <div className="flex justify-center p-10">
                <Link
                    href="mailto:beto7299@gmail.com"
                    className="mx-5 shrink"
                    target="_blank"
                >
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 15 15"
                        fill="none"
                        className="opacity-70 hover:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.94721 0.164594C7.66569 0.0238299 7.33431 0.0238302 7.05279 0.164594L0.552786 3.41459C0.214002 3.58399 0 3.93025 0 4.30902V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V4.30902C15 3.93025 14.786 3.58399 14.4472 3.41459L7.94721 0.164594ZM13.5689 4.09349L7.5 1.05902L1.43105 4.09349L7.5 7.29136L13.5689 4.09349ZM1 4.88366V12H14V4.88366L7.70977 8.19813C7.57848 8.26731 7.42152 8.26731 7.29023 8.19813L1 4.88366Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </Link>
                {/* twitter */}
                <Link
                    href="https://www.linkedin.com/in/alberto-de-saint-malo-a70415186/"
                    className="mx-5 shrink"
                    target="_blank"
                >
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 15 15"
                        className="opacity-70 hover:opacity-100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </Link>
            </div>
            <p className="text-muted-foreground text-center p-10">
                This page is 🖐️ made with Nextjs 13, Tailwind, Shadcn
            </p>
        </AnimationWrapper>
    );
}

export default Page;
