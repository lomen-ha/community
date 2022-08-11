import { useRouter } from 'next/router';
import { BestDetailBoardData } from 'data/boardData';

export default function Detail() {
  const router = useRouter();
  const { bestDetailBoardData, isLoading, isError } = BestDetailBoardData(
    router.query.id[0]
  );

  console.log(bestDetailBoardData);

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return <div>board ID : {router.query.id[0]}</div>;
}
