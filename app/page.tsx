

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Badge from "@/components/chip/chip";
import ScrollingBanner from "@/components/scrolling-banners/scrolling-banners";
import Picture from "@/components/picture";
import FeaturesBento from "@/components/feature-bento";
import CustomCard from "@/components/custom-card"; 

import { LastButNotLeast } from "@/components/last-but-not-least";
import  {GradualSpacing}   from "@/components/gradual-spacing";
import { fontLexend } from "@/config/fonts";
import {BorderBeam} from "@/components/border-beam";
import TextCloudDemo  from "@/components/icon-cloud-demo";
import  SvgComponent from "@/components/GradualSvg";
import WhatsAppButton from "@/components/whatsapp-button"
import { motion } from "framer-motion";
import NextParticleComponent from '@/components/HeartParticles';
import CardExamples from '@/components/theme-context';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      
      <section className="text-center w-full mx-auto py-10 max-w-[1324px]">
        <div className={`${title({ size: "sm" })}`}>
          <h1 className="font-medium leading-[1.2]" style={{ fontSize: 'clamp(24px, 5vw, 50px)' }}>
            Desenvolvemos Softwares Personalizados e Automação sob medida para tornar sua empresa mais  
            <span className= "text-fuchsia-700 dark:bg-gradient-to-b dark:from-zinc-100 dark:to-fuchsia-900 dark:bg-clip-text dark:text-transparent">
              <strong> Eficiente, Dinâmico e&nbsp;</strong>
            </span>
            <span className="relative inline-block">
              <strong >
                <GradualSpacing className="text-fuchsia-700 dark:bg-gradient-to-b dark:from-zinc-100 dark:to-fuchsia-900 dark:bg-clip-text dark:text-transparent relative z-10" text="Inteligente!" />  
              </strong>

              <SvgComponent/>
            </span>
          </h1>
        </div>
        <br /><br />
        <Badge /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </section>

      {/* Seção de Background Light */}
      <section className="flex flex-wrap justify-center gap-6 p-4">
      <div className={`${title({ size: "sm" })}`}>
  
    <GradualSpacing 
      className="font-display text-center  font-bold tracking-normal text-sky-950 dark:text-white md:text-5xl md:leading-[5rem] relative z-10"
      text="Nossas Soluções:"
    />
  
</div>
  <CardExamples  />

</section>






      {/* Seção de Teste de Comunicação <TestCommunication /> */}
      <section className="text-lg font-bold">
      
      <ScrollingBanner />
      </section>

      {/* Seção de Funcionalidades */}
      <section className="mt-20 lg:mt-60 text-center">
        <h1 className="text-2xl lg:text-4xl font-semibold">Funcionalidades</h1>
        <br />
        <FeaturesBento />
        <WhatsAppButton />
      </section>

      

      {/* Seção de Banner Rolante<NextParticleComponent />  <ScrollingBanner />*/}
      <section>
      <TextCloudDemo  />
      
      </section>

      {/* Seção Final */}
      <section>
        <LastButNotLeast />
      </section>
    </section>
  );
}
