import Image from "next/image";

/**
 * Renders the Home component.
 * 
 * @returns The rendered Home component.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Docs
    </div>
  );
}

// function that calculates the length of a string
function calculateLength(string: string) {
  return string.length;
}

// function that returns a greeting message
function greeting(name: string) {
  return `Hello, ${name}!`;
}