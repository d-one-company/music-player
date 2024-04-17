import { cn } from '@/lib/utils';
import RecentFavouritesList from './RecentFavouritesList';
import styles from './recentFavourites.module.css';

const RecentFavourites = () => {
  return (
    <div className="relative flex flex-col space-y-5">
      <div
        className={cn(
          'absolute -left-5 top-0 h-10 w-full',
          styles.filter__shadow
        )}
      ></div>
      <div className="flex items-center justify-between">
        <p>Recent favourites</p>
        <p className="text-sm text-sky-500">View all</p>
      </div>
      <RecentFavouritesList />
    </div>
  );
};

export default RecentFavourites;
