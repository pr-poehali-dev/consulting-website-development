import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialProofs = [
    {
      icon: 'Award',
      title: 'Отзывы ведущих компаний',
      description: 'Посмотрите, что о нас говорят клиенты из ритейла, IT и производства'
    },
    {
      icon: 'Users',
      title: 'Кейсы трансформаций',
      description: 'Изучите реальные результаты: как мы помогли увеличить прибыль на 40% и снизить издержки'
    },
    {
      icon: 'TrendingUp',
      title: 'Статистика успеха',
      description: '150+ проектов, 98% довольных клиентов, 12 лет опыта в операционном консалтинге'
    }
  ];

  const services = [
    {
      title: 'Операционный аудит',
      duration: '2-3 недели',
      price: 'От 300 000 ₽',
      results: [
        'Карта процессов компании',
        'Расчет потерь и точек роста',
        'План улучшений с приоритетами'
      ],
      icon: 'Search'
    },
    {
      title: 'Система KPI и мотивации',
      duration: '3-4 недели',
      price: 'От 450 000 ₽',
      results: [
        'Каскад KPI от целей до исполнителей',
        'Интеграция с системой мотивации',
        'Дашборды для контроля показателей'
      ],
      icon: 'BarChart3',
      popular: true
    },
    {
      title: 'Комплексная операционная трансформация',
      duration: '6-8 недель',
      price: 'От 900 000 ₽',
      results: [
        'Полная перестройка операционной модели',
        'Внедрение всех процессов и KPI',
        'Обучение команды и передача знаний'
      ],
      icon: 'Rocket'
    }
  ];

  const benefits = [
    {
      title: 'Экономия времени топ-менеджеров',
      description: 'Вместо «тушения пожаров» — системная работа над стратегическими задачами. Клиенты экономят до 25 часов в неделю.'
    },
    {
      title: 'Рост прибыли на 20-40%',
      description: 'Оптимизация процессов и внедрение KPI напрямую влияют на финансовый результат компании.'
    },
    {
      title: 'Управляемость и прозрачность',
      description: 'Каждый сотрудник понимает свою роль, все процессы прозрачны и измеримы через дашборды.'
    }
  ];

  const testimonials = [
    {
      text: 'После работы с COD Consulting мы сократили издержки на 30% и увеличили EBITDA на 55%. Наконец-то появилась управляемость.',
      author: 'Алексей Иванов',
      position: 'Финансовый директор, многопрофильный холдинг',
      company: 'Холдинг «Развитие»'
    },
    {
      text: 'Команда реально погрузилась в наш бизнес. Не просто дали рекомендации, а внедрили систему и обучили персонал. Снижение стоимости найма на 18% — это результат.',
      author: 'Мария Петрова',
      position: 'HR-директор',
      company: '12 STOREEZ'
    },
    {
      text: 'За 6 недель построили операционную систему с нуля. Рост выручки на 40%, а главное — теперь понятно, куда двигаться дальше.',
      author: 'Дмитрий Соколов',
      position: 'Генеральный директор',
      company: 'Производственная компания'
    }
  ];

  const faqItems = [
    {
      question: 'Сколько времени занимает проект?',
      answer: 'В зависимости от формата: операционный аудит — 2-3 недели, система KPI — 3-4 недели, полная трансформация — 6-8 недель.'
    },
    {
      question: 'Какова стоимость работ?',
      answer: 'Операционный аудит — от 300 000 ₽, система KPI — от 450 000 ₽, комплексная трансформация — от 900 000 ₽. Точная цена фиксируется после диагностической встречи.'
    },
    {
      question: 'Для компаний какого размера вы работаете?',
      answer: 'Мы специализируемся на компаниях от 50 до 500+ сотрудников в ритейле, IT, услугах и производстве.'
    },
    {
      question: 'Чем вы отличаетесь от других консультантов?',
      answer: 'Мы работаем до результата, а не до отчета. Погружаемся в вашу команду, внедряем систему и обучаем персонал. Фиксированная стоимость без скрытых платежей.'
    },
    {
      question: 'Что если результат не будет достигнут?',
      answer: 'Мы не уходим, пока ваша команда не начнет работать по-новому. Все изменения закрепляются через обучение и передачу знаний вашим руководителям.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/98 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/bf4be80a-3d44-45f4-acec-f62ee0f3ed5e.png" 
                alt="COD Consulting" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Преимущества
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <Button onClick={() => scrollToSection('contact')} size="sm">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Ваш бизнес вырос.{' '}
              <span className="text-primary">А система управления — нет?</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Мы строим операционные системы, которые позволяют компаниям масштабироваться без
              хаоса. От стратегии до KPI каждого сотрудника.
            </p>
            <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-10 py-6">
              Получить бесплатную диагностику
              <Icon name="ArrowRight" size={22} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="utp" className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-primary text-primary-foreground border border-primary/20 animate-scale-in">
            <CardContent className="p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Не отчет, а работающая система за 2-8 недель
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Интенсив-внедрение. Мы погружаемся в вашу компанию и не уходим, пока результат не
                достигнут. Фиксированная стоимость, измеримые результаты.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="social-proof" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Доказательства экспертности</h2>
            <p className="text-lg text-muted-foreground">
              Посмотрите, что говорят клиенты и какие результаты мы достигаем
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {socialProofs.map((proof, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={proof.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{proof.title}</CardTitle>
                  <CardDescription className="text-base">{proof.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-card/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Наши услуги: решение для каждой задачи
            </h2>
            <p className="text-lg text-muted-foreground">
              Выберите формат работы, который подходит вашему бизнесу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm animate-scale-in ${
                  service.popular ? 'border-2 border-primary' : 'border border-border'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {service.duration}
                    </span>
                    <span className="text-primary font-semibold text-base">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {service.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6" variant={service.popular ? 'default' : 'outline'}>
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Преимущества и выгоды</h2>
            <p className="text-lg text-muted-foreground">
              Продемонстрируйте, как вы можете улучшить жизнь клиента
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl mb-3">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6 bg-card/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Отзывы клиентов
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят о нашей работе</h2>
            <p className="text-lg text-muted-foreground">
              Укрепите доверие посетителей реальными историями успеха
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4">
                    <Icon name="Quote" size={40} className="text-primary/30" />
                  </div>
                  <CardDescription className="text-base mb-6 text-foreground/90">
                    {testimonial.text}
                  </CardDescription>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                    <p className="text-xs text-primary mt-1">{testimonial.company}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Ответы на частые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Предусмотрите возможные вопросы клиентов о цене, сроках или деталях
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="border border-border bg-card/50 backdrop-blur-sm">
                <AccordionItem value={`item-${index}`} className="border-0">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-left font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-card/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Готовы сделать вашу компанию управляемой?
            </h2>
            <p className="text-lg text-muted-foreground">
              Это последний шанс побудить посетителя к действию. Повторите призыв к действию или
              добавьте контактную форму.
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border border-border">
            <CardContent className="p-10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Компания</label>
                    <Input placeholder="Название компании" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Что вас беспокоит?</label>
                  <Textarea
                    placeholder="Расскажите о ситуации в вашей компании..."
                    rows={4}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Получить бесплатную диагностику за 30 минут
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Полное КП предоставляется после проведения встречи
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-card/30 backdrop-blur-sm border border-border">
              <CardContent className="p-6 text-center">
                <Icon name="Phone" size={28} className="mx-auto text-primary mb-3" />
                <p className="font-medium mb-1">Телефон</p>
                <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="bg-card/30 backdrop-blur-sm border border-border">
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={28} className="mx-auto text-primary mb-3" />
                <p className="font-medium mb-1">Email</p>
                <p className="text-sm text-muted-foreground">info@codconsulting.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/bf4be80a-3d44-45f4-acec-f62ee0f3ed5e.png" 
                alt="COD Consulting" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Операционные системы для масштабирования бизнеса без хаоса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">
                  Операционный аудит
                </li>
                <li className="hover:text-primary cursor-pointer transition-colors">Система KPI</li>
                <li className="hover:text-primary cursor-pointer transition-colors">
                  Операционная трансформация
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Отзывы</li>
                <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@codconsulting.ru</li>
                <li>Москва</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 COD Consulting. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
