import ProductCard from "../components/ProductCard";

const products = [
    { id: 1, name: "Laptop", price: 1200, image: "/laptop.jpg" },
    { id: 2, name: "Phone", price: 800, image: "/phone.jpg" },
];

const Products = () => {
    return (
        <div>
            <h1>Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
