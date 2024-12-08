import Image from "next/image";

const ProductPage = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <div className="w-[300px] h-[300px] mt-4">
        <Image
          src={`/${product.imageURL}.png`}
          alt={product.title}
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <p className="text-gray-600 mt-2">{product.type}</p>
      <p className="text-gray-600">{product.typeC}</p>
      <p className="text-lg font-bold mt-4">{product.price}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const data = [
    {
      id: 1,
      title: "Nike Air Force 1 Mid '07",
      type: "Men's Shoes",
      typeC: "1 Colour",
      price: "MRP : ₹ 10 795.00",
      imageURL: "a1",
    },
    {
      id: 2,
      title: "Nike Air Max 90",
      type: "Men's Shoes",
      typeC: "2 Colours",
      price: "MRP : ₹ 12 999.00",
      imageURL: "a2",
    },
    // Add all your items here...
  ];

  const paths = data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false }; // Change fallback to 'true' or 'blocking' if needed
}

export async function getStaticProps({ params }) {
  const data = [
    {
      id: 1,
      title: "Nike Air Force 1 Mid '07",
      type: "Men's Shoes",
      typeC: "1 Colour",
      price: "MRP : ₹ 10 795.00",
      imageURL: "a1",
    },
    {
      id: 2,
      title: "Nike Air Max 90",
      type: "Men's Shoes",
      typeC: "2 Colours",
      price: "MRP : ₹ 12 999.00",
      imageURL: "a2",
    },
    // Add all your items here...
  ];

  const product = data.find((item) => item.id.toString() === params.id);

  return {
    props: { product: product || null }, // Pass null if not found
  };
}

export default ProductPage;
