"use client";
import BlogItems from "@/Components/BlogItems";
import BlogList from "@/Components/BlogList";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <BlogItems />
      <BlogList />
    </>
  );
}
