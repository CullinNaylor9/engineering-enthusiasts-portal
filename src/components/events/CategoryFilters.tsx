
import { Button } from "@/components/ui/button";
import { Event } from "@/types/EventTypes";

interface CategoryFiltersProps {
  activeCategory: Event['category'] | 'all';
  onCategoryChange: (category: Event['category'] | 'all') => void;
}

const CategoryFilters = ({ activeCategory, onCategoryChange }: CategoryFiltersProps) => {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-4">Filter by Type</h2>
      <div className="space-y-2">
        <Button 
          variant={activeCategory === 'all' ? "default" : "outline"} 
          className="w-full justify-start" 
          onClick={() => onCategoryChange('all')}
        >
          All Events
        </Button>
        <Button 
          variant={activeCategory === 'workshop' ? "default" : "outline"} 
          className="w-full justify-start" 
          onClick={() => onCategoryChange('workshop')}
        >
          Workshops
        </Button>
        <Button 
          variant={activeCategory === 'competition' ? "default" : "outline"} 
          className="w-full justify-start" 
          onClick={() => onCategoryChange('competition')}
        >
          Competitions
        </Button>
        <Button 
          variant={activeCategory === 'open-day' ? "default" : "outline"} 
          className="w-full justify-start" 
          onClick={() => onCategoryChange('open-day')}
        >
          Open Days
        </Button>
        <Button 
          variant={activeCategory === 'camp' ? "default" : "outline"} 
          className="w-full justify-start" 
          onClick={() => onCategoryChange('camp')}
        >
          Camps
        </Button>
        <Button 
          variant={activeCategory === 'extra-murals' ? "default" : "outline"} 
          className="w-full justify-start" 
          onClick={() => onCategoryChange('extra-murals')}
        >
          Extra Murals
        </Button>
      </div>
    </div>
  );
};

export default CategoryFilters;
