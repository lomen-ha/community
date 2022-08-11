import { BestBoardData } from 'data/boardData';
import Best from '@/components/board/Best';
import Latest from '@/components/board/Latest';
import Artist from '@/components/board/Artist';
import Goods from '@/components/board/Goods';

export default function Home() {
  const { isLoading, isError } = BestBoardData();

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 text-center">
      <Best />
      <Latest />
      <Artist />
      <Goods />
    </div>
  );
}

// export async function getServerSideProps(ctx) {
//   console.log(ctx);
//   const res = await fetch(`http://localhost:3000/api/board/123`);
//   const data = await res.json();

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
