import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { scheduleByDay } from "@/lib/data";
import Link from "next/link";

const weekOrder = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

export function ScheduleTable() {
  const orderedSchedule = weekOrder.map(day => ({
    day,
    schedules: scheduleByDay[day as keyof typeof scheduleByDay] || []
  })).filter(daySchedule => daySchedule.schedules.length > 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {orderedSchedule.map((dailySchedule) => (
        <Card key={dailySchedule.day} className="bg-background/50 backdrop-blur-sm border border-[#ffde59]/50 flex flex-col">
          <CardHeader>
            <CardTitle className="bg-gradient-to-r from-[#E58544] via-[#ffde59] to-[#ff9f59] text-transparent bg-clip-text font-bold text-2xl text-center">{dailySchedule.day}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow gap-4">
            {dailySchedule.schedules.length > 0 ? (
              dailySchedule.schedules.map((item) => (
                <div key={item.id} className="bg-background/40 p-4 rounded-lg border border-[#ffde59]/30 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="font-bold text-lg text-foreground">{item.vtuber}</p>
                    <p className="text-foreground/80">{item.time}</p>
                    <p className="text-foreground/80">{item.platform}</p>
                  </div>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="mt-2 self-start bg-gradient-to-r from-[#E58544] via-[#ffde59] to-[#ff9f59] text-transparent bg-clip-text font-bold hover:opacity-90 transition-opacity">
                    Assistir
                  </Link>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-foreground/50">Sem lives agendadas.</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
       <p className="text-foreground/70 col-span-1 md:col-span-2 lg:col-span-3 text-center mt-4">A programação está sujeita a alterações. Siga os Emissários para atualizações.</p>
    </div>
  );
}
