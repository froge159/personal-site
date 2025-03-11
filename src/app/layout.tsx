"use client"
import "./globals.css";
import {AnimatePresence, motion} from "motion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const queryClient = new QueryClient();

export default function RootLayout({children}: {children: React.ReactNode;}) {
	return (
	<QueryClientProvider client={queryClient}>
		<html lang="en">
			<head><title>froge159</title></head>
			<body className={`w-full h-full min-h-screen text-white overflow-x-hidden`}>
				<AnimatePresence>
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						transition={{duration: 0.3}}
						key={Math.random()}>
							
						{children}
					</motion.div>
				</AnimatePresence>
			</body>
		</html>
	</QueryClientProvider>
	);
}
  