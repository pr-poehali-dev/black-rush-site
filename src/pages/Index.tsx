import Icon from "@/components/ui/icon";

const HERO_BG =
  "https://cdn.poehali.dev/projects/0236e050-22a6-4752-8e9b-0985530f876f/files/8f485283-5b5c-4796-be7f-370e7e7de43a.jpg";

export default function Index() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-body">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/60 backdrop-blur-md border-b border-[#1a1a1a]">
        <span className="font-display text-xl tracking-[0.15em] text-[#e8c84a] uppercase">
          Hero Russia
        </span>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Главная", id: "hero" },
            { label: "О проекте", id: "about" },
            { label: "Контакты", id: "contacts" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm tracking-widest uppercase text-gray-400 hover:text-[#e8c84a] transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/80" />

        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-[#e8c84a]/60 to-transparent hidden md:block" />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-[#e8c84a]/60 to-transparent hidden md:block" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#e8c84a]/30 text-[#e8c84a] text-xs tracking-[0.3em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8c84a] animate-pulse" />
            Сервер онлайн
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-black uppercase leading-none tracking-tight mb-4">
            <span className="block text-white">Hero</span>
            <span className="block text-[#e8c84a] [text-shadow:0_0_40px_rgba(232,200,74,0.4)]">
              Russia
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl tracking-wide mb-12 max-w-xl mx-auto leading-relaxed">
            Погружение в мир криминального андеграунда. Живи по своим правилам.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://disk.yandex.ru/d/-0hyBHTPPOK6fA"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-[#e8c84a] text-black font-display font-bold uppercase tracking-widest px-10 py-4 text-sm overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(232,200,74,0.5)]"
            >
              <Icon name="Play" size={18} />
              Играть сейчас
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </a>
            <button
              onClick={() => scrollTo("about")}
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 font-display uppercase tracking-widest px-8 py-4 text-sm hover:border-[#e8c84a]/50 hover:text-[#e8c84a] transition-all duration-300"
            >
              <Icon name="ChevronDown" size={16} />
              Узнать больше
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronsDown" size={20} className="text-[#e8c84a]/40" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-[#e8c84a]" />
            <span className="font-display text-xs tracking-[0.4em] uppercase text-[#e8c84a]">
              О проекте
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black uppercase leading-tight mb-6 text-white">
                Твоя история
                <br />
                <span className="text-[#e8c84a]">начинается здесь</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Hero Russia — это ролевой сервер с глубокой экономикой, живым
                миром и сотнями игроков. Каждое решение имеет последствия.
                Каждый союзник — потенциальный враг.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Стань частью одной из группировок, выстрой свою империю или
                живи по закону — выбор за тобой.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Users", label: "Онлайн игроков", value: "500+" },
                { icon: "Map", label: "Районов города", value: "12" },
                { icon: "Briefcase", label: "Профессий", value: "40+" },
                { icon: "Shield", label: "Фракций", value: "8" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#111] border border-[#1e1e1e] p-6 hover:border-[#e8c84a]/30 transition-colors duration-300"
                >
                  <Icon
                    name={stat.icon}
                    size={20}
                    className="text-[#e8c84a] mb-3"
                  />
                  <div className="font-display text-3xl font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#e8c84a]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.03)_10px,rgba(0,0,0,0.03)_20px)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-display text-4xl md:text-6xl font-black text-black uppercase leading-tight mb-6">
            Готов войти в игру?
          </h3>
          <p className="text-black/60 text-lg mb-10">
            Присоединяйся прямо сейчас. Сервер ждёт.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black text-[#e8c84a] font-display font-bold uppercase tracking-widest px-12 py-5 text-sm hover:bg-[#111] transition-colors duration-300"
          >
            <Icon name="Gamepad2" size={20} />
            Подключиться к серверу
          </a>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-[#e8c84a]" />
            <span className="font-display text-xs tracking-[0.4em] uppercase text-[#e8c84a]">
              Контакты
            </span>
          </div>

          <div className="grid md:grid-cols-1 gap-6 max-w-sm">
            {[
              {
                icon: "Globe",
                title: "Форум",
                desc: "Обсуждения и помощь",
                link: "https://whg111652.sampproject.ru/index.php?forums/main-forum.2/",
                label: "Открыть форум",
              },
            ].map((contact) => (
              <a
                key={contact.title}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#111] border border-[#1e1e1e] p-8 hover:border-[#e8c84a]/40 transition-all duration-300 hover:bg-[#131313]"
              >
                <Icon
                  name={contact.icon}
                  size={24}
                  className="text-[#e8c84a] mb-4"
                />
                <h4 className="font-display text-xl font-bold text-white mb-1 uppercase tracking-wider">
                  {contact.title}
                </h4>
                <p className="text-gray-500 text-sm mb-4">{contact.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-[#e8c84a] uppercase tracking-wider group-hover:gap-2 transition-all duration-200">
                  {contact.label}
                  <Icon name="ArrowRight" size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1a1a1a] py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-[#e8c84a] tracking-widest uppercase text-sm">
            Hero Russia
          </span>
          <p className="text-gray-600 text-xs tracking-wider">
            © 2024 Black Russia. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}