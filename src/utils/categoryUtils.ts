
import { cn } from '@/lib/utils';
import { Event } from '@/types/EventTypes';

export const getCategoryStyles = (category: Event['category']) => {
  switch (category) {
    case 'workshop':
      return 'bg-blue-100 text-blue-800';
    case 'competition':
      return 'bg-purple-100 text-purple-800';
    case 'open-day':
      return 'bg-green-100 text-green-800';
    case 'camp':
      return 'bg-amber-100 text-amber-800';
    case 'extra-murals':
      return 'bg-emerald-100 text-emerald-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getCategoryLabel = (category: Event['category']) => {
  switch (category) {
    case 'workshop':
      return 'Workshop';
    case 'competition':
      return 'Competition';
    case 'open-day':
      return 'Open Day';
    case 'camp':
      return 'Camp';
    case 'extra-murals':
      return 'Extra Murals';
    default:
      return category;
  }
};
