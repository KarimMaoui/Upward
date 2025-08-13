import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// For now, quick local data. Later you can move to src/data/articles.js
const fullArticles = {
  1: {
    content: `
**Beyond Green: ESG as the Future of Business Leadership**

Sustainability has evolved into a core business strategy. Today, Environmental, Social and Governance (ESG) principles shape how companies raise capital, attract talent and build trust. In an era marked by climate change, social inequality and supply chain disruption, leading responsibly is no longer optional, it’s expected.

For forward thinking businesses, ESG is not a checklist. It is a roadmap to future-proofing operations, mitigating risks and creating innovation. Investors are ever more scrutinizing ESG metrics, with over $30 trillion of sustainable assets under management worldwide (GSIA, 2023). Strong ESG performance is typically linked with better financial results, greater resilience and enhanced brand reputation.

For example, Schneider Electric, a French multinational which incorporates ESG into its value chain. From net-zero targets to workforce diversity goals, it aligns sustainability with core business outcomes. Meanwhile, companies lagging behind can anticipate increased borrowing costs, regulatory fines and public confidence.

Nevertheless, its enforcement is complex. Monitoring environmental impacts from global operations, requiring compliance among suppliers, or ensuring governance transparency requires data, collaboration and leadership. Greenwashing, a misleading portrayal of sustainability also remains a concern, prompting action for standardized ESG disclosure.

Still, the direction is clear: ESG is becoming a baseline expectation. Whether it may be carbon reporting in Europe or DEI metrics in the United States, stakeholders are demanding accountability.

At its core, ESG is about embedding purpose into business. When done right, it fosters trust, attracts capital and generates long term value, not just for shareholders, but for society.

**Critical Thinking Questions:**
1. Why is ESG now considered a strategic priority rather than a compliance obligation?
2. How can strong ESG performance help a company attract investors and lower financial risk?
3. What are the challenges in measuring ESG outcomes across multinational operations?
4. How does Schneider Electric’s approach to ESG create competitive advantage?
5. In what ways can greenwashing harm a company’s reputation and credibility?
6. Why is standardized ESG reporting important for global businesses?
7. What role does governance play in achieving real sustainability outcomes?
8. How might ESG priorities differ between regions like Europe and the United States?
9. Why should ESG be embedded into business strategy instead of treated as an add-on?
10. How do ESG factors influence consumer trust and brand loyalty?

**Glossary:**
- **ESG (Environmental, Social, and Governance)**: A framework for assessing a company’s ethical and sustainable practices in areas such as the environment, employee welfare, and leadership transparency.
- **Greenwashing**: The act of giving a false impression of environmental responsibility through marketing or branding without real sustainable action.
- **Net-Zero**: A state in which a company’s greenhouse gas emissions are balanced by removal efforts, leading to no net increase in emissions.
- **Supply Chain Disruption**: Interruptions to the flow of goods or services in a company’s supply network, often due to global events or environmental crises.
- **DEI (Diversity, Equity, and Inclusion)**: Business policies and practices that promote representation, fairness, and inclusion of different groups in the workplace.
- **Governance Transparency**: The practice of openly disclosing how decisions are made and how leadership is held accountable within a company.
- **Sustainable Investment**: Investing strategies that consider ESG factors to generate long-term positive returns and impact.

**References**

Schneider Electric. (2024). *Sustainability Impact Report*. https://www.se.com/ww/en/about-us/sustainability/

OECD. (2022). *ESG Investing and Sustainability Disclosure*. https://www.oecd.org/finance/ESG-investing.pdf

Aydoğmuş, M. (2022). *Impact of ESG performance on firm value and profitability* [Meta-analysis study]. *Journal of Sustainable Finance & Investment*. https://www.sciencedirect.com/science/article/pii/S221484502200103X

Atz, U. (2023). *Does sustainability generate better financial performance?* *Journal of Sustainable Business*. https://www.tandfonline.com/doi/abs/10.1080/20430795.2022.2106934
    `,
    image: "/esg-cover.jpg",
    title: "Beyond Green: ESG as the Future of Business Leadership",
    meta: {
      author: "",
      date: "August 13, 2025",
      category: "Economy",
      readTime: "6 min read",
    },
  },
};

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = fullArticles[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
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
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max">
          <Link to="/blog" className="text-sm text-gray-600 hover:underline">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            {data.title}
          </h1>
          <div className="mt-4 text-gray-600 flex flex-wrap gap-3 items-center">
            <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
              {data.meta.category}
            </span>
            <span className="text-sm">{data.meta.author}</span>
            <span className="text-sm">•</span>
            <span className="text-sm">{data.meta.date}</span>
            <span className="text-sm">•</span>
            <span className="text-sm">{data.meta.readTime}</span>
          </div>
        </div>
      </section>

      {data.image && (
        <section className="bg-white">
          <div className="container-max">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-auto rounded-xl border border-gray-200"
            />
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-max">
          <article className="prose prose-gray max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {data.content}
            </ReactMarkdown>
          </article>
        </div>
      </section>
    </div>
  );
}
