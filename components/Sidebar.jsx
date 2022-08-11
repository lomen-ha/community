import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 pt-10">
      <Link href="#">
        <a className="hover:text-red-400">베스트</a>
      </Link>
      <Link href="#">
        <a className="hover:text-red-400">최신</a>
      </Link>
      <Link href="#">
        <a className="hover:text-red-400">아티스트</a>
      </Link>
      <Link href="#">
        <a className="hover:text-red-400">굿즈</a>
      </Link>
    </div>
  );
}
