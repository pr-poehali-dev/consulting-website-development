import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const expertiseAreas = [
    {
      icon: 'TrendingUp',
      title: 'Стратегическое планирование',
      description: 'Разработка долгосрочной стратегии развития бизнеса с учетом рыночных трендов'
    },
    {
      icon: 'Users',
      title: 'Управление персоналом',
      description: 'Оптимизация HR-процессов и построение эффективной корпоративной культуры'
    },
    {
      icon: 'BarChart',
      title: 'Финансовый консалтинг',
      description: 'Анализ финансовых показателей и разработка стратегий роста прибыльности'
    },
    {
      icon: 'Settings',
      title: 'Операционная эффективность',
      description: 'Оптимизация бизнес-процессов и внедрение современных методологий управления'
    },
    {
      icon: 'Zap',
      title: 'Цифровая трансформация',
      description: 'Внедрение digital-решений и автоматизация процессов компании'
    },
    {
      icon: 'Target',
      title: 'Управление изменениями',
      description: 'Сопровождение организационных изменений и развитие адаптивности бизнеса'
    }
  ];

  const cases = [
    {
      title: 'Увеличение прибыли на 40%',
      company: 'Производственная компания',
      description: 'Оптимизация производственных процессов и внедрение системы управления качеством',
      results: ['Рост выручки на 40%', 'Снижение брака на 65%', 'Сокращение издержек на 25%'],
      image: 'https://cdn.poehali.dev/projects/9735a629-15d1-443e-a785-fd792e73a556/files/17084de2-b3ab-4330-a7fd-7f734e32e272.jpg'
    },
    {
      title: 'Цифровая трансформация',
      company: 'Ритейл сеть',
      description: 'Внедрение омниканальной стратегии и автоматизация бизнес-процессов',
      results: ['Рост онлайн-продаж в 3 раза', 'Улучшение NPS на 45%', 'Ускорение операций на 50%'],
      image: 'https://cdn.poehali.dev/projects/9735a629-15d1-443e-a785-fd792e73a556/files/8389efa5-7f92-471f-b63d-d0789245de28.jpg'
    },
    {
      title: 'Реструктуризация холдинга',
      company: 'Многопрофильный холдинг',
      description: 'Оптимизация структуры и внедрение единой стратегии управления',
      results: ['Сокращение издержек на 30%', 'Рост EBITDA на 55%', 'Улучшение управляемости'],
      image: 'https://cdn.poehali.dev/projects/9735a629-15d1-443e-a785-fd792e73a556/files/c50175cc-9087-4964-adaf-c174a963534b.jpg'
    }
  ];

  const team = [
    {
      name: 'Александр Петров',
      position: 'Управляющий партнер',
      experience: '15+ лет в стратегическом консалтинге',
      expertise: ['McKinsey & Company', 'MBA Wharton']
    },
    {
      name: 'Мария Соколова',
      position: 'Партнер, HR-консалтинг',
      experience: '12+ лет в управлении персоналом',
      expertise: ['Сбербанк', 'CIPD UK']
    },
    {
      name: 'Дмитрий Волков',
      position: 'Партнер, финансы',
      experience: '14+ лет в финансовом консалтинге',
      expertise: ['Deloitte', 'CFA Charter']
    },
    {
      name: 'Елена Иванова',
      position: 'Старший консультант',
      experience: '10+ лет в операционном консалтинге',
      expertise: ['BCG', 'Six Sigma Black Belt']
    }
  ];

  const blogPosts = [
    {
      title: 'Тренды управленческого консалтинга 2025',
      date: '15 октября 2024',
      category: 'Стратегия',
      excerpt: 'Анализ ключевых трендов, которые будут определять развитие консалтинговой индустрии в следующем году...'
    },
    {
      title: 'Как повысить эффективность команды на 50%',
      date: '8 октября 2024',
      category: 'Управление',
      excerpt: 'Практические инструменты и методологии для повышения продуктивности команды без увеличения бюджета...'
    },
    {
      title: 'Цифровая трансформация: с чего начать?',
      date: '1 октября 2024',
      category: 'Digital',
      excerpt: 'Пошаговый план цифровой трансформации бизнеса: от аудита до внедрения решений...'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">ConsultPro</h1>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('expertise')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Экспертиза
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Кейсы
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Команда
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Блог
              </button>
              <Button onClick={() => scrollToSection('contact')} size="sm">
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="outline" className="w-fit">
                Консалтинговые решения премиум-класса
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Трансформируем бизнес в{' '}
                <span className="text-primary">лидера рынка</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Стратегический консалтинг для компаний, которые стремятся к устойчивому росту и
                операционному совершенству
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')}>
                  Начать проект
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('cases')}>
                  Наши кейсы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Успешных</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <img
                src="https://cdn.poehali.dev/projects/9735a629-15d1-443e-a785-fd792e73a556/files/c50175cc-9087-4964-adaf-c174a963534b.jpg"
                alt="Consulting Team"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Наша экспертиза
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Области консалтинга</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к решению бизнес-задач с опытом ведущих мировых консалтинговых
              компаний
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={area.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Успешные проекты
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Наши кейсы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Измеримые результаты и реальные трансформации бизнеса наших клиентов
            </p>
          </div>
          <div className="space-y-8">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="p-8">
                    <Badge className="mb-4">{caseItem.company}</Badge>
                    <h3 className="text-2xl font-bold mb-3">{caseItem.title}</h3>
                    <p className="text-muted-foreground mb-6">{caseItem.description}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm mb-3">Результаты:</p>
                      {caseItem.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Наша команда
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Эксперты с мировым опытом</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Партнеры и консультанты с опытом работы в ведущих международных компаниях
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                  <div className="space-y-1">
                    {member.expertise.map((exp, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs mr-1">
                        {exp}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Блог
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Инсайты и экспертиза</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Делимся знаниями, аналитикой и лучшими практиками управленческого консалтинга
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  <Button variant="link" className="px-0 mt-4">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Свяжитесь с нами
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Начнем трансформацию вашего бизнеса</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>
          <Card className="animate-scale-in">
            <CardContent className="p-8">
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
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Расскажите о вашей задаче</label>
                  <Textarea
                    placeholder="Опишите задачу, с которой вы хотите обратиться к нам..."
                    rows={5}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Icon name="Mail" size={24} className="mx-auto text-primary" />
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">info@consultpro.ru</p>
            </div>
            <div className="space-y-2">
              <Icon name="Phone" size={24} className="mx-auto text-primary" />
              <p className="font-medium">Телефон</p>
              <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div className="space-y-2">
              <Icon name="MapPin" size={24} className="mx-auto text-primary" />
              <p className="font-medium">Адрес</p>
              <p className="text-sm text-muted-foreground">Москва, Тверская 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">ConsultPro</h3>
              <p className="text-sm text-muted-foreground">
                Стратегический консалтинг премиум-класса для лидеров рынка
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Стратегия</li>
                <li>Операции</li>
                <li>Финансы</li>
                <li>Digital</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Блог</li>
                <li>Кейсы</li>
                <li>Исследования</li>
                <li>Пресс-центр</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ConsultPro. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
