"use client";

import { ChevronDown } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface MemorialBioProps {
  className?: string;
}

export function MemorialBio({ className }: MemorialBioProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <Accordion type="single" collapsible className="w-full space-y-5">
        <AccordionItem 
          value="biography" 
          className={cn(
            "border border-[#2D2D2D] rounded-lg px-6 py-4",
            "data-[state=open]:border-white transition-colors duration-200"
          )}
        >
          <AccordionTrigger className="hover:no-underline">
            <Typography.H3 className="text-[20px] font-bold text-white text-left">
              Биография
            </Typography.H3>
            <ChevronDown className="h-5 w-5 shrink-0 text-[#8B8B8B] transition-transform duration-200 [&[data-state=open]]:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <Typography.P className="text-[16px] text-[#8B8B8B] leading-relaxed mt-0">
              Александр Викторович Карпук родился в Бресте. С ранних лет он проявлял интерес к науке и искусству. После окончания школы Александр поступил в университет, где изучал инженерное дело. В своей карьере он достиг значительных успехов, работая над различными проектами в области технологий. В свободное время Александр увлекается фотографией и путешествиями, что позволяет ему открывать новые горизонты и вдохновляться окружающим миром.
            </Typography.P>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem 
          value="hobbies" 
          className={cn(
            "border border-[#2D2D2D] rounded-lg px-6 py-4",
            "data-[state=open]:border-white transition-colors duration-200"
          )}
        >
          <AccordionTrigger className="hover:no-underline">
            <Typography.H3 className="text-[20px] font-bold text-white text-left">
              Увлечения
            </Typography.H3>
            <ChevronDown className="h-5 w-5 shrink-0 text-[#8B8B8B] transition-transform duration-200 [&[data-state=open]]:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <Typography.P className="text-[16px] text-[#8B8B8B] leading-relaxed mt-0">
              Александр был страстным любителем фотографии и часами мог находиться в темной комнате, проявляя снимки. Он увлекался путешествиями и за свою жизнь посетил более 30 стран. Особенно любил горные походы и альпинизм. В молодости занимался шахматами и даже участвовал в городских турнирах. Также увлекался чтением исторической литературы и коллекционированием монет.
            </Typography.P>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem 
          value="education" 
          className={cn(
            "border border-[#2D2D2D] rounded-lg px-6 py-4",
            "data-[state=open]:border-white transition-colors duration-200"
          )}
        >
          <AccordionTrigger className="hover:no-underline">
            <Typography.H3 className="text-[20px] font-bold text-white text-left">
              Образование
            </Typography.H3>
            <ChevronDown className="h-5 w-5 shrink-0 text-[#8B8B8B] transition-transform duration-200 [&[data-state=open]]:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <Typography.P className="text-[16px] text-[#8B8B8B] leading-relaxed mt-0">
              Александр окончил Брестский государственный технический университет по специальности "Инженерное дело" с красным дипломом в 1987 году. Во время учебы активно участвовал в студенческих научных конференциях и был председателем студенческого совета. После университета прошел несколько курсов повышения квалификации в области современных технологий. В 2010 году получил степень магистра делового администрирования в международной бизнес-школе.
            </Typography.P>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}