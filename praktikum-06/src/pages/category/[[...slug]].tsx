import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type CategoryType = {
  id: string;
  category: string;
};

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/category");
      const result = await response.json();
      
      const dataArray = Array.isArray(result.data) 
        ? result.data 
        : Object.values(result.data);
      
      setCategories(dataArray);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) return <div style={{ padding: "20px" }}>Loading...</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: "20px" 
      }}>
        <h1>Category Page</h1>
        <button 
          onClick={fetchCategories}
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          🔄 Refresh
        </button>
      </div>

      {slug ? (
        <div>
          <h3>Slug:</h3>
          <ul>
            {Array.isArray(slug) 
              ? slug.map((item, i) => <li key={i}>{item}</li>)
              : <li>{slug}</li>}
          </ul>
        </div>
      ) : (
        <div>
          <h3>Daftar Category</h3>
          {categories.length === 0 ? (
            <p>Tidak ada data</p>
          ) : (
            categories.map((cat) => (
              <div key={cat.id} style={{ 
                border: "1px solid #ccc", 
                padding: "10px", 
                margin: "10px 0",
                borderRadius: "5px"
              }}>
                <p><strong>ID:</strong> {cat.id}</p>
                <p><strong>Category:</strong> {cat.category}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Category;