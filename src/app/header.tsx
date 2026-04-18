import Link from "next/link";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#emissarios", label: "Emissários" },
  { href: "#horarios", label: "Horários" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="#inicio" className="text-2xl font-bold text-primary font-headline">
            Emissários
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-white hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-primary/20">
                <nav className="flex flex-col items-center space-y-8 mt-16">
                  {navLinks.map((link) => (
                     <SheetTrigger asChild key={link.href}>
                        <Link
                            href={link.href}
                            className="text-2xl font-medium text-white hover:text-primary transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                     </SheetTrigger>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
