import Link from "next/link";

export function Footer() {
  return (
    <footer id="contato" className="bg-transparent border-t border-primary/20 py-12">
      <div className="container mx-auto px-4 text-center text-foreground/70">
        <h3 className="text-2xl font-bold font-headline mb-4 bg-gradient-to-r from-[#E58544] via-[#ffde59] to-[#ff9f59] text-transparent bg-clip-text">Emissários</h3>
        <p className="max-w-3xl mx-auto mb-6">
          Nossa missão é criar pontes entre mundos, trazendo entretenimento e novas perspectivas através de nossos Emissários.
        </p>
        <div className="mb-6">
          <p className="font-semibold text-foreground/90 mb-2">Informações de Contato:</p>
          <div className="flex items-center justify-center gap-4">
            <Link 
              href="https://x.com/Emissariosvt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              @Emissariosvt
            </Link>
          </div>
        </div>
        <div className="text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Emissários. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
