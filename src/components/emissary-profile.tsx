"use client";

import Image from "next/image";
import { useState } from "react";
import type { Emissary } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Twitter, Youtube, Twitch } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { scheduleByDay } from "@/lib/data";

type EmissaryProfileProps = {
  emissary: Emissary;
  isReversed?: boolean;
};

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
    </svg>
  );

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );

const BlueskyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
  );

const iconMap = {
  twitter: Twitter,
  youtube: Youtube,
  twitch: Twitch,
  tiktok: TikTokIcon,
  instagram: InstagramIcon,
  bluesky: BlueskyIcon,
};

const TRUNCATE_LENGTH = 200;

const weekOrder = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
];

export function EmissaryProfile({ emissary, isReversed = false }: EmissaryProfileProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const image = PlaceHolderImages.find((p) => p.id === emissary.imageId);
  const statusIcon = emissary.statusIconId ? PlaceHolderImages.find((p) => p.id === emissary.statusIconId) : null;

  // Apply truncation logic for specific emissaries
  const needsTruncation = ['daud', 'kora', 'yilman', 'karmina'].includes(emissary.id);
  const isLongDescription = needsTruncation && emissary.description.length > TRUNCATE_LENGTH;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const descriptionToShow = isLongDescription && !isExpanded
    ? `${emissary.description.substring(0, TRUNCATE_LENGTH)}...`
    : emissary.description;

    const scheduleByTime: { [time: string]: string[] } = {};

    Object.entries(scheduleByDay).forEach(([day, schedules]) => {
        const dailySchedules = schedules.filter(s => s.vtuber === emissary.name);
        dailySchedules.forEach(schedule => {
            if (!scheduleByTime[schedule.time]) {
                scheduleByTime[schedule.time] = [];
            }
            scheduleByTime[schedule.time].push(day);
        });
    });
  
    const formattedSchedules = Object.entries(scheduleByTime).map(([time, days]) => {
        if (days.length === 0) return null;
  
        const dayIndices = days.map(day => weekOrder.indexOf(day)).sort((a, b) => a - b);
  
        let ranges: string[] = [];
        if (dayIndices.length > 0) {
          let rangeStart = 0;
          for (let i = 0; i < dayIndices.length; i++) {
              if (i === dayIndices.length - 1 || dayIndices[i+1] !== dayIndices[i] + 1) {
                  if (rangeStart === i) {
                      ranges.push(weekOrder[dayIndices[i]]);
                  } else {
                       const start = weekOrder[dayIndices[rangeStart]].split('-')[0];
                       const end = weekOrder[dayIndices[i]];
                       ranges.push(`${start} a ${end}`);
                  }
                  rangeStart = i + 1;
              }
          }
        }
        return `${ranges.join(', ')}: ${time}`;
    }).filter(Boolean) as string[];


  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-8 md:gap-12",
        isReversed && "md:flex-row-reverse"
      )}
    >
      <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
        {image && (
          <div className="relative w-[300px] h-[300px]">
            <Image
              src={image.imageUrl}
              alt={emissary.name}
              width={300}
              height={300}
              className="rounded-full shadow-2xl object-cover aspect-square"
              style={{
                boxShadow: `0 10px 15px -3px ${emissary.color}30, 0 4px 6px -4px ${emissary.color}30`,
                ...(emissary.id === 'aizen-nozumi' && { objectPosition: 'center' })
              }}
              data-ai-hint={image.imageHint}
            />
            {statusIcon && (
              <div className="absolute bottom-2 right-2 w-24 h-24">
                <Image
                  src={statusIcon.imageUrl}
                  alt={`${emissary.name} status icon`}
                  width={96}
                  height={96}
                  className="object-contain"
                  data-ai-hint={statusIcon.imageHint}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div className={cn("flex-grow text-center md:text-left", isReversed && "md:text-right")}>
        <h3 className="text-3xl font-bold font-headline" style={{ color: emissary.color }}>{emissary.name}</h3>
        {emissary.title && (
            <h4 className="text-2xl font-bold font-headline mt-1" style={{ color: emissary.color }}>{emissary.title}</h4>
        )}
        <p className="mt-4 text-lg text-white whitespace-pre-line">{descriptionToShow}</p>
        {isLongDescription && (
            <Button
              variant="link"
              onClick={toggleExpanded}
              className={cn("text-primary hover:text-primary/80 mt-2 px-0", isReversed ? "md:justify-end" : "md:justify-start")}
            >
              {isExpanded ? "Ver menos" : "Ver mais"}
            </Button>
          )}
        
        {(formattedSchedules.length > 0 || emissary.schedule_note) && (
          <div className="mt-4">
            <h5 className="text-xl font-bold" style={{ color: emissary.color }}>Horários:</h5>
            <div className="mt-2 space-y-1">
                {formattedSchedules.map((schedule, index) => (
                    <p key={index} className="text-lg text-white">
                        {schedule}
                    </p>
                ))}
                {emissary.schedule_note && <p className="text-lg text-white">{emissary.schedule_note}</p>}
            </div>
          </div>
        )}

        <div className={cn("mt-6 flex items-center gap-4 justify-center md:justify-start", isReversed && "md:justify-end")}>
          {emissary.socials.map((social) => {
            const Icon = iconMap[social.platform as keyof typeof iconMap];
            return (
              <Link
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${emissary.name} on ${social.platform}`}
                className="text-white hover:text-primary transition-colors duration-300"
              >
                <Icon className="h-7 w-7" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
