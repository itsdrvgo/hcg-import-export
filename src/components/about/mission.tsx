"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function OurMission({ className, ...props }: GenericProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number>(0);

    return (
        <section
            className={cn(
                "flex flex-col items-center justify-between gap-10 p-10 md:flex-row md:gap-20 md:px-0",
                className
            )}
            {...props}
        >
            <div className="flex w-full basis-1/2 justify-center">
                <div className="space-y-5 md:space-y-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -20, filter: "blur(2px)" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-balance text-xl font-semibold uppercase md:text-3xl"
                    >
                        What Defines Us
                    </motion.h2>

                    <motion.h3
                        initial={{ opacity: 0, x: -20, filter: "blur(2px)" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-2xl"
                    >
                        We are defined by our commitment to quality, innovation,
                        and exceptional customer satisfaction.
                    </motion.h3>

                    <div className="space-y-5">
                        <div
                            className="space-y-2"
                            onMouseEnter={() => setHoveredIndex(0)}
                        >
                            <motion.h4
                                initial={{
                                    opacity: 0,
                                    x: -20,
                                    filter: "blur(2px)",
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    filter: "blur(0px)",
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="text-xl"
                            >
                                Our Mission
                            </motion.h4>

                            <motion.p
                                initial={{
                                    opacity: 0,
                                    x: -20,
                                    filter: "blur(2px)",
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    filter: "blur(0px)",
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="text-xs md:text-sm"
                            >
                                Our mission is to deliver innovative,
                                high-quality products that enhance everyday
                                life. We are dedicated to exceeding industry
                                standards through exceptional craftsmanship and
                                sustainability, and we focus on meeting the
                                diverse needs of our global customers.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -20,
                                filter: "blur(2px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <Separator className="bg-foreground/40" />
                        </motion.div>

                        <div
                            className="space-y-2"
                            onMouseEnter={() => setHoveredIndex(1)}
                        >
                            <motion.h4
                                initial={{
                                    opacity: 0,
                                    x: -20,
                                    filter: "blur(2px)",
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    filter: "blur(0px)",
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="text-xl"
                            >
                                Our Vision
                            </motion.h4>

                            <motion.p
                                initial={{
                                    opacity: 0,
                                    x: -20,
                                    filter: "blur(2px)",
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    filter: "blur(0px)",
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                                className="text-xs md:text-sm"
                            >
                                Our vision is to be a global leader in our
                                industry, recognized for our commitment to
                                innovation and quality. We aim to set new
                                benchmarks in product excellence, fostering a
                                positive impact on communities and industries
                                worldwide.
                            </motion.p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20, filter: "blur(2px)" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >
                        <Button size="lg" className="w-full md:w-auto">
                            <span>Learn More</span>
                            <Icons.ChevronRight />
                        </Button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="aspect-[4/3] size-full basis-1/2"
            >
                <Image
                    src={
                        hoveredIndex === 0
                            ? "https://picsum.photos/seed/45646/1000/1000"
                            : "https://picsum.photos/seed/84464/1000/1000"
                    }
                    alt="What Defines Us"
                    width={1000}
                    height={1000}
                    className="size-full object-cover"
                />
            </motion.div>
        </section>
    );
}
