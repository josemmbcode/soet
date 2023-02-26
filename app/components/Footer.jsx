import React from "react";

export default function Footer() {
  return (
    <footer className="bg-pearl sticky top-[100vh] p-6">
      <p className="text-center">Copyright &copy; {new Date().getFullYear()} Jose Moreno</p>
    </footer>
  );
}
