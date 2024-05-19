import NewArts from 'components/newArts';
import css from './page.module.css';

const Home = async ({ searchParams }) => {
  const order = Number(searchParams.order || 1);
  return (
    <main className={css.main}>
      <NewArts order={order} />
      <p className={css.footer}>
        powerd by ahnsehyeok.
        <br />
        paintings from artvee.com
      </p>
    </main>
  );
};

export default Home;
