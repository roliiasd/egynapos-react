import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
export default function Review() {
  return (
    <section>
      <ReactGoogleReviews
        layout="carousel"
        featurableId="featurable-dc0f67fb-4bd5-4e9e-be36-c7bb542c821a"
      />
    </section>
  );
}
