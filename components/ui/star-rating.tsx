interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-4 h-4 ${i < rating ? "text-primary" : "text-stone-300"}`}
        >
          <path d="M10.868 2.884c.321-.772 1.415-.772 1.736 0l1.83 4.401 4.753.381c.833.067 1.171 1.107.536 1.651l-3.62 3.102 1.106 4.637c.194.813-.689 1.454-1.4 1.02L10 15.591l-4.209 2.485c-.712.434-1.595-.207-1.4-1.02l1.106-4.637-3.62-3.102c-.635-.544-.297-1.584.536-1.651l4.753-.381 1.83-4.401z" />
        </svg>
      ))}
    </div>
  );
}
