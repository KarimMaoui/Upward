import { useState } from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Economy", "Finance", "Tech", "Fashion"];

  // const articles = [
  //   {
  //     id: 1,
  //     title: "The Art of Persuasive Communication in Business",
  //     excerpt:
  //       "Learn how to craft compelling messages that drive action and influence decision-making in professional settings.",
  //     category: "Economy",
  //     author: "Dr. Sarah Mitchell",
  //     date: "May 15, 2024",
  //     readTime: "5 min read",
  //     image: "/api/placeholder/400/250",
  //   },
  //   {
  //     id: 2,
  //     title: "Financial Presentations That Win Over Investors",
  //     excerpt:
  //       "Master the techniques used by successful entrepreneurs to present financial data with clarity and impact.",
  //     category: "Finance",
  //     author: "Michael Rodriguez",
  //     date: "May 12, 2024",
  //     readTime: "7 min read",
  //     image: "/api/placeholder/400/250",
  //   },
  //   {
  //     id: 3,
  //     title: "Tech Leadership: Communicating Complex Ideas Simply",
  //     excerpt:
  //       "Discover strategies for explaining technical concepts to non-technical audiences effectively.",
  //     category: "Tech",
  //     author: "Emily Chen",
  //     date: "May 10, 2024",
  //     readTime: "6 min read",
  //     image: "/api/placeholder/400/250",
  //   },
  //   {
  //     id: 4,
  //     title: "Personal Branding Through Communication",
  //     excerpt:
  //       "Build your personal brand by developing a unique communication style that reflects your values.",
  //     category: "Fashion",
  //     author: "Lisa Johnson",
  //     date: "May 8, 2024",
  //     readTime: "4 min read",
  //     image: "/api/placeholder/400/250",
  //   },
  //   {
  //     id: 5,
  //     title: "Crisis Communication: Leading Through Uncertainty",
  //     excerpt:
  //       "Essential communication strategies for leaders navigating challenging times and organizational crises.",
  //     category: "Economy",
  //     author: "David Thompson",
  //     date: "May 5, 2024",
  //     readTime: "8 min read",
  //     image: "/api/placeholder/400/250",
  //   },
  //   {
  //     id: 6,
  //     title: "The Future of Remote Team Communication",
  //     excerpt:
  //       "Explore emerging trends and best practices for effective communication in distributed teams.",
  //     category: "Tech",
  //     author: "James Wilson",
  //     date: "May 3, 2024",
  //     readTime: "6 min read",
  //     image: "/api/placeholder/400/250",
  //   },
  // ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover expert insights, tips, and strategies for improving your
            communication skills and advancing your professional development.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gray-200 h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>

                  <Link
                    to={`/blog/${article.id}`}
                    className="text-black font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Speak better, Reach higher
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Call to action to a first class
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-session" className="btn-primary">
              Book Your First Session
            </Link>
            <Link to="/services-b2c" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest communication tips and insights delivered to your
            inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
