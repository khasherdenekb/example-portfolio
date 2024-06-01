"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 rounded-full text-white transition-opacity w-12 h-12 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      size={"icon"}
    >
      <ArrowUp />
    </Button>
  );
};

export default GoToTopButton;
