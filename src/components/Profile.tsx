import dog from "../../assets/dog.png"

export function Profile() {
  return (
    <section className="mb-12 flex animate-[fade-in_1s_ease-out] flex-col items-center gap-6 text-center md:flex-row md:text-left" aria-labelledby="profile-heading">
      <div className="flex aspect-square size-24 min-h-24 min-w-24 animate-[scale-in_1.2s_ease-out] items-center justify-center overflow-hidden rounded-full border-2 border-line transition-[transform,box-shadow,border-color] duration-300 hover:scale-105 hover:shadow-[0_0_15px_var(--shadow)]">
        <img className="size-full rounded-full object-cover object-center" src={dog} alt="Allen Lazatin" />
      </div>
      <div className="w-full min-w-0">
        <h2 id="profile-heading" className="mb-2 animate-[fade-in_1s_ease-out] text-2xl font-bold text-foreground transition-colors duration-500">
          Hi, I am Allen Lazatin,
        </h2>
        <p className="mb-1 animate-[fade-in_1.1s_ease-out] text-subtle transition-colors duration-500">
          an aspiring network engineer and BSIT student building hands-on experience in networking, systems, and software development.
        </p>
        <p className="animate-[fade-in_1.2s_ease-out] text-sm text-muted transition-colors duration-500">Manila, Philippines</p>
      </div>
    </section>
  )
}
