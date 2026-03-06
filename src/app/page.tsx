import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EmissaryProfile } from "@/components/emissary-profile";
import { ScheduleTable } from "@/components/schedule-table";
import { firstGeneration, secondGeneration, thirdGeneration } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/fade-in";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const comingSoonImage = PlaceHolderImages.find((p) => p.id === 'coming-soon');
  const emissariosLogo = PlaceHolderImages.find((p) => p.id === 'emissarios-logo');
  const heroFrame = PlaceHolderImages.find((p) => p.id === 'emissarios-frame');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section
          id="inicio"
          className="relative w-full h-screen text-center overflow-hidden"
        >
           <div className="absolute inset-0">
            {heroFrame && (
                <Image
                src={heroFrame.imageUrl}
                alt="Fundo Moldura Emissários"
                fill
                className="object-contain z-1 opacity-20 scale-125"
                data-ai-hint={heroFrame.imageHint}
                />
            )}
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
            <div className="animate-fade-in relative w-[550px] h-[550px]">
                {emissariosLogo && (
                    <Image
                        src={emissariosLogo.imageUrl}
                        alt="Emissários Logo"
                        fill
                        className="object-contain"
                        data-ai-hint={emissariosLogo.imageHint}
                    />
                )}
            </div>
            <p className="text-lg md:text-2xl max-w-3xl text-white animate-fade-in mt-4" style={{ animationDelay: '0.3s' }}>
              O Grupo Emissários simboliza a união de diversos VTubers que escolheram crescer juntos. Nossa missão é entreter todos que nos assistem, trazendo em cada live um ambiente seguro e acolhedor para o nosso público. Venha conhecer os nossos Emissários!
            </p>
            <Button asChild size="lg" className="mt-8 bg-transparent border border-[#ffde59]/80 hover:bg-white/10 transition-all hover:scale-105 animate-fade-in text-lg" style={{ animationDelay: '0.6s' }}>
                <Link href="#emissarios">
                    <span className="font-bold bg-gradient-to-r from-[#E58544] via-[#ffde59] to-[#ff9f59] text-transparent bg-clip-text">
                        Conheça os Emissários
                    </span>
                </Link>
            </Button>
          </div>
        </section>

        <section id="emissarios" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline bg-gradient-to-r from-[#E58544] via-[#ffde59] to-[#ff9f59] text-transparent bg-clip-text">
              Nossos Emissários
            </h2>
            <Tabs defaultValue="first" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="first">1ª Geração</TabsTrigger>
                <TabsTrigger value="second">2ª Geração</TabsTrigger>
                <TabsTrigger value="third">3ª Geração</TabsTrigger>
                <TabsTrigger value="fourth">4ª Geração</TabsTrigger>
              </TabsList>
              <TabsContent value="first">
                <div className="flex flex-col gap-20">
                  {firstGeneration.map((emissary, index) => (
                    <FadeIn key={emissary.id}>
                      <EmissaryProfile emissary={emissary} isReversed={index % 2 !== 0} />
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="second">
                <div className="flex flex-col gap-20">
                  {secondGeneration.map((emissary, index) => (
                     <FadeIn key={emissary.id}>
                      <EmissaryProfile emissary={emissary} isReversed={index % 2 !== 0} />
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="third">
                <div className="flex flex-col gap-20">
                  {thirdGeneration.map((emissary, index) => (
                     <FadeIn key={emissary.id}>
                      <EmissaryProfile emissary={emissary} isReversed={index % 2 !== 0} />
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="fourth">
                <div className="flex items-center justify-center">
                  {comingSoonImage && (
                    <Image
                      src={comingSoonImage.imageUrl}
                      alt="Em Breve"
                      width={800}
                      height={450}
                      quality={100}
                      className="object-contain rounded-lg border-4 border-primary shadow-2xl"
                      style={{ boxShadow: `0 10px 25px -5px hsl(var(--primary) / 0.4), 0 8px 10px -6px hsl(var(--primary) / 0.4)` }}
                      data-ai-hint={comingSoonImage.imageHint}
                    />
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <Separator className="bg-gradient-to-r from-transparent via-[#ffde59]/50 to-transparent" />

        <section id="horarios" className="py-20 md:py-28 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline bg-gradient-to-r from-[#E58544] via-[#ffde59] to-[#ff9f59] text-transparent bg-clip-text">
              Horários
            </h2>
            <ScheduleTable />
          </div>
        </section>

        <Separator className="bg-gradient-to-r from-transparent via-[#ffde59]/50 to-transparent" />

        <section id="projetos" className="py-20 md:py-28 bg-transparent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline bg-gradient-to-r from-[#E58544] via-[#ffde59] to-[#ff9f59] text-transparent bg-clip-text pb-2">
              Projetos
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-foreground mb-8">
                Além das lives, também criamos projetos interativos para a comunidade. Confira o que estamos aprontando!
              </p>
              <div className="flex flex-col items-center gap-4">
                <Button size="lg" disabled className="w-full max-w-md bg-transparent border border-[#ffde59]/80 text-lg">
                    <span className="font-bold bg-gradient-to-r from-[#E58544] via-[#ffde59] to-[#ff9f59] text-transparent bg-clip-text">
                        Em breve
                    </span>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
