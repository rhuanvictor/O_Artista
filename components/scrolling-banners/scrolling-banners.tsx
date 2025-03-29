"use client"

import { useRef } from "react"
import {
  JavascriptIcon,
  N8nIcon,
  NextJsIcon,
  PowerBIIcon,
  TypescriptIcon,
  DatabricksIcon,
  SparkIcon,
  ReactIcon,
  NodeJsIcon,
  DjangoIcon,
} from "@/components/icons/social"

export default function ScrollingBanner() {
  const icons = [
    { Icon: NextJsIcon, id: "nextjs" },
    { Icon: TypescriptIcon, id: "typescript" },
    { Icon: JavascriptIcon, id: "javascript" },
    { Icon: DatabricksIcon, id: "databricks" },
    { Icon: DjangoIcon, id: "django" },
    { Icon: ReactIcon, id: "react" },
    { Icon: NodeJsIcon, id: "nodejs" },
    { Icon: SparkIcon, id: "spark" },
    { Icon: PowerBIIcon, id: "powerbi" },
    { Icon: N8nIcon, id: "n8n" },
  ]

  const renderIcons = (key: string) => (
    <div className="flex items-center" key={key}>
      {icons.map(({ Icon, id }) => (
        <span key={`${key}-${id}`} className="inline-flex items-center justify-center text-2xl sm:text-3xl md:text-4xl mx-4 sm:mx-6 md:mx-8">
          <Icon />
        </span>
      ))}
    </div>
  )

  return (
    <div className="relative w-full px-4 sm:px-6 md:px-8 my-6 sm:my-8 md:my-10 overflow-hidden">
      {/* Container com efeito fade */}
      <div
        className="relative w-full mx-auto overflow-hidden"
        style={{
          maxWidth: '90vw',
          maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden="true"
      >
        {/* Animação usando Tailwind */}
        <div className="flex whitespace-nowrap animate-infinite-scroll">
          {renderIcons("set1")}
          {renderIcons("set2")}
          {renderIcons("set3")}
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-infinite-scroll {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  )
}
