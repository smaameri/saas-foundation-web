import {
  siBetterauth,
  siGithub,
  siNextdotjs,
  siPostgresql,
  siPrisma,
  siReacthookform,
  siReactquery,
  siShadcnui,
  siTypescript,
  siZod,
  type SimpleIcon,
} from "simple-icons";
import DemoDialog from "./demo-dialog";

const features = [
  {
    number: "01",
    title: "Admin & customer portals",
    description:
      "Two purpose-built experiences with clear trust boundaries, ready for your team and your customers.",
  },
  {
    number: "02",
    title: "Multi-tenant foundations",
    description:
      "Organizations, memberships, invitations, roles, and permissions—all wired up from day one.",
  },
  {
    number: "03",
    title: "A typed API layer",
    description:
      "Consistent request validation, response serialization, and error handling across the entire app.",
  },
  {
    number: "04",
    title: "Production-ready UI",
    description:
      "Forms, feedback states, and flexible data tables built with accessible, composable primitives.",
  },
];

const stack: { name: string; icon: SimpleIcon }[] = [
  { name: "TypeScript", icon: siTypescript },
  { name: "Prisma", icon: siPrisma },
  { name: "Better Auth", icon: siBetterauth },
  { name: "Next.js", icon: siNextdotjs },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "ShadCN", icon: siShadcnui },
  { name: "Zod", icon: siZod },
  { name: "TanStack Query", icon: siReactquery },
  { name: "React Hook Form", icon: siReacthookform },
];

function BrandIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-7 fill-current"
    >
      <path d={icon.path} />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 fill-none stroke-current stroke-2">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 fill-none stroke-current stroke-2">
      <path d="m4 10 4 4 8-8" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4 fill-current"
    >
      <path d={siGithub.path} />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#050706] text-[#f3f7f6]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
        <a href="#" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-[#111816] text-sm font-bold text-primary">SF</span>
          <span>SaaS Foundation</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-[#91a09c] md:flex">
          <a href="#features" className="transition-colors hover:text-white">Features</a>
          <a href="#stack" className="transition-colors hover:text-white">Stack</a>
          <DemoDialog />
        </div>
        <a
          href="https://github.com/smaameri/saas-foundation"
          className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-medium transition hover:border-primary/60 hover:text-primary-light"
        >
          <GitHubIcon /> View on GitHub <ArrowIcon />
        </a>
      </nav>

      <section className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-32 lg:pt-24">
        <div className="relative z-10 flex flex-col items-start">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-dark">
            <span className="size-1.5 rounded-full bg-primary" /> Open source · TypeScript
          </div>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            The foundation for your next <span className="text-primary-dark">B2B SaaS.</span>
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-[#98a7a3] sm:text-xl">
            A production-minded, multi-tenant starter that handles the generic parts of B2B software—so you can start building what makes your product matter.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://github.com/smaameri/saas-foundation"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-[#071c19] shadow-[0_12px_30px_rgba(0,187,167,0.22)] transition hover:bg-primary-dark hover:text-white"
            >
              Get started <ArrowIcon />
            </a>
            <a href="#features" className="inline-flex h-12 items-center justify-center rounded-full px-6 font-medium text-[#b4c0bd] transition hover:bg-white/5 hover:text-white">
              Explore what&apos;s included
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#7f908b]">
            {[
              "MIT licensed",
              "End-to-end type safe",
              "Built for real products",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2"><span className="text-primary-dark"><CheckIcon /></span>{item}</span>
            ))}
          </div>
        </div>

        <div className="relative lg:pt-6">
          <div className="absolute -inset-16 -z-0 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative rounded-[28px] border border-white/10 bg-[#111816] p-2.5 shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
            <div className="overflow-hidden rounded-[20px] bg-[#0b0f0e]">
              <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
                <div className="flex items-center gap-2"><span className="size-2.5 rounded-full bg-[#ff6b6b]" /><span className="size-2.5 rounded-full bg-[#ffd166]" /><span className="size-2.5 rounded-full bg-primary" /></div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8a9895]">Product demo · 0:33</span>
              </div>
              <video
                className="aspect-[926/720] w-full bg-black object-cover"
                controls
                playsInline
                preload="metadata"
                title="SaaS Foundation product demo"
              >
                <source src="/saas-foundation-intro.mp4" type="video/mp4" />
                Your browser does not support embedded videos.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-white/10 bg-[#090c0b] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-dark">Everything before the product</p><h2 className="max-w-xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">The important parts, already handled.</h2></div>
            <p className="max-w-xl text-lg leading-8 text-[#8f9d99] lg:justify-self-end">Stop rebuilding authentication, tenancy, and admin tools. SaaS Foundation gives you a clear, extensible architecture for the work every B2B app needs.</p>
          </div>
          <div className="mt-16 grid border-l border-t border-white/10 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.number} className="group border-b border-r border-white/10 p-7 transition-colors hover:bg-white/[0.025] sm:p-10">
                <span className="font-mono text-xs text-primary-dark">/{feature.number}</span>
                <h3 className="mt-10 text-xl font-semibold tracking-tight">{feature.title}</h3>
                <p className="mt-3 max-w-md leading-7 text-[#879691]">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="bg-[#050706] py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">A modern TypeScript stack</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">Great tools.<br />One solid foundation.</h2><p className="mt-5 max-w-md leading-7 text-[#9db0ab]">Built with proven, well-supported tools that keep your application type-safe from database to interface.</p></div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
              {stack.map((item, index) => (
                <div
                  key={item.name}
                  className="group flex h-32 flex-col items-center justify-center gap-3 bg-[#0e1513] p-4 text-center transition hover:bg-[#14221f]"
                >
                  <span className="text-[#c3cecb] transition-colors group-hover:text-primary">
                    <BrandIcon icon={item.icon} />
                  </span>
                  <span className="font-mono text-sm">
                    <span className="mr-2 text-primary">0{index + 1}</span>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-20 text-[#08231f] sm:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em]">Build the part only you can build</p>
          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Skip the boilerplate. Start with your product.</h2>
          <a href="https://github.com/smaameri/saas-foundation" className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-[#102421] px-6 font-semibold text-white transition hover:bg-[#193a33]"><GitHubIcon /> Explore on GitHub <ArrowIcon /></a>
        </div>
      </section>

      <footer className="bg-[#0b1b18] px-6 py-8 text-sm text-[#8da09b]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row"><span className="font-medium text-white">SaaS Foundation</span><span>An open-source foundation for production-ready B2B SaaS.</span></div>
      </footer>
    </main>
  );
}
