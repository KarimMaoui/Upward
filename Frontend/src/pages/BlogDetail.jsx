import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { articles } from "../data/articles";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // id param is a string; find by matching article.id (number or string)
  const article = articles.find((a) => String(a.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <section className="section-padding">
        <div className="container-max text-center">
          <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
          <button onClick={() => navigate("/blog")} className="btn-secondary">
            Back to Blog
          </button>
        </div>
      </section>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max">
          <Link to="/blog" className="text-sm text-gray-600 hover:underline">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            {article.title}
          </h1>
          <div className="mt-4 text-gray-600 flex flex-wrap gap-3 items-center">
            <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
              {article.category}
            </span>
            {article.author && (
              <span className="text-sm">{article.author}</span>
            )}
            {article.date && (
              <>
                <span className="text-sm">•</span>
                <span className="text-sm">{article.date}</span>
              </>
            )}
            {article.readTime && (
              <>
                <span className="text-sm">•</span>
                <span className="text-sm">{article.readTime}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Cover image */}
      {article.image && (
        <section className="bg-white">
          <div className="container-max">
            <img
              src={article.image} // e.g. "/images/esg-cover.jpg"
              alt={article.title}
              className="w-full h-auto rounded-xl border border-gray-200"
            />
          </div>
        </section>
      )}

      {/* Body */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {article.content ? (
            <article className="prose prose-gray max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </article>
          ) : (
            <p className="text-gray-700">
              Full content for this article isn’t available yet. Check back
              soon!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
