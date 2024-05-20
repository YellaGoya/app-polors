'use client';

const BackButton = () => {
  return (
    <button type="button" onClick={() => window.history.back()}>
      go back
    </button>
  );
};

export default BackButton;
