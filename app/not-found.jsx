import Link from 'next/link';

import css from './not-found.module.css';

const NotFound = () => {
  return (
    <main className={css.notFoundContainer}>
      404 | page not found.
      <Link href="/?order=1">visit POLORS.</Link>
    </main>
  );
};

export default NotFound;
