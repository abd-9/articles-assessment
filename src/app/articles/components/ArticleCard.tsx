import clsx from 'clsx';
import { format } from 'date-fns';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

type ArticleCardProps = {
  id: number;
  thumbnailUrl: string;
  title: string;
  description: string;
  routeUrl: string;
  postDate: string;
  onClick?: () => void;
  className?: string;
  mediaAlt?: string;
};

export default function ArticleCard({
  thumbnailUrl,
  title,
  description,
  postDate,
  routeUrl,
  className,
  onClick,
}: ArticleCardProps) {
  return (
    <li
      data-testid='article-card'
      className={clsx(
        'w-full rounded-md border border-gray-300 bg-white dark:border-gray-600 dark:bg-dark',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
      onClick={onClick}
    >
      <UnstyledLink
        className='block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
        href={routeUrl}
      >
        <div className='relative h-40 w-full'>
          <div
            data-testid='card-image'
            className='pointer-events-none overflow-hidden rounded-t-md absolute bg-cover bg-center w-full h-full'
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
          <div
            className={clsx(
              'absolute bottom-0 w-full px-4 py-2',
              'mt-2 flex flex-wrap justify-end gap-x-2 gap-y-1 text-sm text-black dark:text-gray-100'
            )}
          ></div>
        </div>
        <div className='p-4'>
          <h4 className='text-gray-800 dark:text-gray-100'>{title}</h4>

          <p className='mb-2 mt-4 text-sm text-gray-600 dark:text-gray-300'>
            <span className='font-bold text-gray-800 dark:text-gray-100'>
              {format(new Date(postDate), 'MMMM dd, yyyy')}
            </span>
          </p>
          <p className='text-sm text-gray-700 dark:text-gray-300'>
            {description}
          </p>
        </div>
      </UnstyledLink>
    </li>
  );
}
