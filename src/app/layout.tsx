"use client"
import localFont from "next/font/local";
import "./globals.css";
import {AnimatePresence, motion} from "motion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const satoshiMedium = localFont({
	src: '../../public/fonts/Satoshi-Medium.otf',
	style: 'normal',
	variable: '--font-satoshiMedium'
})

export const satoshiLight = localFont({
	src: '../../public/fonts/Satoshi-Light.otf',
	style: 'normal',
	variable: '--font-satoshiLight'
})

export const satoshiRegular = localFont({
	src: '../../public/fonts/Satoshi-Regular.otf',
	style: 'normal',
	variable: '--font-satoshiRegular'
})


export const satoshiBold = localFont({
	src: '../../public/fonts/Satoshi-Bold.otf',
	style: 'normal',
	variable: '--font-satoshiBold'
})

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
  