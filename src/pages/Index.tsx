import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" className="text-blue-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
                Прогресс 3.0
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                О курсе
              </a>
              <a
                href="#modules"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Модули
              </a>
              <a
                href="#results"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Результаты
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-medium">
                  Курс для женщин 18-50 лет
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold font-['Montserrat'] leading-tight">
                  Прогресс 3.0
                </h1>
                <p className="text-xl text-blue-100 max-w-lg font-['Open_Sans']">
                  Трансформируйте свою жизнь с помощью проверенной системы
                  личностного роста
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-medium">
                  Записаться на курс
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  src="/img/fdfecd99-1972-418f-9637-c9b92751f9ec.jpg"
                  alt="Успешная женщина"
                  className="rounded-xl w-full h-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              О курсе
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-open-sans">
              Прогресс 3.0 - это комплексная система трансформации, которая
              поможет вам достичь любых целей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Icon
                name="Target"
                className="text-blue-600 mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-semibold mb-2 font-montserrat">
                Четкие цели
              </h3>
              <p className="text-gray-600 font-open-sans">
                Научитесь правильно ставить и достигать цели
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Icon
                name="Users"
                className="text-blue-600 mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-semibold mb-2 font-montserrat">
                Поддержка
              </h3>
              <p className="text-gray-600 font-open-sans">
                Сообщество единомышленников и менторов
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Icon
                name="Award"
                className="text-blue-600 mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-semibold mb-2 font-montserrat">
                Результат
              </h3>
              <p className="text-gray-600 font-open-sans">
                Гарантированный результат за 90 дней
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modules" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
              Модули курса
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Open_Sans']">
              Структурированная программа для достижения ваших целей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-['Montserrat']">
                  Модуль 1
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">Постановка целей</h3>
                <p className="text-gray-600 mb-4">
                  Определите свои истинные цели и создайте четкий план действий
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="CheckCircle"
                      className="w-4 h-4 text-green-500"
                    />
                    <span className="text-sm">Техники визуализации</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      name="CheckCircle"
                      className="w-4 h-4 text-green-500"
                    />
                    <span className="text-sm">Планирование по SMART</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-['Montserrat']">
                  Модуль 2
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">
                  Личная эффективность
                </h3>
                <p className="text-gray-600 mb-4">
                  Повысьте продуктивность и научитесь управлять временем
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="CheckCircle"
                      className="w-4 h-4 text-green-500"
                    />
                    <span className="text-sm">Тайм-менеджмент</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      name="CheckCircle"
                      className="w-4 h-4 text-green-500"
                    />
                    <span className="text-sm">Техники концентрации</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-['Montserrat']">
                  Модуль 3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">
                  Отношения и коммуникация
                </h3>
                <p className="text-gray-600 mb-4">
                  Улучшите отношения и навыки общения
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="CheckCircle"
                      className="w-4 h-4 text-green-500"
                    />
                    <span className="text-sm">Эмоциональный интеллект</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      name="CheckCircle"
                      className="w-4 h-4 text-green-500"
                    />
                    <span className="text-sm">Конфликтология</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
              Результаты участниц
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Open_Sans']">
              Более 500 женщин уже изменили свою жизнь с помощью курса "Прогресс
              3.0"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg text-gray-600">Довольных участниц</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-lg text-gray-600">Достигли целей</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">3.0</div>
              <div className="text-lg text-gray-600">Версия курса</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Отзывы
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-open-sans">
              Истории успеха наших выпускниц
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                text: "За 90 дней я увеличила доходы в 2 раза и запустила собственный бизнес!",
              },
              {
                name: "Михаил Сидоров",
                text: "Курс помог мне систематизировать подход к целям и достичь невозможного.",
              },
              {
                name: "Елена Козлова",
                text: "Прогресс 3.0 изменил мою жизнь. Теперь я четко знаю, чего хочу и как этого достичь.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-blue-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold font-montserrat">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600 font-open-sans">
                  "{testimonial.text}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 font-montserrat">
            Готовы начать?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-open-sans">
            Присоединяйтесь к сотням людей, которые уже изменили свою жизнь с
            помощью курса Прогресс 3.0
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Записаться на курс
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold"
            >
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="TrendingUp" className="text-blue-400" size={24} />
                <h3 className="text-xl font-bold font-montserrat">
                  Прогресс 3.0
                </h3>
              </div>
              <p className="text-gray-400 font-open-sans">
                Курс для достижения целей и изменения жизни
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-montserrat">Навигация</h4>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors block font-open-sans"
                >
                  О курсе
                </a>
                <a
                  href="#modules"
                  className="text-gray-400 hover:text-white transition-colors block font-open-sans"
                >
                  Модули
                </a>
                <a
                  href="#results"
                  className="text-gray-400 hover:text-white transition-colors block font-open-sans"
                >
                  Результаты
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-montserrat">Контакты</h4>
              <div className="space-y-2">
                <p className="text-gray-400 font-open-sans">
                  Email: info@progress3.ru
                </p>
                <p className="text-gray-400 font-open-sans">
                  Телефон: +7 (999) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-montserrat">
                Социальные сети
              </h4>
              <div className="flex space-x-4">
                <Icon
                  name="Facebook"
                  className="text-gray-400 hover:text-white cursor-pointer"
                  size={24}
                />
                <Icon
                  name="Instagram"
                  className="text-gray-400 hover:text-white cursor-pointer"
                  size={24}
                />
                <Icon
                  name="Twitter"
                  className="text-gray-400 hover:text-white cursor-pointer"
                  size={24}
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-open-sans">
              &copy; 2024 Прогресс 3.0. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
