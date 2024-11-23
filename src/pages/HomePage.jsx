import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Transactions from '../components/Transactions';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <Transactions isHome={true} />
      <ViewAllJobs />
    </>
  );
};
export default HomePage;
