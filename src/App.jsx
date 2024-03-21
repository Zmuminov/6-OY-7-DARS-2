import styles from "./App.module.css";
import logo from "./assets/kreedLogo.svg";
import heroBg from "./assets/gul.png";
function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            className={styles.logo}
            src={logo}
            alt="This is beatiful flower image"
          />
          <div className={styles.aboutWeb}>
            <ul className={styles.list}>
              <li className={styles.item}>Home</li>
              <li className={styles.item}>Plant Room</li>
              <li className={styles.item}>Products</li>
              <li className={styles.item}>About Us</li>
              <li className={styles.item}>Contact</li>
            </ul>
            <button className={styles.whiteBtn}>Login</button>
          </div>
        </div>
        <div className={styles.hero}>
          <div className={styles.text}>
            <h1>The World of Decorative Plants</h1>
            <p>
              Discover more thant 100 Indoor plants for the Small-Space
              Gardener, and How to Care for Them Your home will be a plant
              paradise before you know it.
            </p>
            <button>Checkout Products</button>
          </div>
          <img
            width={460}
            height={562}
            src={heroBg}
            alt="This is beatiful flower"
          />
        </div>
      </div>
    </>
  );
}
export default App;
