import { Link } from "react-router-dom";
import Btn from "./Btn";
export default function HeroOverlay() {
  return (
      <div className="overlay">
        <h1>"Az otthon ott kezdődik, ahol a falak színt kapnak."</h1>
        <p>Gyors, megbízható festés - elérhető áron.</p>
        <div className="text-center mt-4">
          <Link to={"/Calc"} target="_blank">
            <Btn 
            content={'Ár kalkulátor'}
            btnClass={'calculatorBtn'}
            btnMargin={''}
            />
          </Link>
        </div>
      </div>
      
  );
}
