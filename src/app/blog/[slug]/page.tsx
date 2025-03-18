import { ScrollIndicator } from "@/components/scroll-indicator";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <div className="flex justify-center scroll-smooth px-6 py-16 sm:px-10 md:px-16 lg:px-24">
      <article className="w-full max-w-prose">
        <ScrollIndicator />
        <Post />
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "welcome" }];
}

export const dynamicParams = false;
