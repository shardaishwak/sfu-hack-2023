import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useContext } from "react";
import { askChat } from "@/chat-api";
import {
	SignOutUser,
	authWithGoogle,
	signInUser,
	signUpUser,
} from "@/firebase";
import { AuthContext } from "@/provider/context";
import Navbar from '@/components/Navbar'
import Body from '@/components/Body'
import InputBox from "@/components/InputBox";
import SignIn from "@/components/SignIn";
// import GoogleSignIn from "@/components/GoogleAuth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const { currentUser, signOut } = useContext(AuthContext);
	React.useEffect(() => {
		(async () => {})();
	}, []);


	const logout = async () => {
		await signOut(() => {});
	};



	return (
		<main className="flex min-h-screen flex-col bg-white ">
     <Navbar />
     <Body />
     <InputBox/>
			{!currentUser && (
				<>
					<SignIn/>
					{/* <button onClick={signin}>sign in</button>
					<button onClick={signup}>sign up</button> */}
					{/* <button onClick={googleAuth}>Authenticate with google</button> */}
					{/* <GoogleSignIn/> */}
				</>
			)}
			{currentUser && (
				<>
					<button onClick={logout}>logout</button>
				</>
			)}
		</main>
	);
}
