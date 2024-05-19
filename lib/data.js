import { Client } from 'pg';

const fetchLastestArts = async (order) => {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  try {
    await client.connect();

    const res = await client.query(`SELECT * FROM art_gallery ORDER BY id DESC OFFSET $1 ROWS FETCH NEXT 1 ROWS ONLY`, [order - 1]);

    return res.rows[0];
  } catch (error) {
    console.error('PostgreSQL Error:', error);
    throw new Error('Failed to fetch latest arts.');
  } finally {
    await client.end();
  }
};

export default fetchLastestArts;
