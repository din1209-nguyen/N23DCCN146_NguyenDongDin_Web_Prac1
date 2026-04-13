export default function BlogCard({ post }) {
  return (
    <div className="flex h-full flex-col rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-lg">
      <span className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
        {post.category}
      </span>

      <h2 className="mt-2 mb-1 line-clamp-2 text-lg font-bold">
        {post.title}
      </h2>

      <p className="mb-4 line-clamp-3 text-sm text-gray-500">
        {post.body}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <span className="text-sm text-gray-400">
          User #{post.userId}
        </span>

        <a
          href={`/blog/${post.id}`}
          className="rounded bg-indigo-600 px-3 py-1 text-sm text-white"
        >
          Read More
        </a>
      </div>
    </div>
  );
}