import BackButton from "../helper/BackButton";

export default function NoPage() {
  return (
    <div>
      <BackButton />
      <div className="no-page">
        <h1>404 - Page Not Found</h1>
      </div>
    </div>
  );
}
