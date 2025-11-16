import { PlaceHolderImages } from "./placeholder-images";

type ScheduleItem = {
  time: string;
  topic: string;
  speaker: string;
  mode: 'Hybrid' | 'Online' | 'Offline';
};

type ScheduleData = {
  day1: ScheduleItem[];
  day2: ScheduleItem[];
  day3: ScheduleItem[];
};

export const scheduleData: ScheduleData = {
  day1: [
    { time: '10:00 - 10:15 AM', topic: 'Inauguration & Welcome', speaker: 'Organizing Committee', mode: 'Hybrid' },
    { time: '10:15 - 12:15 PM', topic: 'Talk 1: AI/ML for Grid Resilience', speaker: 'Dr. Abhinav Kumar, IIT Hyderabad', mode: 'Offline' },
    { time: '12:15 - 1:15 PM', topic: 'Lunch', speaker: '-', mode: 'Offline' },
    { time: '1:15 - 3:15 PM', topic: 'Talk 2: Energy Efficiency & Smart Distribution', speaker: 'Muthukumar T, NSIC Hyderabad', mode: 'Hybrid' },
    { time: '3:15 - 3:30 PM', topic: 'Closing Remarks for Day 1', speaker: 'Organizing Committee', mode: 'Hybrid' },
  ],
  day2: [
    { time: '10:00 - 12:00 PM', topic: 'Talk 3: Multilevel Inverters for Smart Grids', speaker: 'K.V. Praveen Kumar, NIT Surat', mode: 'Online' },
    { time: '12:00 - 1:00 PM', topic: 'Lunch', speaker: '-', mode: 'Offline' },
    { time: '1:00 - 3:00 PM', topic: 'Talk 4: EV Charging & Smart Metering', speaker: 'Hari Krishna Palusam, EcoGreen Industries', mode: 'Online' },
  ],
  day3: [
    { time: '10:00 - 11:30 AM', topic: 'Talk 5: AI in Power Electronics & EV Drives', speaker: 'Dr. T. Ramesh, NIT Andhra Pradesh', mode: 'Offline' },
    { time: '11:30 AM - 12:00 PM', topic: 'Break', speaker: '-', mode: 'Offline' },
    { time: '12:00 - 1:30 PM', topic: 'Talk 6: Renewable Energy Integration Challenges', speaker: 'Prof. Anil Naik, NIT Warangal', mode: 'Offline' },
    { time: '1:30 - 2:15 PM', topic: 'Lunch', speaker: '-', mode: 'Offline' },
    { time: '2:15 - 4:00 PM', topic: 'Student Project Demonstrations', speaker: 'All Participants', mode: 'Hybrid' },
  ],
};

type Speaker = {
  id: string;
  name: string;
  affiliation: string;
  topic: string;
  imageUrl: string;
  imageHint: string;
  mode: 'Hybrid' | 'Online' | 'Offline';
};

const speakerImages = PlaceHolderImages.reduce((acc, img) => {
  acc[img.id] = { url: img.imageUrl, hint: img.imageHint };
  return acc;
}, {} as Record<string, { url: string; hint: string }>);


export const speakersData: Speaker[] = [
  {
    id: '1',
    name: 'Dr. Abhinav Kumar',
    affiliation: 'Professor, Department of Electrical Engineering, IIT Hyderabad',
    topic: 'AI/ML for Grid Resilience',
    imageUrl: speakerImages['speaker-1']?.url || '',
    imageHint: speakerImages['speaker-1']?.hint || '',
    mode: 'Offline',
  },
  {
    id: '2',
    name: 'Muthukumar T',
    affiliation: 'Dy. Manager, NSIC Technical Services Center',
    topic: 'Energy Efficiency & Smart Distribution',
    imageUrl: speakerImages['speaker-2']?.url || '',
    imageHint: speakerImages['speaker-2']?.hint || '',
    mode: 'Hybrid',
  },
  {
    id: '3',
    name: 'K.V. Praveen Kumar',
    affiliation: 'Assistant Professor, NIT Warangal',
    topic: 'Multilevel Inverters for Smart Grids',
    imageUrl: speakerImages['speaker-3']?.url || '',
    imageHint: speakerImages['speaker-3']?.hint || '',
    mode: 'Online',
  },
  {
    id: '4',
    name: 'Hari Krishna Palusam',
    affiliation: 'Founder, EcoGreen Industries',
    topic: 'EV Charging & Smart Metering',
    imageUrl: speakerImages['speaker-4']?.url || '',
    imageHint: speakerImages['speaker-4']?.hint || '',
    mode: 'Online',
  },
  {
    id: '5',
    name: 'Dr. Tejavathu Ramesh',
    affiliation: 'Assistant Professor & HOD, NIT Andhra Pradesh',
    topic: 'AI in Power Electronics & EV Drives',
    imageUrl: speakerImages['speaker-5']?.url || '',
    imageHint: speakerImages['speaker-5']?.hint || '',
    mode: 'Offline',
  },
  {
    id: '6',
    name: 'Prof. K. Anil Naik',
    affiliation: 'Assistant Professor, NIT Warangal',
    topic: 'Renewable Energy Integration Challenges',
    imageUrl: speakerImages['speaker-6']?.url || '',
    imageHint: speakerImages['speaker-6']?.hint || '',
    mode: 'Offline',
  },
];
