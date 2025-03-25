
export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'workshop' | 'competition' | 'open-day' | 'camp' | 'extra-murals';
  imageUrl: string;
  registrationUrl: string;
  locationUrl?: string;
  exactDate?: Date;
}

export const events: Event[] = [
  {
    title: "Young Engineers",
    date: "Monday",
    time: "4:15pm to 5:15pm",
    location: "STEM Room",
    description: "An afternoon to do fun tech projects and learn about coding and programming your own robots while learning important engineering skills.",
    category: "extra-murals",
    imageUrl: "https://i.postimg.cc/4N4yTFvw/IMG-1884.jpg",
    registrationUrl: "https://inspire-course-bot.vercel.app/",
    locationUrl: "https://maps.app.goo.gl/xsBjH7M3NZGLW8Fr9",
    exactDate: new Date(2023, 5, 5)
  },
  {
    title: "Inspire Africa",
    date: "School Holidays",
    time: "To be confirmed",
    location: "Maths Room",
    description: "An intensive two-day coding workshop where participants will build their own web applications and games under the guidance of industry professionals.",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    registrationUrl: "https://inspire-course-bot.vercel.app/",
    locationUrl: "https://maps.app.goo.gl/xsBjH7M3NZGLW8Fr9",
    exactDate: new Date(2023, 6, 15)
  },
];
