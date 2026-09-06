"use client"

import { useState, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { Search, Calendar, Tag, Clock, X } from "lucide-react"
import Image from "next/image"

const blogArticles = [
  {
    id: 1,
    title: "Mitigating Bias in AI Systems: A Comprehensive Guide",
    excerpt:
      "Exploring practical approaches to identify and reduce bias in artificial intelligence systems, with focus on speech recognition and educational technology applications.",
    content: "Full article content about bias mitigation in AI systems...",
    author: "Kelechi Ezema",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["AI", "Bias", "Machine Learning", "Ethics"],
    image: "/placeholder.svg?height=300&width=500",
    category: "Research",
  },
  {
    id: 2,
    title: "The Future of Educational Technology",
    excerpt:
      "How emerging technologies are reshaping the educational landscape and creating more inclusive learning environments for students worldwide.",
    content: "Full article content about educational technology...",
    author: "Kelechi Ezema",
    date: "2024-11-28",
    readTime: "6 min read",
    tags: ["Education", "Technology", "Innovation", "Accessibility"],
    image: "/placeholder.svg?height=300&width=500",
    category: "Technology",
  },
  {
    id: 3,
    title: "Building Inclusive AI: Lessons from CHI 2025",
    excerpt:
      "Key insights and takeaways from presenting research on bias mitigation at the CHI 2025 conference, including community feedback and future directions.",
    content: "Full article content about CHI 2025 experience...",
    author: "Kelechi Ezema",
    date: "2024-11-10",
    readTime: "5 min read",
    tags: ["Conference", "CHI", "Inclusive Design", "Research"],
    image: "/placeholder.svg?height=300&width=500",
    category: "Conference",
  },
  {
    id: 4,
    title: "Open Source Contributions: Why They Matter",
    excerpt:
      "The importance of contributing to open source projects in advancing technology and building stronger communities in the tech industry.",
    content: "Full article content about open source contributions...",
    author: "Kelechi Ezema",
    date: "2024-10-22",
    readTime: "4 min read",
    tags: ["Open Source", "Community", "Development", "Collaboration"],
    image: "/placeholder.svg?height=300&width=500",
    category: "Development",
  },
  {
    id: 5,
    title: "Navigating PhD Life: Tips for Graduate Students",
    excerpt:
      "Practical advice and strategies for succeeding in graduate school, managing research projects, and maintaining work-life balance during PhD studies.",
    content: "Full article content about PhD life...",
    author: "Kelechi Ezema",
    date: "2024-10-05",
    readTime: "7 min read",
    tags: ["PhD", "Graduate School", "Research", "Academic Life"],
    image: "/placeholder.svg?height=300&width=500",
    category: "Academic",
  },
  {
    id: 6,
    title: "The Role of AI in Social Justice",
    excerpt:
      "Examining how artificial intelligence can be leveraged to address social justice issues while avoiding perpetuation of existing biases and inequalities.",
    content: "Full article content about AI and social justice...",
    author: "Kelechi Ezema",
    date: "2024-09-18",
    readTime: "9 min read",
    tags: ["AI", "Social Justice", "Ethics", "Technology"],
    image: "/placeholder.svg?height=300&width=500",
    category: "Research",
  },
]

interface BlogArticle {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  tags: string[]
  image: string
  category: string
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(blogArticles.map((article) => article.category)))]

  // Filter articles based on search query and category
  const filteredArticles = useMemo(() => {
    return blogArticles.filter((article) => {
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const clearSearch = () => {
    setSearchQuery("")
  }

  const openArticle = (article: BlogArticle) => {
    setSelectedArticle(article)
  }

  const closeArticle = () => {
    setSelectedArticle(null)
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Blog</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto mt-4"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Thoughts on AI, technology, research, and academic life
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles, tags, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
              {searchQuery && (
                <button onClick={clearSearch} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="text-center mb-6">
              <p className="text-gray-600">
                Found {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} for "{searchQuery}"
              </p>
            </div>
          )}
        </div>

        {/* Articles Grid */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <BlogCard key={article.id} article={article} onClick={() => openArticle(article)} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse all articles by clearing the search.
              </p>
              <button
                onClick={clearSearch}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeArticle}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-6">
                <div className="mb-6">
                  <div className="relative h-64 mb-6">
                    <Image
                      src={selectedArticle.image || "/placeholder.svg"}
                      alt={selectedArticle.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                    {selectedArticle.category}
                  </div>

                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h1>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(selectedArticle.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedArticle.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">{selectedArticle.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

interface BlogCardProps {
  article: BlogArticle
  onClick: () => void
  index: number
}

function BlogCard({ article, onClick, index }: BlogCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: index * 100,
  })

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:transform hover:scale-105 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{article.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
