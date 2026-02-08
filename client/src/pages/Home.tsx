import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Home, Lightbulb, Wrench, MapPin, Phone, Mail, Instagram, ChevronRight, Star, CheckCircle2, ArrowRight, MessageCircle, HelpCircle, Facebook, MapPin as MapIcon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  const services = [
    {
      icon: Zap,
      title: "Popravci Elektroinstalacije",
      description: "Brzi i pouzdani popravci svih vrsta elektroinstalacija za domaćinstva i poslovne prostore.",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: Home,
      title: "Adaptacije Postojećih Instalacija",
      description: "Modernizacija i prilagodba postojećih elektroinstalacija prema vašim potrebama.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Montaža Rasvjete",
      description: "Profesionalna montaža svih vrsta rasvjete - unutarnje, vanjske i dekorativne.",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Wrench,
      title: "Ugradnja Novog Programa",
      description: "Ugradnja nove elektroinstalacije jake i slabe struje za novogradnje i adaptacije.",
      color: "from-slate-400 to-slate-600",
    },
  ];

  const gallery = [
    {
      image: "/images/work-2-interior-light.webp",
      title: "Unutarnja Rasvjeta",
      category: "Rasvjeta",
    },
    {
      image: "/images/work-3-parking-light.webp",
      title: "Osvjetljenje Parkirališta",
      category: "Vanjska Rasvjeta",
    },
    {
      image: "/images/work-4-facade-light.webp",
      title: "Osvjetljenje Fasade",
      category: "Vanjska Rasvjeta",
    },
    {
      image: "/images/work-7-installation-panel.webp",
      title: "Instalacijski Panel",
      category: "Instalacija",
    },
    {
      image: "/images/work-12-electrical-panel.webp",
      title: "Električni Panel",
      category: "Instalacija",
    },
    {
      image: "/images/work-14-night-lighting.webp",
      title: "Noćna Rasvjeta",
      category: "Rasvjeta",
    },
  ];

  const testimonials = [
    {
      name: "Marko Horvat",
      role: "Vlasnik Restorana",
      text: "Odličan rad! Brzo, profesionalno i pouzdano. Preporučujem svima!",
      rating: 5,
    },
    {
      name: "Ana Mikulić",
      role: "Vlasnica Dućana",
      text: "Elektroinstalacija je sada sigurna i moderna. Hvala na stručnosti!",
      rating: 5,
    },
    {
      name: "Petar Novak",
      role: "Vlasnik Kuće",
      text: "Hitna intervencija je bila brza i efikasna. Preporučujem!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Koliko traje tipicna elektroinstalacija?",
      answer: "Vrijeme ovisi o vrsti i opsegu radova. Manji popravci traju nekoliko sati, dok vece instalacije mogu potrajati nekoliko dana.",
    },
    {
      question: "Radite li hitne intervencije?",
      answer: "Da! Dostupni smo po dogovoru za sve vrste radova. Pozovite nas i dogovorimo termin koji vam odgovara.",
    },
    {
      question: "Dajete li garanciju na radove?",
      answer: "Naravno! Svi nasi radovi imaju garanciju. Detaljne uvjete dogovaramo s klijentom prije pocetka radova.",
    },
    {
      question: "Koja je vasa cijena?",
      answer: "Cijene ovise o vrsti i opsegu radova. Pruzamo besplatnu procjenu i detaljnu ponudu prije pocetka.",
    },
    {
      question: "Trebam li dozvolu za elektroinstalacijske radove?",
      answer: "Ovisi o vrsti radova. Za vece radove trebate dozvolu. Pomoci cemo vam s procesom i dokumentacijom.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 hover:scale-105 transition-transform">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Elektro Hegediš</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <div className="relative group">
              <button className="text-foreground hover:text-secondary transition-colors font-medium flex items-center gap-1">
                Meni
                <ChevronRight className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="#contact" className="block px-4 py-2 text-foreground hover:text-secondary hover:bg-secondary/5 transition-colors first:rounded-t-lg">Kontakt</a>
                <a href="#gallery" className="block px-4 py-2 text-foreground hover:text-secondary hover:bg-secondary/5 transition-colors">Radovi</a>
                <a href="#about" className="block px-4 py-2 text-foreground hover:text-secondary hover:bg-secondary/5 transition-colors">O Nama</a>
                <a href="https://www.facebook.com/share/1BpaeE5FqE/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-foreground hover:text-secondary hover:bg-secondary/5 transition-colors">Veze</a>
                <a href="#faq" className="block px-4 py-2 text-foreground hover:text-secondary hover:bg-secondary/5 transition-colors last:rounded-b-lg">Cesto Postavljana Pitanja</a>
              </div>
            </div>
            <a href="#services" className="text-foreground hover:text-secondary transition-colors font-medium">Usluge</a>
            <a href="#gallery" className="text-foreground hover:text-secondary transition-colors font-medium">Galerija</a>
            <a href="#testimonials" className="text-foreground hover:text-secondary transition-colors font-medium">Recenzije</a>
            <a href="#contact" className="text-foreground hover:text-secondary transition-colors font-medium">Kontakt</a>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={() => setOpenDropdown(openDropdown === 'mobile' ? null : 'mobile')} className="p-2 hover:bg-secondary/10 rounded-lg transition-colors">
              {openDropdown === 'mobile' ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            {openDropdown === 'mobile' && (
              <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg z-50">
                <div className="flex flex-col p-4 gap-4">
                  <a href="#contact" className="text-foreground hover:text-secondary transition-colors font-medium">Kontakt</a>
                  <a href="#gallery" className="text-foreground hover:text-secondary transition-colors font-medium">Radovi</a>
                  <a href="#about" className="text-foreground hover:text-secondary transition-colors font-medium">O Nama</a>
                  <a href="https://www.facebook.com/share/1BpaeE5FqE/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-secondary transition-colors font-medium">Veze</a>
                  <a href="#faq" className="text-foreground hover:text-secondary transition-colors font-medium">Cesto Postavljana Pitanja</a>
                  <hr className="my-2" />
                  <a href="#services" className="text-foreground hover:text-secondary transition-colors font-medium">Usluge</a>
                  <a href="#gallery" className="text-foreground hover:text-secondary transition-colors font-medium">Galerija</a>
                  <a href="#testimonials" className="text-foreground hover:text-secondary transition-colors font-medium">Recenzije</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-banner.jpg"
            alt="Elektro Hegediš"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        
        <div className={`relative z-10 container mx-auto px-4 text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 inline-block">
            <div className="flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/40 electric-pulse">
              <Zap className="w-4 h-4 text-secondary glow-pulse" />
              <span className="text-secondary font-semibold">Profesionalne Elektroinstalacije</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            Elektroinstalacije<br />
            <span className="bg-gradient-to-r from-secondary via-orange-400 to-orange-500 bg-clip-text text-transparent">Visoke Kvalitete</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Pouzdane elektroinstalacijske usluge za domaćinstva i poslovne prostore u Čepinu i okolici. Radno vrijeme po dogovoru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+385989384184">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white text-lg px-8 shadow-lg hover:shadow-xl transition-all electric-pulse">
                <Phone className="w-5 h-5 mr-2 animate-bounce" />
                Pozovite Nas
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 backdrop-blur-sm">
                <ChevronRight className="w-5 h-5 mr-2" />
                Saznajte Više
              </Button>
            </a>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white text-sm">Skrolaj dolje</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{
          clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
        }}></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Naše Usluge</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pružamo kompletan spektar elektroinstalacijskih usluga s godinama iskustva i stručnosti
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-2xl transition-all duration-300 border-border bg-gradient-to-br from-white to-gray-50 hover:border-secondary group overflow-hidden relative hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-orange-200 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all group-hover:animate-bounce">
                      <Icon className="w-8 h-8 text-secondary group-hover:glow-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <a href="#contact" className="inline-flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform hover:text-orange-500">
                      Saznaj više <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:bg-white/50 transition-colors hover:scale-105 hover:shadow-lg">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 electric-pulse">
                <CheckCircle2 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Pouzdanost</h3>
              <p className="text-muted-foreground">Godinama iskustva i stotine zadovoljnih klijenta</p>
            </div>
            <div className="text-center p-8 rounded-xl hover:bg-white/50 transition-colors hover:scale-105 hover:shadow-lg">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-pulse">
                <Zap className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Brzina</h3>
              <p className="text-muted-foreground">Brzi odgovori i radno vrijeme po dogovoru</p>
            </div>
            <div className="text-center p-8 rounded-xl hover:bg-white/50 transition-colors hover:scale-105 hover:shadow-lg">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 electric-pulse">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Kvaliteta</h3>
              <p className="text-muted-foreground">Korištenje samo najboljih materijala i tehnike</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Naši Radovi</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pogledajte primjere naših profesionalnih instalacija i radova
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                  <p className="text-secondary text-sm font-semibold">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Što Kažu Naši Klijenti</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 bg-white border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">Kontaktirajte Nas</h2>
              <div className="space-y-6">
                <a href="tel:+385989384184" className="flex gap-4 group hover:translate-x-2 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Telefon</h3>
                    <p className="text-muted-foreground group-hover:text-secondary transition-colors">+385 98 938 4184</p>
                  </div>
                </a>

                <a href="mailto:elektrohegedis@gmail.com" className="flex gap-4 group hover:translate-x-2 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground group-hover:text-secondary transition-colors">elektrohegedis@gmail.com</p>
                  </div>
                </a>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Lokacija</h3>
                    <p className="text-muted-foreground">Čepin, Hrvatska</p>
                  </div>
                </div>

                <a href="https://instagram.com/hegedisboris" target="_blank" rel="noopener noreferrer" className="flex gap-4 group hover:translate-x-2 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all">
                    <Instagram className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Instagram</h3>
                    <p className="text-muted-foreground group-hover:text-secondary transition-colors">@hegedisboris</p>
                  </div>
                </a>

                <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10 hover:border-secondary/20 transition-colors">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">Radno vrijeme:</strong> Po dogovoru
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Ime i Prezime</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all bg-white hover:border-secondary/50"
                    placeholder="Vaše ime"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all bg-white hover:border-secondary/50"
                    placeholder="vasa@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all bg-white hover:border-secondary/50"
                    placeholder="+385 1 234 5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Poruka</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none bg-white hover:border-secondary/50"
                    placeholder="Opišite vašu potrebu..."
                  ></textarea>
                </div>

                {formStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Hvala! Poruka je poslana. Kontaktirat ćemo vas uskoro.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-secondary to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-3 transition-all shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Pošalji Poruku
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">O Nama</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Elektro Hegediš - Vaš Pouzdani Partner</h3>
              <p className="text-lg text-muted-foreground mb-4">Elektro Hegediš je obrt specijaliziran za profesionalne elektroinstalacijske usluge u Čepinu i okolici. S godinama iskustva i stručnosti, pružamo visokokvalitetne usluge za domaćinstva i poslovne prostore.</p>
              <p className="text-lg text-muted-foreground mb-4">Naš tim se sastoji od iskusnih elektrotehničara koji su posvećeni kvaliteti, sigurnosti i zadovoljstvu klijenta. Koristimo samo najbolje materijale i najnovije tehnike kako bi osigurali da su vaše elektroinstalacije sigurne i pouzdane.</p>
              <p className="text-lg text-muted-foreground mb-6">Bilo da trebate popravak, adaptaciju ili novu instalaciju, mi smo tu da vam pomognemo.</p>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Godinama iskustva u elektroinstalacijama</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Stotine zadovoljnih klijenta</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Korištenje samo najboljih materijala</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Profesionalan i brz servis</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Naše Vrijednosti</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-semibold mb-2">Pouzdanost</h5>
                  <p className="text-white/80">Možete se pouzdati da će naš tim obaviti posao na vrijeme i s najvišom kvalitetom.</p>
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-2">Sigurnost</h5>
                  <p className="text-white/80">Sve naše instalacije su sigurne i u skladu s najnovijim standardima.</p>
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-2">Kvaliteta</h5>
                  <p className="text-white/80">Koristimo samo najbolje materijale i tehnike za dugoročne rezultate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Često Postavljana Pitanja</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-orange-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden hover:border-secondary/50 transition-colors">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-colors"
                >
                  <span className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-semibold text-primary">{faq.question}</span>
                  </span>
                  <ChevronRight className={`w-5 h-5 text-secondary transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-border text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Pronađite Nas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Lokacija</h3>
              <p className="text-lg text-muted-foreground mb-8">Nalazi se u Čepinu, lako dostupna s javnim prijevozom i parkiranjem.</p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Adresa</p>
                    <p className="text-muted-foreground">Čepin, Hrvatska</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Telefon</p>
                    <a href="tel:+385989384184" className="text-secondary hover:text-orange-500 transition-colors">+385 98 938 4184</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.1234567890!2d18.4131!3d45.5550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c6e5c5c5c5c5d%3A0x1234567890abcdef!2sOsijek%2C%20Croatia!5e0!3m2!1sen!2shr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Pratite Nas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a href="https://www.facebook.com/share/1BpaeE5FqE/" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-xl border-2 border-border hover:border-secondary hover:shadow-xl transition-all bg-gradient-to-br from-white to-gray-50">
              <div className="flex items-center justify-between mb-4">
                <Facebook className="w-8 h-8 text-secondary" />
                <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Facebook</h3>
              <p className="text-muted-foreground">Elektro Hegediš - Pratite nas na Facebooku</p>
            </a>

            <a href="https://www.facebook.com/share/1BpaeE5FqE/" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-xl border-2 border-border hover:border-secondary hover:shadow-xl transition-all bg-gradient-to-br from-white to-gray-50">
              <div className="flex items-center justify-between mb-4">
                <Facebook className="w-8 h-8 text-secondary" />
                <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Facebook</h3>
              <p className="text-muted-foreground">Elektro Hegediš - Pratite nas na Facebooku</p>
            </a>
          </div>

          <div className="mt-16 text-center">
            <a href="https://wa.me/385989384184" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                <MessageCircle className="w-5 h-5 mr-2" />
                Kontaktirajte Nas na WhatsAppu
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold">Elektro Hegediš</span>
              </div>
              <p className="text-white/70">Profesionalne elektroinstalacijske usluge u Čepinu s godinama iskustva i stručnosti.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Brzi Linkovi</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-secondary transition-colors">Usluge</a></li>
                <li><a href="#gallery" className="hover:text-secondary transition-colors">Galerija</a></li>
                <li><a href="#testimonials" className="hover:text-secondary transition-colors">Recenzije</a></li>
                <li><a href="#contact" className="hover:text-secondary transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Kontakt</h4>
              <p className="text-white/70 mb-2">+385 98 938 4184</p>
              <p className="text-white/70 mb-4">elektrohegedis@gmail.com</p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1BpaeE5FqE/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2026 Elektro Hegediš. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
