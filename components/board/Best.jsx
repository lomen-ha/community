import { BestBoardData } from 'data/boardData';
import Link from 'next/link';

export default function Best() {
  const { bestBoardData } = BestBoardData();

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-xl font-semibold">베스트</h1>
      <table className="mt-4 border-collapse border-t border-b border-slate-400">
        <tbody>
          {bestBoardData?.detail?.map((item) => (
            <>
              <tr key={item.id}>
                <td className="border-t border-b border-slate-400 py-2 pl-2 text-sm font-semibold">
                  {item.id}
                </td>
                <td className="border-t border-b border-slate-400 py-2 font-semibold">
                  <Link href={`/board/${item.id}`}>
                    <a>{item.desc}</a>
                  </Link>
                </td>
                <td className="border-t border-b border-slate-400 py-2 text-xs font-semibold">
                  {item.category}
                </td>
                <td className="border-t border-b border-slate-400 py-2 text-xs font-semibold">
                  {item.date}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
