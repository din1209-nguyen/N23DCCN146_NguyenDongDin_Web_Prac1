import Header from '@/components/Header';
import Link from 'next/link';

async function getPostDetail(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogDetail({ params }) {
  const { id } = await params;
  const post = await getPostDetail(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Container trang chi tiết theo form của BlogCard */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border bg-white shadow-sm">
          
          {/* Phần nội dung chính */}
          <div className="p-8 md:p-12">
            {/* Category - Đồng bộ với BlogCard */}
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
              User Content #{post.userId}
            </span>

            {/* Tiêu đề */}
            <h1 className="mt-3 mb-6 text-3xl font-bold text-gray-900 md:text-4xl leading-tight">
              {post.title}
            </h1>

            {/* Nội dung bài viết đầy đủ */}
            <div className="prose prose-indigo max-w-none border-t pt-8">
              <p className="whitespace-pre-line text-lg leading-relaxed text-gray-600">
                {post.body}
              </p>
            </div>

            {/* Chân trang chứa nút quay lại */}
            <div className="mt-12 flex items-center justify-between border-t pt-8">
              <span className="text-sm text-gray-400 italic">
                Post ID: {post.id}
              </span>

              {/* Nút quay lại */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}