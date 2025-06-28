import Navbar from "../components/Navbar/Navbar";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;