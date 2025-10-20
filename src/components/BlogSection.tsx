import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image_url: string;
  read_time: number;
  published: boolean;
  created_at: string;
}

interface BlogSectionProps {
  onLinaClick: () => void;
}

export default function BlogSection({ onLinaClick }: BlogSectionProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    loadBlogPosts();
  }, []);

  const loadBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (selectedPost) {
    return (
      <section id="blog" className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 text-gray-600 hover:text-gray-900 font-semibold inline-flex items-center space-x-2 transition-colors"
          >
            <ArrowRight className="rotate-180" size={20} />
            <span>Retour aux articles</span>
          </button>

          <div className="mb-8">
            <img
              src={selectedPost.image_url}
              alt={selectedPost.title}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full gradient-bg text-white text-sm font-semibold mb-4">
              {selectedPost.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {selectedPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{formatDate(selectedPost.created_at)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{selectedPost.read_time} min de lecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen size={18} />
                <span>Par {selectedPost.author}</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {selectedPost.content}
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à démarrer votre projet d'externalisation ?
            </h3>
            <p className="text-gray-700 mb-6">
              Discutez avec Lina ou contactez-nous pour un audit gratuit et personnalisé de vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onLinaClick} className="btn-gradient">
                Parler à Lina
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg text-center"
              >
                Demander un audit gratuit
              </a>
            </div>
          </div>

          <button
            onClick={() => setSelectedPost(null)}
            className="mt-8 text-gray-600 hover:text-gray-900 font-semibold inline-flex items-center space-x-2 transition-colors"
          >
            <ArrowRight className="rotate-180" size={20} />
            <span>Retour aux articles</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Blog <span className="gradient-text">Devit.IA</span>
            <br />
            <span className="text-3xl md:text-4xl">Insights & Expertise IT</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Guides pratiques, analyses de marché et conseils d'experts pour réussir votre externalisation IT
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="card-elegant group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full gradient-bg text-white text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{formatDate(post.created_at)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{post.read_time} min</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Par {post.author}</span>
                  <div className="inline-flex items-center space-x-2 text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Lire plus</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Une question sur l'externalisation IT ?
            </h3>
            <p className="text-gray-600 mb-6">
              Lina, notre assistante IA, peut répondre à toutes vos questions en temps réel.
            </p>
            <button onClick={onLinaClick} className="btn-gradient">
              Discuter avec Lina
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
