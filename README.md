# aston-rick-morty
### **1 уровень (необходимый минимум)**

- [ ]  Реализованы **Требования к функциональности**, описанные в прикрепленном документе в гугл классе.
- [ ]  Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**.

**React**

- [ ]  Пишем функциональные компоненты c хуками в приоритете над классовыми. (Классовый скорее всего у вас будет только один в котором будет реализация Error Boundaries. Это не значит, что можно забить на теорию классовых компонентов. Нет. Методы жизненного цикла - очень частый вопрос на выходном интервью. Прочую инфу по классовым компонентам тоже стоит пропустить через себя и усвоить)
- [ ]  Есть разделение на умные и глупые компоненты (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0, перевод - https://habr.com/ru/post/266559/. Это пункт - лишь общая рекомендация. Обратите внимание на Update from 2019 по первой ссылке от Дэна. Поэтому не относитесь к этому пункту слишком серьезно. Он тут для того, чтобы вы знали, что существуют такие термины в комьюнити, и не растерялись на собесе, если в каком-то вопросе они прозвучат)
- [ ]  Есть рендеринг списков (https://ru.reactjs.org/docs/lists-and-keys.html)
- [ ]  Реализована хотя бы одна форма (https://ru.reactjs.org/docs/forms.html). Если используете UI kit библиотеку или спец. библиотеку построения форм (например, [Formik](https://formik.org/) или что-то другое), то этот пункт зачтется.
- [ ]  Есть применение Контекст API (https://ru.reactjs.org/docs/context.html). Да, вроде бы у нас есть ридакс, зачем тогда нам контекст? Помните, что мы лишь трогаем и играемся со всякой апишкой реакта. Да и использование этих инструментов одновременно - это дискуссионный вопрос. Где-то это уместно, где-то не особо.
- [ ]  Есть применение предохранителя (https://ru.reactjs.org/docs/error-boundaries.html). Можно и свой написать, можно и пакет [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) заюзать. Главное, чтобы вы понимали что это и зачем.
- [ ]  Есть хотя бы один кастомный хук (https://ru.reactjs.org/docs/hooks-custom.html)
- [ ]  Хотя бы несколько компонентов используют PropTypes (https://ru.reactjs.org/docs/typechecking-with-proptypes.html). Если пишите на TS, всё равно добавьте на 2, 3 компонента PropTypes, чтобы закрыть этот пункт.
- [ ]  Поиск не должен триггерить много запросов к серверу (https://ru.reactjs.org/docs/faq-functions.html#how-can-i-prevent-a-function-from-being-called-too-quickly-or-too-many-times-in-a-row)
- [ ]  Есть применение lazy + Suspense (https://ru.reactjs.org/docs/code-splitting.html#route-based-code-splitting)

**Redux**

- [ ]  Используем Modern Redux with Redux Toolkit (https://redux.js.org/tutorials/fundamentals/part-8-modern-redux)
- [ ]  Используем слайсы (https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice)
- [ ]  Есть хотя бы одна кастомная мидлвара (https://redux.js.org/understanding/history-and-design/middleware)
- [ ]  Используется RTK Query (https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics)
- [ ]  Используется Transforming Responses (https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#transforming-responses). Если у вас такая апишка, что особо “готовить” в данных нечего, то будет достаточно простой функции, которая залезет в свойство ответа от сервера. Что-то типа response ⇒ response.results, в зависимости как ваша апишка данные вам отдаёт. Это лишь пример. Главное в этом пункте знать, что есть такая вот штука - transformResponse.