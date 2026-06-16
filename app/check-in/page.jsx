"use client";

import { useSearchParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckInChat from "@/components/check-in/CheckInChat";


export default function CheckInPage() {
  const searchParams = useSearchParams();

  const firstPrompt = searchParams.get("q") ?? "";
  return(
    <>
      <Navbar />
      <CheckInChat firstPrompt={firstPrompt}/>
      <Footer />
    </>
  );
}