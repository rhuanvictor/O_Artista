"use client"

import { useEffect, useRef, useState } from "react"
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
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)

  // Ícones
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

  // Calcula a largura do conteúdo apenas no início e quando a tela for redimensionada
  useEffect(() => {
    const calculateWidth = () => {
      if (innerRef.current) {
        const singleSetWidth = innerRef.current.firstElementChild?.clientWidth || 0
        setScrollWidth(singleSetWidth)
      }
    }

    calculateWidth()
    window.addEventListener("resize", calculateWidth)

    return () => {
      window.removeEventListener("resize", calculateWidth)
    }
  }, []) // Apenas executa no início e quando a tela for redimensionada

  // Renderiza os ícones
  const renderIcons = (key: string) => (
    <div className="flex items-center" key={key}>
      {icons.map(({ Icon, id }) => (
        <span key={`${key}-${id}`} className="inline-flex items-center justify-center text-4xl mx-8">
          <Icon />
        </span>
      ))}
    </div>
  )

  return (
    <div className="relative flex justify-center items-center my-10">
      {/* Container principal com efeito fade nas laterais */}
      <div
        ref={containerRef}
        className="relative w-[100%] max-w-5xl overflow-hidden"
        style={{
          background: "transparent",
          maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden="true"
      >
        <div
          ref={innerRef}
          className="flex whitespace-nowrap"
          style={{
            animation: `scroll ${scrollWidth / 60}s linear infinite`,
          }}
        >
          {renderIcons("set1")}
          {renderIcons("set2")}
          {renderIcons("set3")}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${scrollWidth}px);
          }
        }
      `}</style>
    </div>
  )
}
