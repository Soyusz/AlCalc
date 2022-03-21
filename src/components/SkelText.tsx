import { default as LibSkeleton } from "react-loading-skeleton";

type SkeletonProps = {
  w?: number;
  v?: string | null;
};

export const SkelText = (p: SkeletonProps) => (
  <>{p.v || <LibSkeleton width={p.w ? `${p.w}ex` : "100%"} />}</>
);
