import styles from './check.module.css';

const CheckAnimation = ({ status }) => {
  return (
    <div
      className={
        status?.loading ? styles.circle_loader : `${styles.circle_loader} ${styles.load_complete}`
      }
    >
      <div
        className={`${styles.checkmark} ${styles.draw}`}
        style={{
          display: status?.loading ? 'none' : 'block',
        }}
      ></div>
    </div>
  );
};

export default CheckAnimation;
