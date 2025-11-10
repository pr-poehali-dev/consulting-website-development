import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    {
      icon: 'AlertCircle',
      title: 'Хаос при росте',
      description: 'Команда растет, а управляемость падает. Процессы не масштабируются вместе с бизнесом'
    },
    {
      icon: 'Target',
      title: 'Стратегия без реализации',
      description: 'Красивые планы остаются на бумаге. Нет связи между целями и ежедневной работой'
    },
    {
      icon: 'TrendingDown',
      title: 'KPI, которые не работают',
      description: 'Метрики есть, но они не мотивируют команду и не влияют на финансовый результат'
    }
  ];

  const methodology = [
    { icon: 'Lightbulb', title: 'Стратегия', step: '01' },
    { icon: 'GitBranch', title: 'Процессы', step: '02' },
    { icon: 'Target', title: 'KPI', step: '03' },
    { icon: 'Users', title: 'Команда', step: '04' }
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
      forWho: 'Для быстрого старта и понимания точек роста',
      cta: 'Заказать аудит',
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
      forWho: 'Для создания прозрачной и справедливой системы оценки',
      cta: 'Внедрить KPI',
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
      forWho: 'Для фундаментального изменения работы компании',
      cta: 'Обсудить трансформацию',
      icon: 'Rocket'
    }
  ];

  const additionalServices = [
    {
      icon: 'MonitorSmartphone',
      title: 'Цифровизация управления',
      description: 'Закрепите результат в данных. Создадим для вас единую систему контроля с помощью дашбордов и автоматизации',
      features: [
        'Разработка дашбордов KPI в Power BI/Tableau',
        'Автоматизация отчетности',
        'Интеграция с HR-IT системами'
      ]
    },
    {
      icon: 'Users',
      title: 'Развитие руководителей',
      description: 'Усилим вашу команду изнутри. Коучинг и фасилитация для ваших менеджеров',
      features: [
        'Коучинг топ-команды',
        'Фасилитация стратегических сессий',
        'Экспертная оценка «Тень руководителя»'
      ]
    },
    {
      icon: 'RefreshCw',
      title: 'Постоянная поддержка',
      description: 'Станьте увереннее в завтрашнем дне. Возьмите на аутсорсинг управление операционной эффективностью',
      features: [
        'Регулярный мониторинг KPI',
        'Оперативные консультации',
        'Работа с гипотезами и инициативами'
      ]
    }
  ];

  const targetAudience = [
    {
      icon: 'Building2',
      title: 'Компании от 50 до 500+ сотрудников',
      description: 'В ритейле, IT, услугах, производстве'
    },
    {
      icon: 'UserCircle',
      title: 'Собственники бизнеса',
      description: 'Которые не видят прямой связи между усилиями и финансовым результатом'
    },
    {
      icon: 'Flame',
      title: 'Топ-менеджеры',
      description: 'У которых уходит слишком много времени на «тушение пожаров»'
    },
    {
      icon: 'TrendingUp',
      title: 'HR-директоры',
      description: 'Которые хотят говорить с советом директоров на языке цифр и ROI'
    }
  ];

  const principles = [
    {
      icon: 'CheckCircle2',
      title: 'Работаем до результата',
      description: 'Не уходим, пока ваша команда не работает по-новому'
    },
    {
      icon: 'DollarSign',
      title: 'Фиксированная стоимость',
      description: 'Вы знаете итоговую цену до начала работ'
    },
    {
      icon: 'Handshake',
      title: 'Погружаемся в команду',
      description: 'Мы не сторонние советники, мы часть вашей команды на время проекта'
    },
    {
      icon: 'GraduationCap',
      title: 'Передаем знания',
      description: 'Обучаем ваших руководителей, чтобы изменения остались навсегда'
    }
  ];

  const caseStudy = {
    title: 'HR-аналитика и бюджетирование для ритейл-сети 12 STOREEZ',
    challenge: 'Построить прозрачную систему управления эффективностью и затратами на персонал',
    solution: 'Внедрение системы KPI и дашбордов для HR с интеграцией в систему бюджетирования',
    results: [
      { metric: 'Снижение стоимости найма', value: '18%' },
      { metric: 'Точность прогноза ФОТ', value: '97%' },
      { metric: 'Экономия времени HR-команды', value: '25 часов/нед' }
    ],
    image: 'https://cdn.poehali.dev/projects/9735a629-15d1-443e-a785-fd792e73a556/files/17084de2-b3ab-4330-a7fd-7f734e32e272.jpg'
  };

  const blogPosts = [
    {
      title: '5 признаков того, что ваша компания переросла операционную систему',
      date: '5 ноября 2024',
      category: 'Операционка',
      readTime: '7 мин'
    },
    {
      title: 'Как считать ROI на персонал: инструкция для собственника',
      date: '28 октября 2024',
      category: 'HR-аналитика',
      readTime: '10 мин'
    },
    {
      title: 'KPI, которые убивают мотивацию, и как это исправить',
      date: '20 октября 2024',
      category: 'Мотивация',
      readTime: '8 мин'
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
                onClick={() => scrollToSection('for-who')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Для кого
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Кейсы
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Блог
              </button>
              <Button onClick={() => scrollToSection('contact')} size="sm">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Ваш бизнес вырос.{' '}
              <span className="text-primary">А система управления — нет?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Мы строим операционные системы, которые позволяют компаниям масштабироваться без
              хаоса. От стратегии до KPI каждого сотрудника.
            </p>
            <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
              Получить бесплатную диагностику операционной системы
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className="border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={problem.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{problem.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-3xl p-12 mb-20 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Наша методология</h2>
              <p className="text-muted-foreground">
                Комплексный подход от стратегии до внедрения
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {methodology.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary/10 mb-2">{step.step}</div>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name={step.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  {index < methodology.length - 1 && (
                    <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2">
                      <Icon name="ArrowRight" size={24} className="text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground border border-primary/20 animate-scale-in">
            <CardContent className="p-12 text-center">
              <Badge variant="secondary" className="mb-4 text-primary">
                Формат работы
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Интенсив-внедрение</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Не отчет, а работающая система за 2-8 недель. Мы погружаемся в вашу компанию и не
                уходим, пока результат не достигнут.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Не разрозненные советы, а комплексное решение
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите формат работы, который решит вашу задачу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-card/50 backdrop-blur-sm ${
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
                    <span className="text-primary font-semibold">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-4">
                      <span className="font-semibold">Кому подходит:</span> {service.forWho}
                    </p>
                    <Button className="w-full" variant={service.popular ? 'default' : 'outline'}>
                      {service.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-dashed border-primary/20 animate-fade-in bg-card/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl font-bold mb-3">Нужно больше, чем стандартный пакет?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Каждый бизнес уникален. Соберите решение под свои задачи, добавив дополнительные
                опции.
              </p>
              <Button size="lg" variant="outline">
                Собрать индивидуальное решение
                <Icon name="Puzzle" size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="additional" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Дополнительные возможности
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Решим задачу любой сложности</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл экспертизы для закрепления результата и развития вашей команды
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="for-who" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Мы приносим максимальную ценность, когда ваш бизнес в «ловушке роста»
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {targetAudience.map((audience, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={audience.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{audience.title}</CardTitle>
                      <CardDescription className="text-base">{audience.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="philosophy" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Наша философия
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Консалтинг, который заканчивается результатом, а не отчетом
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name={principle.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">{principle.title}</CardTitle>
                  <CardDescription className="text-sm">{principle.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Кейс
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Проверенный результат</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in bg-card/50 backdrop-blur-sm border border-border">
            <div className="grid md:grid-cols-2">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-6">{caseStudy.title}</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1">ЗАДАЧА</p>
                    <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1">РЕШЕНИЕ</p>
                    <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-xs font-semibold mb-4">РЕЗУЛЬТАТЫ</p>
                  <div className="space-y-4">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm">{result.metric}</span>
                        <span className="text-2xl font-bold text-primary">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Блог
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Полезные материалы</h2>
            <p className="text-lg text-muted-foreground">
              Делимся экспертизой в операционном управлении
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Готовы сделать вашу компанию управляемой?
            </h2>
            <p className="text-lg text-muted-foreground">
              Выделите 30 минут для бесплатной диагностики операционной системы
            </p>
          </div>

          <Card className="animate-scale-in bg-card/50 backdrop-blur-sm border border-border">
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
                  <label className="text-sm font-medium">Расскажите о вашей задаче</label>
                  <Textarea
                    placeholder="Что вас беспокоит в управлении компанией прямо сейчас?"
                    rows={4}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Получить бесплатную диагностику
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Полное КП предоставляется после проведения встречи
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-2 gap-6 text-center">
            <Card>
              <CardContent className="p-6">
                <Icon name="Phone" size={28} className="mx-auto text-primary mb-3" />
                <p className="font-medium mb-1">Телефон</p>
                <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Icon name="Mail" size={28} className="mx-auto text-primary mb-3" />
                <p className="font-medium mb-1">Email</p>
                <p className="text-sm text-muted-foreground">info@codconsulting.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-7xl">
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
                <li className="hover:text-primary cursor-pointer transition-colors">Операционный аудит</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Система KPI</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Операционная трансформация</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Кейсы</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Блог</li>
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