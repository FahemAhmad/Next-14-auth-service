"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button variant={"link"}>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
