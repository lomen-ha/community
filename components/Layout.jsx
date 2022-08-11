import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-7xl py-10">
      <Header />
      <div className="mt-10 mb-20 flex w-full space-x-10">
        <div className="mt-10 w-60 border border-slate-400">
          <Sidebar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
