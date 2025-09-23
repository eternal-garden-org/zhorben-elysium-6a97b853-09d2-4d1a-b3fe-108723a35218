import { format, differenceInYears } from "date-fns";
import { ru } from "date-fns/locale";
import { MapPin } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

interface MemorialHeaderProps {
  fullName: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  photoUrl: string;
  className?: string;
}

export function MemorialHeader({
  fullName,
  birthDate,
  deathDate,
  birthPlace,
  deathPlace,
  photoUrl,
  className,
}: MemorialHeaderProps) {
  const birthDay = new Date(birthDate);
  const deathDay = new Date(deathDate);

  const birthDayMonth = format(birthDay, "d MMMM", { locale: ru });
  const deathDayMonth = format(deathDay, "d MMMM", { locale: ru });
  const birthYear = format(birthDay, "yyyy");
  const deathYear = format(deathDay, "yyyy");

  const age = differenceInYears(deathDay, birthDay);

  return (
    <div
      className={cn("relative w-full", className)}
      style={{
        backgroundImage: `url('http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474627837_bg_image_3.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-start py-16 gap-8">
          {/* Photo on the left */}
          <div className="flex-shrink-0">
            <div className="relative w-[480px] h-[480px]">
              <Image
                src={photoUrl}
                alt={`Фото ${fullName}`}
                fill
                sizes="480px"
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Text content on the right */}
          <div className="flex-1 flex flex-col justify-between h-[480px]">
            <div>
              {/* Full name */}
              <Typography.H1 
                className="text-white font-bold text-left mb-0"
                style={{ fontSize: "40px", lineHeight: "1.2" }}
              >
                {fullName}
              </Typography.H1>

              {/* Age badge */}
              <div 
                className="inline-block mt-10 px-4 py-2 text-black font-light"
                style={{ 
                  backgroundColor: "#F6B95A", 
                  borderRadius: "999px",
                  fontSize: "16px"
                }}
              >
                {age} лет жизни
              </div>

              {/* Birth and death dates */}
              <div className="mt-5 text-left">
                <span className="text-[#8B8B8B] font-light">
                  {birthDayMonth} 
                </span>
                <span className="text-white font-bold ml-1" style={{ fontSize: "20px" }}>
                  {birthYear}
                </span>
                <span className="text-white font-bold mx-3" style={{ fontSize: "20px" }}>
                  –
                </span>
                <span className="text-white font-bold" style={{ fontSize: "20px" }}>
                  {deathYear}
                </span>
                <span className="text-[#8B8B8B] font-light ml-1">
                  {deathDayMonth}
                </span>
              </div>
            </div>

            {/* Location blocks at the bottom */}
            <div className="space-y-4">
              {/* Birth place */}
              <div>
                <div className="flex items-center mb-1">
                  <MapPin size={16} className="text-[#8B8B8B] mr-2" />
                  <Typography.P 
                    className="text-[#8B8B8B] m-0"
                    style={{ fontSize: "14px" }}
                  >
                    Место рождения
                  </Typography.P>
                </div>
                <Typography.P 
                  className="text-white font-bold m-0"
                  style={{ fontSize: "20px" }}
                >
                  {birthPlace}
                </Typography.P>
              </div>

              {/* Death place */}
              <div>
                <div className="flex items-center mb-1">
                  <MapPin size={16} className="text-[#8B8B8B] mr-2" />
                  <Typography.P 
                    className="text-[#8B8B8B] m-0"
                    style={{ fontSize: "14px" }}
                  >
                    Место смерти
                  </Typography.P>
                </div>
                <Typography.P 
                  className="text-white font-bold m-0"
                  style={{ fontSize: "20px" }}
                >
                  {deathPlace}
                </Typography.P>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}