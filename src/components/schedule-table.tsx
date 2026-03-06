import { scheduleByDay } from "@/lib/data";

const weekOrder = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

const timePeriods = ["Manhã", "Tarde", "Noite", "Madrugada"];

const getTimePeriod = (time: string) => {
    const hour = parseInt(time.split(':')[0]);
    if (hour >= 6 && hour < 12) return "Manhã";
    if (hour >= 12 && hour < 18) return "Tarde";
    if (hour >= 18 && hour <= 23) return "Noite";
    return "Madrugada"; // Covers 00:00-05:59
};

const getShortName = (name: string) => {
    if (name === "Megara LePaon") return "Meg";
    if (name === "Hiroguighost") return "Hiro";
    return name.split(" ")[0];
};

type ProcessedSchedule = Record<string, Record<string, { vtuber: string; time: string }[]>>;

const processedSchedule: ProcessedSchedule = weekOrder.reduce((acc, day) => {
    const dayKey = day as keyof typeof scheduleByDay;
    const daySchedules = scheduleByDay[dayKey] || [];
    
    if (daySchedules.length > 0) {
        const periods: Record<string, { vtuber: string; time: string }[]> = { Manhã: [], Tarde: [], Noite: [], Madrugada: [] };
        
        daySchedules.forEach(schedule => {
            const period = getTimePeriod(schedule.time);
            periods[period].push({
                vtuber: getShortName(schedule.vtuber),
                time: schedule.time.split(' ')[0]
            });
        });

        for (const period in periods) {
            periods[period].sort((a, b) => {
                const timeA = new Date(`1970-01-01T${a.time}:00`);
                const timeB = new Date(`1970-01-01T${b.time}:00`);
                return timeA.getTime() - timeB.getTime();
            });
        }

        acc[day] = periods;
    }
    return acc;
}, {} as ProcessedSchedule);


export function ScheduleTable() {
  return (
    <div className="space-y-12">
      {weekOrder.map(day => {
        const dailySchedule = processedSchedule[day];
        if (!dailySchedule) return null;

        const hasSchedule = Object.values(dailySchedule).some(p => p.length > 0);
        if (!hasSchedule) return null;

        return (
          <div key={day}>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-6 font-headline bg-gradient-to-r from-[#E58544] via-[#ffde59] to-[#ff9f59] text-transparent bg-clip-text">
              {day}
            </h3>
            <div className="bg-background/50 backdrop-blur-sm border border-[#ffde59]/30 rounded-lg p-4 md:p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
                {timePeriods.map(period => (
                  <div key={period}>
                    <h4 className="font-bold text-lg md:text-xl text-foreground/80 mb-4">{period}</h4>
                    <div className="space-y-3">
                      {dailySchedule[period].length > 0 ? (
                        dailySchedule[period].map((item, index) => (
                          <p key={index} className="text-foreground text-sm md:text-base">
                            {item.time} - {item.vtuber}
                          </p>
                        ))
                      ) : (
                        <p className="text-foreground/50">-</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}
      <p className="text-foreground/70 col-span-1 md:col-span-2 lg:col-span-3 text-center mt-8">
        A programação está sujeita a alterações. Siga os Emissários para atualizações.
      </p>
    </div>
  )
}
