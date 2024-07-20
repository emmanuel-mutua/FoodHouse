const PopularFoods = () => {
    return (
      <section className="p-12 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8">Popular Foods</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <img src="/fruit-dish.png" alt="Fruit Dish" className="w-full h-auto mb-4"/>
            <h3 className="text-xl font-semibold">Fruit Dish</h3>
            <p className="text-gray-600">Dinko Food</p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md">Add to Cart - $696</button>
          </div>
          <div className="text-center">
            <img src="/fruit-dish.png" alt="Fruit Dish" className="w-full h-auto mb-4"/>
            <h3 className="text-xl font-semibold">Fruit Dish</h3>
            <p className="text-gray-600">Dinko Food</p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md">Add to Cart - $696</button>
          </div>
          <div className="text-center">
            <img src="/sea-fish-dish.png" alt="Sea Fish Dish" className="w-full h-auto mb-4"/>
            <h3 className="text-xl font-semibold">Sea Fish Dish</h3>
            <p className="text-gray-600">Dinko Food</p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md">Add to Cart - $696</button>
          </div>
          <div className="text-center">
            <img src="/pizza.png" alt="Pizza" className="w-full h-auto mb-4"/>
            <h3 className="text-xl font-semibold">Pizza</h3>
            <p className="text-gray-600">Dinko Food</p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md">Add to Cart - $696</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default PopularFoods;
  