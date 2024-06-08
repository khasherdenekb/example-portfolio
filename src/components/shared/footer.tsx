import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Newsletter } from "./newsletter";
import { Card } from "../ui/card";

export default function Footer(): JSX.Element {
  return (
    <Card className="bg-white my-6">
      <div className="py-16">
        <Newsletter />
        <hr className="py-4 mx-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-14">
          <div className="space-y-4">
            <Link className="flex gap-2 items-center" href="#" prefetch={false}>
              <Home className="w-5 h-5" />
              <p className="font-medium text-sm tracking-normal">
                С. Баасанжав
              </p>
            </Link>
            <p className="max-w-md text-sm">
              Ace Inc is a leading provider of innovative solutions for
              businesses of all sizes. Our mission is to empower our clients
              with the tools they need to succeed in the digital age.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-300"
                prefetch={false}
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>

              <Link
                href="#"
                className="text-gray-400 hover:text-gray-300"
                prefetch={false}
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-300"
                prefetch={false}
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <TempData />
            <TempData />
            <TempData />
          </div>
        </div>
      </div>
    </Card>
  );
}

const TempData = () => {
  return (
    <div className="space-y-2">
      <h4 className="text-white font-semibold">Company</h4>
      <ul className="space-y-1">
        <li>
          <Link href="#" className="hover:text-gray-300" prefetch={false}>
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-gray-300" prefetch={false}>
            Careers
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-gray-300" prefetch={false}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-gray-300" prefetch={false}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

function FacebookIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
    </svg>
  );
}
