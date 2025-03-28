"use client"

import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@heroui/react"
import { Bot, Cpu, Zap, BarChart, Lightbulb, Database } from "lucide-react"
import { BorderBeam } from "@/components/border-beam";

export default function CardExamples() {
  return (
    
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card Example 1 - Simple with Icon Header */}
        <Card className="max-w-[400px] rounded-xl shadow-sm hover:shadow-xl  hover:bg-blue-50 transition-colors">
          
          <CardHeader className="flex gap-3 items-center">
            <div className="p-2 bg-blue-50 rounded-full">
              <Bot className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium">Chatbots Inteligentes</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-gray-600">
              Oferecemos soluções inteligentes para simplificar processos, reduzindo tempo e custos operacionais.
            </p>
          </CardBody>
          
          <CardFooter>
            <Link href="#" className="text-blue-500 flex items-center gap-1">
              Saiba mais
              <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Card Example 2 - Gradient Background */}
        <Card className="max-w-[400px] rounded-xl overflow-hidden border-none shadow-sm hover:shadow-xl  relative group hover:bg-purple-50 transition-colors">
      {/* Decorative elements */}
      <BorderBeam size={100} duration={10} delay={3} clockwise={false} />

      
          <CardHeader className="flex gap-3 items-center">
            <div className="p-2 bg-purple-50 rounded-full">
              {/* Heroicons Sparkles icon */}
              <Cpu className="h-6 w-6 text-purple-500" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium">Automação de Sistemas</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-gray-600  leading-relaxed"> Transformamos desafios em oportunidades, impulsionando o crescimento e a performance do seu negócio.</p>
          </CardBody>
          
          <CardFooter>
            <Link href="#" className="text-purple-500 flex items-center gap-1">
              Explorar soluções
              <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        
     
    </Card>

        {/* Card Example 3 - Border Accent */}
        <Card className="max-w-[400px] rounded-xl shadow-sm hover:shadow-xl  group hover:bg-green-50 transition-colors">
          <CardHeader className="flex gap-3 items-center">
            <div className="p-2 bg-green-50 rounded-full">
              <Zap className="h-6 w-6 text-green-500" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium">Tecnologia Avançada</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-gray-600">
              Utilizamos tecnologia de ponta para otimizar processos de forma estratégica e eficaz.
            </p>
          </CardBody>
          
          <CardFooter>
            <Link href="#" className="text-green-500 flex items-center gap-1">
              Ver tecnologias
              <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Card Example 4 - Subtle Hover Effect */}
        <Card className="max-w-[400px] rounded-xl shadow-sm hover:shadow-xl  group hover:bg-amber-50 transition-colors">
          <CardHeader className="flex gap-3 items-center">
            <div className="p-2 bg-amber-50 rounded-full group-hover:bg-white transition-colors">
              <BarChart className="h-6 w-6 text-amber-500" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium">Otimização de Processos</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-gray-600">
              Reduzimos custos operacionais através de soluções inovadoras que simplificam fluxos de trabalho.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="#" className="text-amber-500 flex items-center gap-1">
              Otimizar agora
              <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Card Example 5 - Different Layout Structure */}
        <Card className="max-w-[400px] rounded-xl shadow-sm hover:shadow-xl  overflow-hidden hover:bg-gray-100 transition-colors">
        <BorderBeam size={180} duration={10} delay={5} colorFrom = {"#365314"} colorTo = {"#F0FDF4"} />
          <div className="bg-gray-500 text-white p-4 flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-yellow-400" />
            <p className="text-lg font-medium">Soluções Inteligentes</p>
          </div>
          <CardBody className="pt-6">
            <p className="text-gray-600">
              Nosso foco é transformar desafios em oportunidades, impulsionando o crescimento do seu negócio de forma
              estratégica.
            </p>
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Tecnologia avançada</p>
            <Link href="#" className="text-blue-500 flex items-center gap-1">
              Descobrir
              <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Card Example 6 - Data Focus */}
<Card className="max-w-[400px] rounded-xl shadow-sm hover:shadow-xl group hover:bg-blue-50 transition-colors">
  <CardHeader className="flex gap-3 items-center">
    <div className="p-2 bg-blue-50 rounded-full group-hover:bg-white transition-colors">
      <Database className="h-6 w-6 text-blue-500" />
    </div>
    <div className="flex flex-col">
      <p className="text-lg font-medium">Gestão de Dados</p>
    </div>
  </CardHeader>
  <Divider />
  <CardBody>
    <p className="text-gray-600">
      Transformamos dados em insights acionáveis com nossas soluções de análise e visualização de dados inteligentes.
    </p>
  </CardBody>
  <Divider />
  <CardFooter>
    <Link href="#" className="text-blue-500 flex items-center gap-1">
      Explorar dados
      <span className="ml-1">→</span>
    </Link>
  </CardFooter>
</Card>
      </div>
    
  )
}

