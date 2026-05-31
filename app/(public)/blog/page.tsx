import BlogHero from "@/components/blog/BlogHero"
import BlogToolbar from "@/components/blog/BlogToolbar"
import BlogList from "@/components/blog/BlogList"
import BlogDetail from "@/components/blog/BlogDetail"
import BlogNewsletter from "@/components/blog/BlogNewsletter"

export default function BlogPage() {
  return (
    <main className="safe-blog-page">
      <BlogHero />
      <BlogToolbar />
      <BlogList />
      <BlogDetail />
      <BlogNewsletter />
    </main>
  )
}
