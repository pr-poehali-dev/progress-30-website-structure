import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Course Modules */}
      <section className="py-20 bg-gray-50">
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
      <section className="py-20 bg-white">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 font-['Montserrat']">
            Готовы начать свой путь к успеху?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-['Open_Sans']">
            Присоединяйтесь к курсу "Прогресс 3.0" и начните трансформацию уже
            сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              Записаться сейчас
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
