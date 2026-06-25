import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { getBlogPosts, getServices, getFAQs } from "../api/endpoints";
import "./CategoryBlog.css";

const CATEGORY_NAMES = {
  "exterior-renovation": "Exterior Renovation",
  "home-maintenance": "Home Maintenance",
};

export default function CategoryBlog() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [services, setServices] = useState([]);
  const [faq, setFaq] = useState(null);
  const [search, setSearch] = useState("");

  const categoryName = CATEGORY_NAMES[slug] || slug;

  useEffect(() => {
    getBlogPosts(slug).then(setPosts).catch(() => {});
    getBlogPosts().then(setAllPosts).catch(() => {});
    getServices().then(setServices).catch(() => {});
    getFAQs().then((data) => data.length && setFaq(data[Math.floor(Math.random() * data.length)])).catch(() => {});
  }, [slug]);

  const filteredPosts = posts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Layout>
      <PageBanner title={categoryName} crumbs={[{ to: "/", label: "Home" }, { label: "Blog" }]} />
      <div className="section">
        <div className="container blog-grid">
          <div>
            <h2 className="section-title">
              Read <span className="highlight">Pro Tips</span> in Our Blog
            </h2>
            <div className="section-underline" />
            <p className="blog-intro">
              With a useful selection of tools, tips, and materials, a homeowner or handyman with the right
              experience can identify and tackle a large number of repairs that would otherwise need a specialist.
            </p>
            <div className="blog-posts">
              {filteredPosts.length === 0 && <p className="blog-empty">No posts found in this category yet.</p>}
              {filteredPosts.map((post) => (
                <article key={post.id} className="blog-post-card">
                  <span className="blog-post-date">{post.published_date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="blog-sidebar">
            <div className="sidebar-widget">
              <h4>Search</h4>
              <input
                type="search"
                placeholder="Search…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="sidebar-widget">
              <h4>Recent Posts</h4>
              <ul>
                {allPosts.slice(0, 5).map((post) => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            </div>

            {services[0] && (
              <div className="sidebar-widget">
                <h4>Featured Service</h4>
                <div className="featured-service">
                  <span className="featured-icon">{services[0].icon}</span>
                  <div>
                    <strong>{services[0].name}</strong>
                    <Link to={`/services/${services[0].slug}`}>More Services</Link>
                  </div>
                </div>
              </div>
            )}

            {faq && (
              <div className="sidebar-widget">
                <h4>Random FAQ</h4>
                <p className="random-faq-q">{faq.question}</p>
                <Link to="/faq">More FAQ</Link>
              </div>
            )}

            <div className="sidebar-widget">
              <h4>Services</h4>
              <ul>
                {services.map((s) => (
                  <li key={s.id}>
                    <Link to={`/services/${s.slug}`}>{s.icon} {s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
