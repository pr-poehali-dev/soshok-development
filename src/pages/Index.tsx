import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const mockArticles: Article[] = [
  {
    id: 1,
    title: "Современные тренды в веб-дизайне 2024",
    excerpt: "Исследуем главные направления в дизайне интерфейсов, которые определяют будущее веба.",
    author: "Анна Петрова",
    date: "15 янв 2024",
    readTime: "5 мин",
    category: "Дизайн",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "React 18: Новые возможности для разработчиков",
    excerpt: "Разбираем ключевые нововведения React 18 и их влияние на современную разработку.",
    author: "Дмитрий Козлов",
    date: "12 янв 2024",
    readTime: "8 мин",
    category: "Разработка",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Психология пользователей в UX дизайне",
    excerpt: "Как понимание поведения пользователей помогает создавать более эффективные интерфейсы.",
    author: "Елена Морозова",
    date: "10 янв 2024",
    readTime: "6 мин",
    category: "UX",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Оптимизация производительности веб-приложений",
    excerpt: "Практические советы по ускорению загрузки и улучшению отзывчивости интерфейсов.",
    author: "Сергей Волков",
    date: "8 янв 2024",
    readTime: "10 мин",
    category: "Производительность",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Будущее искусственного интеллекта в дизайне",
    excerpt: "Как ИИ меняет подходы к созданию дизайна и автоматизирует рутинные процессы.",
    author: "Мария Кузнецова",
    date: "5 янв 2024",
    readTime: "7 мин",
    category: "ИИ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Мобильная разработка: тренды 2024",
    excerpt: "Обзор главных направлений в мобильной разработке и новых подходов к созданию приложений.",
    author: "Игорь Смирнов",
    date: "3 янв 2024",
    readTime: "9 мин",
    category: "Мобильная разработка",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
  }
];

export default function Index() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Дизайн', 'Разработка', 'UX', 'Производительность', 'ИИ', 'Мобильная разработка'];

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Современный<br />
              <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Блог
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              Исследуем технологии, дизайн и инновации, которые формируют будущее
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Читать статьи
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8 animate-scale-in">
            <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Поиск по статьям, авторам, темам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg border-2 border-primary/20 focus:border-primary transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-primary text-white transform scale-105' 
                    : 'hover:bg-primary/10 hover:border-primary'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Card 
              key={article.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    className="bg-white/90 text-primary border-0 font-semibold px-3 py-1"
                  >
                    {article.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Icon name="User" size={16} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={16} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={16} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105"
                >
                  Читать статью
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <Icon name="Search" size={64} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-2xl font-bold text-muted-foreground mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Современный Блог</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Место, где технологии встречаются с творчеством, а идеи превращаются в инновации
            </p>
            <div className="flex justify-center space-x-6">
              <Icon name="Github" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
              <Icon name="Twitter" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
              <Icon name="Linkedin" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
              <Icon name="Mail" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}