export default function LeadershipSection() {
  const leaders = [
    {
      name: "Datuk Lim Siow Jin",
      role: "Guiding Principal",
      img: "https://via.placeholder.com/400x400.png?text=Datuk+Lim+Siow+Jin",
      bio: `Founder of DXN and Guiding Principal of SIF. His vision inspired the
      establishment of Sunyatee International Foundation to promote peace,
      prosperity, and mindfulness globally.`,
    },
    {
      name: "Dr. Rajesh Savera",
      role: "Founder & Director",
      img: "https://via.placeholder.com/400x400.png?text=Dr+Rajesh+Savera",
      bio: `Founder of SIF, mindfulness coach, author, and facilitator. He leads
      initiatives in Sunya meditation, farmer and women empowerment, rural
      health, and cultural revival.`,
    },
  ];

  return (
    <section
      id="leadership"
      className="bg-neutral-50 dark:bg-neutral-950 py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-emerald-600">
            Leadership
          </p>
          <h2 className="mt-2 text-3xl font-bold">Our Founders & Guides</h2>
          <p className="mt-3 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">
            The vision and dedication of our leaders guide SIF to create lasting
            impact across communities.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {leaders.map((l) => (
            <div
              key={l.name}
              className="rounded-2xl bg-white shadow-lg dark:bg-neutral-900 overflow-hidden"
            >
              <img
                src={l.img}
                alt={l.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{l.name}</h3>
                <p className="text-sm text-emerald-600">{l.role}</p>
                <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                  {l.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
