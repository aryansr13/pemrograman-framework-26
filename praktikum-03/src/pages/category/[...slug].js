import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  const { slug = [] } = router.query;

  return (
    <div>
      <h2>Parameter URL:</h2>
      <ul>
        {slug.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}