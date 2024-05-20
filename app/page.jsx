import NewArts from 'components/newArts';
import NotFound from 'app/not-found';

import fetchLastestArts from 'lib/data';
import css from './page.module.css';

const Home = async ({ searchParams }) => {
  const order = Number(searchParams.order || 1);

  let art;
  try {
    art = await fetchLastestArts(order);
  } catch {
    return <NotFound />;
  }

  return art ? (
    <main className={css.main}>
      <NewArts art={art} order={order} />

      <p className={css.footer}>
        powerd by ahnsehyeok.
        <br />
        paintings from artvee.com
      </p>
    </main>
  ) : (
    <NotFound />
  );
};

export default Home;
