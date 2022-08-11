import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-full space-y-4 text-center">
      <div className="space-x-10 font-semibold">
        <Link href="#">
          <a className="hover:text-red-500">회사소개</a>
        </Link>
        <Link href="#">
          <a className="hover:text-red-500">이용약관</a>
        </Link>
        <Link href="#">
          <a className="hover:text-red-500">개인정보처리방침</a>
        </Link>
        <Link href="#">
          <a className="hover:text-red-500">광고안내</a>
        </Link>
      </div>
      <p>Copyright ⓒ 2022 Illunism. All rights reserved.</p>
    </div>
  );
}
