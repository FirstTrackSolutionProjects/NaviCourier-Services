import React from 'react';

const blogs = [
  {
    title: 'Master Shipping Route Optimization',
    date: 'January 10, 2025',
    description:
      'Take control of your logistics! Learn actionable strategies to optimize routes and boost efficiency.',
    image: './image/q11.png', // Replace with actual image path
  },
  {
    title: 'AI and Automation: The Next Era of Logistics',
    date: 'March 25, 2025',
    description:
      'Explore the transformative power of artificial intelligence and automation in shaping the future of supply chains.',
    image: './image/q6.png', // Replace with actual image path
  },
];

const Blog = () => {
  return (
    <div>
    <div className="py-10 px-4 md:px-10 lg:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Our Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden transition duration-300 hover:shadow-lg">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <p className="text-sm text-gray-700">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Blog;
