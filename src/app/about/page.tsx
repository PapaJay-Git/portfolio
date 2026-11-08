import type { Metadata } from "next";
import Image from "next/image";
import photo from "@/assets/about-me.jpeg";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Jayson Cainglet is a full-stack engineer and technical lead based in Tarlac, Philippines.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="pt-16">
      <h1 className="font-serif text-4xl tracking-tight">About</h1>
      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_12rem]">
        <div className="prose">
          <p>
            I&apos;m a full-stack engineer based in {site.location}. For the past two years I&apos;ve been the primary
            engineer, and then the technical lead, on The Host Desk, a rental-operations SaaS, from its first commit to a
            production marketplace with real payments.
          </p>
          <p>
            Most of my work sits where products tend to break: payments, data migrations, third-party APIs with strict
            rate limits, and deploys. I like making those parts boring.
          </p>
          <h2>How I work with AI</h2>
          <p>
            I use Cursor and Claude Code every day, inside a multi-agent workflow with planning, building, QC and
            release-gate steps. The agents write a lot of code. I read every diff line by line, check that it does what
            the agent says it does, and reject changes nobody asked for. That review is the part I&apos;m accountable
            for.
          </p>
          <h2>Before this</h2>
          <p>
            I started in PHP and Laravel: in-house systems at a food manufacturer, and freelance builds alongside. At STI
            College Tarlac I led the four-person team behind E-SKWELA, a school management system that Santo Cristo
            School in Tarlac City went on to use.
          </p>
          <p>
            Outside work, I run a small retail business. I handle its operations and purchasing, and built the
            sales and inventory tracker it runs on.
          </p>
        </div>
        <Image
          src={photo}
          alt="Portrait of Jayson Cainglet"
          placeholder="blur"
          sizes="12rem"
          className="h-auto w-48 rounded-lg grayscale"
        />
      </div>
    </section>
  );
}
