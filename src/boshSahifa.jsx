import "./boshSahifa.css";
import { NavLink } from "react-router-dom";

function BoshSahifa() {
  return (
    <div className="homePage">

      <section className="hero">

        <div className="heroText">

          <div className="smallText">
            🍔 Eng mazali
          </div>

          <h1>
            ASL <span>BURGER</span>
          </h1>

          <h2>
            Eng mazali taomlar bizda! 🍔
          </h2>

          <p>
            Yangi tayyorlangan burgerlar, lavashlar,
            hot doglar va sovuq ichimliklardan bahramand bo'ling.
          </p>

          <NavLink to="/taomlar">
            <button>
              Taomlarni ko'rish
            </button>
          </NavLink>

        </div>

        <div className="heroImage">

          <img
            src="/bigburger1.png"
            alt="ASL Burger"
          />

        </div>

      </section>

      <section className="homeCards">

        <div className="homeCard">

          <div className="cardIcon">
            🍔
          </div>

          <h3>
            Sifatli taomlar
          </h3>

          <p>
            Har kuni yangi va mazali taomlar.
          </p>

        </div>

        <div className="homeCard">

          <div className="cardIcon">
            ⚡
          </div>

          <h3>
            Tez xizmat
          </h3>

          <p>
            Buyurtmangizni tez tayyorlaymiz.
          </p>

        </div>

        <div className="homeCard">

          <div className="cardIcon">
            🥤
          </div>

          <h3>
            Sovuq ichimliklar
          </h3>

          <p>
            Eng sevimli ichimliklaringiz bizda.
          </p>

        </div>

      </section>

    </div>
  );
}

export default BoshSahifa;