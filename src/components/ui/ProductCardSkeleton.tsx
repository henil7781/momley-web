import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="h-full min-h-[520px] rounded-[2.5rem] bg-slate-50/50 border border-slate-100 p-8 flex flex-col justify-between animate-pulse">
      {/* Badge Skeleton */}
      <div className="absolute top-8 right-8">
        <div className="h-6 w-20 bg-slate-200 rounded-full" />
      </div>

      {/* Image Skeleton */}
      <div className="relative flex-1 flex items-center justify-center mb-8">
        <div className="w-40 h-40 bg-slate-200 rounded-full" />
      </div>

      {/* Content Skeleton */}
      <div className="space-y-5">
        <div className="space-y-3">
          <div className="h-8 w-3/4 bg-slate-200 rounded-lg" />
          <div className="h-4 w-1/2 bg-slate-200 rounded-md" />
        </div>
        
        <div className="space-y-2">
          <div className="h-3 w-full bg-slate-200 rounded-md" />
          <div className="h-3 w-5/6 bg-slate-200 rounded-md" />
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <div className="space-y-1">
            <div className="h-2 w-8 bg-slate-100 rounded" />
            <div className="h-4 w-16 bg-slate-200 rounded" />
          </div>
          <div className="h-10 w-10 bg-slate-200 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
