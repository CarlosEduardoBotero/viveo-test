import Navbar from "./navbar";

export default async function Header() {
  return (
    <header className="bg-sky-950 p-2 flex justify-between items-center h-[--header-height] w-full fixed top-0">
      <h4 className="text-lg md:text-xl text-white">User App 🧑‍💻</h4>
      <Navbar />
    </header>
  );
}
