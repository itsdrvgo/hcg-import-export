"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../icons";

export function Inquiry({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "flex flex-col items-center justify-between gap-10 py-10 md:flex-row md:gap-20 md:py-20",
                className
            )}
            {...props}
        >
            <h2 className="basis-3/4 text-balance text-center text-2xl font-semibold md:text-start md:text-5xl lg:text-7xl">
                Enquire Now For Personalized Assistance
            </h2>

            <Link
                href="/contact"
                className="flex basis-1/4 items-center justify-center"
            >
                <button
                    className="group relative size-[210px] transition-transform duration-300 hover:scale-105"
                    aria-label="Contact Us Now"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="210"
                        height="210"
                        viewBox="0 0 210 210"
                        className="absolute inset-0 transition-all ease-in-out group-hover:rotate-45"
                    >
                        <path
                            d="M126.624 15.7263L107.941 2.13881C106.188 0.863714 103.812 0.863712 102.059 2.1388L83.3763 15.7263C82.4229 16.4197 81.2551 16.7539 80.0792 16.6699L55.8337 14.9381C53.8159 14.794 51.91 15.88 51.0053 17.6893L40.6454 38.4093C40.1615 39.3769 39.3769 40.1615 38.4093 40.6454L17.6893 51.0053C15.88 51.91 14.794 53.8159 14.9381 55.8337L16.6699 80.0792C16.7539 81.2551 16.4197 82.4229 15.7263 83.3763L2.13881 102.059C0.863714 103.812 0.863712 106.188 2.1388 107.941L15.7263 126.624C16.4197 127.577 16.7539 128.745 16.6699 129.921L14.9381 154.166C14.794 156.184 15.88 158.09 17.6893 158.995L38.4093 169.355C39.3769 169.838 40.1615 170.623 40.6454 171.591L51.0053 192.311C51.91 194.12 53.8159 195.206 55.8337 195.062L80.0792 193.33C81.2551 193.246 82.4229 193.58 83.3763 194.274L102.059 207.861C103.812 209.136 106.188 209.136 107.941 207.861L126.624 194.274C127.577 193.58 128.745 193.246 129.921 193.33L154.166 195.062C156.184 195.206 158.09 194.12 158.995 192.311L169.355 171.591C169.838 170.623 170.623 169.838 171.591 169.355L192.311 158.995C194.12 158.09 195.206 156.184 195.062 154.166L193.33 129.921C193.246 128.745 193.58 127.577 194.274 126.624L207.861 107.941C209.136 106.188 209.136 103.812 207.861 102.059L194.274 83.3763C193.58 82.4229 193.246 81.2551 193.33 80.0792L195.062 55.8337C195.206 53.8159 194.12 51.91 192.311 51.0053L171.591 40.6454C170.623 40.1615 169.838 39.3769 169.355 38.4093L158.995 17.6893C158.09 15.88 156.184 14.794 154.166 14.9381L129.921 16.6699C128.745 16.7539 127.577 16.4197 126.624 15.7263Z"
                            className="stroke-foreground/40 transition-colors duration-300"
                            strokeWidth="1"
                            strokeDasharray="2 2"
                            fill="transparent"
                        />
                        <path
                            d="M125.524 19.9263L107.941 7.13881C106.188 5.86371 103.812 5.86371 102.059 7.13881L84.4763 19.9263C83.5229 20.6197 82.3551 20.9539 81.1792 20.8699L58.3337 19.2381C56.3159 19.094 54.41 20.18 53.5053 21.9893L43.7454 41.5093C43.2615 42.4769 42.4769 43.2615 41.5093 43.7454L21.9893 53.5053C20.18 54.41 19.094 56.3159 19.2381 58.3337L20.8699 81.1792C20.9539 82.3551 20.6197 83.5229 19.9263 84.4763L7.13881 102.059C5.86371 103.812 5.86371 106.188 7.13881 107.941L19.9263 125.524C20.6197 126.477 20.9539 127.645 20.8699 128.821L19.2381 151.666C19.094 153.684 20.18 155.59 21.9893 156.495L41.5093 166.255C42.4769 166.738 43.2615 167.523 43.7454 168.491L53.5053 188.011C54.41 189.82 56.3159 190.906 58.3337 190.762L81.1792 189.13C82.3551 189.046 83.5229 189.38 84.4763 190.074L102.059 202.861C103.812 204.136 106.188 204.136 107.941 202.861L125.524 190.074C126.477 189.38 127.645 189.046 128.821 189.13L151.666 190.762C153.684 190.906 155.59 189.82 156.495 188.011L166.255 168.491C166.738 167.523 167.523 166.738 168.491 166.255L188.011 156.495C189.82 155.59 190.906 153.684 190.762 151.666L189.13 128.821C189.046 127.645 189.38 126.477 190.074 125.524L202.861 107.941C204.136 106.188 204.136 103.812 202.861 102.059L190.074 84.4763C189.38 83.5229 189.046 82.3551 189.13 81.1792L190.762 58.3337C190.906 56.3159 189.82 54.41 188.011 53.5053L168.491 43.7454C167.523 43.2615 166.738 42.4769 166.255 41.5093L156.495 21.9893C155.59 20.18 153.684 19.094 151.666 19.2381L128.821 20.8699C127.645 20.9539 126.477 20.6197 125.524 19.9263Z"
                            className="fill-muted transition-colors duration-300 group-hover:fill-foreground"
                        />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1 transition-colors duration-300">
                        <Icons.ArrowUpRight className="size-6 transition-colors duration-300 group-hover:text-background" />

                        <div className="text-center">
                            <div className="font-medium transition-colors duration-300 group-hover:text-background">
                                Contact Us
                            </div>
                            <div className="transition-colors duration-300 group-hover:text-background">
                                Now
                            </div>
                        </div>
                    </div>
                </button>
            </Link>
        </section>
    );
}
