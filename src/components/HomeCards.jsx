import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>For Encoders</h2>
            <p className='mt-2 mb-4'>
              Browse our React transactions and start your career today
            </p>
            <Link
              to='/transactions'
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              Browse transactions
            </Link>
          </Card>
          <Card bg='bg-slate-100'>
            <h2 className='text-2xl font-bold'>For Admins</h2>
            <p className='mt-2 mb-4'>
              For Admin Stuffs
            </p>
            <Link
              to='/account-title'
              className='inline-block bg-slate-500 text-white rounded-lg px-4 py-2 hover:bg-slate-600'
            >
              Add Account Title
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
