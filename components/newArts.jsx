import Link from 'next/link';
import Image from 'next/image';

import css from './newArts.module.css';

const NewArts = async ({ art, order }) => {
  return (
    <article key={art.id} className={css.artContainer}>
      <div
        className={css.imageContainer}
        style={{ maxWidth: art.image_width + 'px', maxHeight: art.image_height + 'px', aspectRatio: art.image_width / art.image_height }}
      >
        <Image
          src={art.image_link}
          width={0}
          height={0}
          sizes="100vw"
          style={{ display: 'block', width: '100%', maxWidth: '500px', height: 'auto' }}
          alt={art.title}
        />
        {order <= 1 ? null : <Link className={css.imageButton} href={`/?order=${order - 1}`} style={{ left: '0' }} />}
        {order >= 7 ? null : <Link className={css.imageButton} href={`/?order=${order + 1}`} style={{ left: '50%' }} />}
      </div>
      <p className={css.titleText}>{art.title}</p>
      <p className={css.artistText}>{art.artist}</p>
      {order <= 1 ? (
        <a className={css.disabled}>prev</a>
      ) : (
        <Link className={css.prevButton} href={`/?order=${order - 1}`}>
          prev
        </Link>
      )}
      {order >= 7 ? (
        <a className={css.disabled} style={{ float: 'right' }}>
          next
        </a>
      ) : (
        <Link className={css.nextButton} href={`/?order=${order + 1}`}>
          next
        </Link>
      )}
      <div className={css.colorPalette}>
        {art.color_hex_codes.map((color) => {
          const hexColor = color.replace('#', '');

          const r = parseInt(hexColor.substr(0, 2), 16);
          const g = parseInt(hexColor.substr(2, 2), 16);
          const b = parseInt(hexColor.substr(4, 2), 16);
          const yiq = (r * 299 + g * 587 + b * 114) / 1000;
          const codeColor = yiq >= 128 ? '#000000' : '#ffffff';

          return (
            <div key={color + '-' + art.title} className={css.colors} style={{ backgroundColor: color, color: codeColor }}>
              {color}
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default NewArts;
