# aston-rick-morty
### **1 уровень (необходимый минимум)**

- [x]  Реализованы **Требования к функциональности**, описанные в прикрепленном документе в гугл классе.

**React**

- [x]  Пишем функциональные компоненты c хуками в приоритете над классовыми. (Классовый скорее всего у вас будет только один в котором будет реализация Error Boundaries. (https://github.com/HolodcovVasily/aston-rick-morty/blob/main/src/components/ErrorBoundaries/ErrorBoundaries.tsx)
- [x]  Есть разделение на умные и глупые компоненты (глупые компоненты: https://github.com/HolodcovVasily/aston-rick-morty/blob/main/src/components/Footer/Footer.tsx https://github.com/HolodcovVasily/aston-rick-morty/blob/main/src/components/Logo/Logo.tsx  умные компоненты: https://github.com/HolodcovVasily/aston-rick-morty/blob/main/src/components/CharacterCard/CharacterCard.tsx)
- [x]  Есть рендеринг списков (https://github.com/HolodcovVasily/aston-rick-morty/blob/main/src/components/CharactersList/CharactersList.tsx)
- [x]  Реализована хотя бы одна форма (https://github.com/HolodcovVasily/aston-rick-morty/blob/main/src/components/Form/Form.tsx).
- [x]  Есть применение предохранителя (https://github.com/HolodcovVasily/aston-rick-morty/blob/main/src/components/ErrorBoundaries/ErrorBoundaries.tsx).
- [x]  Есть хотя бы один кастомный хук (https://github.com/HolodcovVasily/aston-rick-morty/tree/main/src/hooks)
- [x]  Поиск не должен триггерить много запросов к серверу (https://github.com/HolodcovVasily/aston-rick-morty/blob/main/src/hooks/debounce.ts)
- [x]  Есть применение lazy + Suspense ([https://ru.reactjs.org/docs/code-splitting.html#route-based-code-splitting](https://github.com/HolodcovVasily/aston-rick-morty/blob/main/src/routes/routesConfig.tsx))

**Redux**

- [x]  Используем Modern Redux with Redux Toolkit (https://github.com/HolodcovVasily/aston-rick-morty/blob/main/src/store/index.ts)
- [x]  Используем слайсы (https://github.com/HolodcovVasily/aston-rick-morty/tree/main/src/store/slices)
- [x]  Используется RTK Query (https://github.com/HolodcovVasily/aston-rick-morty/blob/main/src/store/rickMorty/rickMorty.api.ts)
- [x]  Используется Transforming Responses (https://github.com/HolodcovVasily/aston-rick-morty/blob/b78bbb3d2fd1559c9e1635c0da83c38928864dd8/src/store/rickMorty/rickMorty.api.ts#L51C3-L53C9)
