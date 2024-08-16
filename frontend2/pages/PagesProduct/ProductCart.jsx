export default function ProductCard({ product }) {
    return (
      <div className="p-4 bg-white shadow-md rounded">
        <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-500 mb-2">{product.description}</p>
        <p className="text-lg font-bold text-blue-600">Rp{product.price.toLocaleString()}</p>
        <p><strong>Location:</strong> {product.location}</p>
      </div>
    );
  }