import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-7xl py-10">
      <Header />
      <div className="mt-10 mb-20 flex w-full">
        <div className="mt-10 flex-1 bg-red-400">
          <Sidebar />
        </div>
        <div className="flex-grow-[4]">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
