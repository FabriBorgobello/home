import { LinksList } from "@/components/links-list";

export default function Home() {
  return (
    <div className="mx-auto w-[500px] max-w-full p-4 py-8 sm:py-16">
      <div className="mb-8 flex flex-col">
        <h1 className="text-lg font-bold">Fabricio Borgobello</h1>
        <p className="text-md text-foreground/80">Software Engineer</p>
      </div>
      <p>
        UI specialist. I love creating pleasant interactions for users that look
        great and feel natural. If that&apos;s what you&apos;re looking for,
        I&apos;m your guy.
      </p>
      <div className="mt-12 flex flex-col gap-2">
        <h2 className="text-foreground/80 text-lg font-semibold">Contact</h2>
        <LinksList />
      </div>
    </div>
  );
}
