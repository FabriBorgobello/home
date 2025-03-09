export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <div className="flex justify-center scroll-smooth px-6 py-8 sm:px-10 md:px-16 md:py-12 lg:px-24 lg:py-16">
      <article className="w-full max-w-prose">
        <Post />
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "welcome" }, { slug: "about" }];
}

export const dynamicParams = false;
