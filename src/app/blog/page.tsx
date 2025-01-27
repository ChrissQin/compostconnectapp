import Link from "next/link"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Composting",
    excerpt: "Discover how composting can reduce waste and improve soil health.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "AI in Waste Management",
    excerpt: "Explore how artificial intelligence is revolutionizing waste management practices.",
    date: "2023-06-02",
  },
  {
    id: 3,
    title: "Composting for Urban Dwellers",
    excerpt: "Learn how to compost effectively in small spaces and urban environments.",
    date: "2023-06-20",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">CompostConnect Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <Button asChild>
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

