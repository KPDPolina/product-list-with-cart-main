Fragments

1. What problem do React Fragments (<>...</>) solve compared to wrapping elements in a <div>?
React Fragments нужен для оборачивания нескольких дом элементов в 1 единственный елемент. Это необходимо при return в компоненте, так как он может возвращать только 1 эелемент. У React Fragments нет никаких свойств по умолчанию в отличии от <div> и он исчезает при рендере страницы.
2. Can Fragments accept props like className or key? Why or why not?
Я считаю что нет, так как Fragments созданы исключительно для оборачивания возвращаемой компонентом верстки.
3. What is the difference between <>...</> and <React.Fragment>...</React.Fragment>?
Никакой, это одно и то же, только записано поразному.
4. When rendering lists, why might you use <React.Fragment key={id}>...</React.Fragment> instead of an extra <div>?
Для показания реакту, что это абсолютно разные дом-элементы.
⸻

Controlled vs. Uncontrolled Components 
5. What is the difference between a controlled and an uncontrolled component in React?
controlled component - это компоненты, у которых есть некие ограничения изменения состояния, прописаные поверх дефолтных. uncontrolled component - соответственно не имеют таких ограничений.
6. Give an example of a controlled input field. What advantages does it provide?
controlled input field - поле с валидацией или с типом вводимой информации(например только текстовое или только цифровое поле).
7. Why might uncontrolled components be preferable in some cases?
Иногда нам не нужны ограничения на изменение состояния компонента.
8. How do you access the current value of an uncontrolled input?
через e.target.value
9. What role does defaultValue play in uncontrolled inputs?
Если у этого компонента небыло изменений состояния, то его e.target.value неопределено. defaultValue ставят, что бы небыло ошибок при дальнейшей обработке данного инпута.
⸻

Performance Optimization

10. What does React.memo do, and when should you use it?
React.memo позволяет не обновлять значение переменной при перерендере компонента, если состояния от которых зависит переменная не обновились.
11. How is React.PureComponent different from a normal Component?
React.PureComponent оптимизируется самим реактом. В нем нет useEffect.
12. What is shouldComponentUpdate, and how can it improve performance?

13. What’s the difference between React.memo and PureComponent?

14. How does code splitting with React.lazy and Suspense improve performance?

15. What’s the fallback prop in Suspense, and how is it used?

⸻

Advanced Patterns

16. Explain the Render Props pattern with an example use case.

17. How do Higher-Order Components (HOCs) differ from Render Props? 

18. What are Compound Components, and when would you prefer them?

18. What are some drawbacks of using HOCs?

19. Why have custom hooks largely replaced many use cases for HOCs and Render Props?

⸻

CSS Modules

21. What are CSS Modules, and how do they prevent class name collisions?
CSS Modules это файлы со стилями, который импортируются в определенные компоненты и стилизуют только их. Благодаря им возможно иметь одинаковые названия классов в разных компонентах и при этом иметь разные стили, которые никак не конфликтуют и не перекрывают друг друга.
22. How do you import and use a class from a CSS Module in a React component?

23. What is the difference between style.module.css and a global style.css?
глобальный style.css действует на весь дом. style.module.css - только на компонент в который импортирован.
⸻

Styled-Components

24. What are styled-components, and how do they differ from CSS Modules?

25. How do styled-components handle dynamic props for conditional styling?

26. What benefits do styled-components provide in terms of scoping and theming?

⸻

SASS/LESS

27. How do you integrate SASS or LESS into a React project created with Create React App (CRA)?

28. What advantages does SASS offer compared to plain CSS in React projects?
Проще структурировать стили для вложеных элементов. Есть поддержка разного вида вложеных стилей. Например .castom-class{ &-item{} }
29. Explain the difference between nesting in SASS vs. using CSS Modules.
Например в SASS можно использовать .castom-class{ стили для всех у кого есть класс "castom-class" &-item{ стили для всех у кого есть класс "castom-class-item"} } В CSS так не получится. необходимо писать отдельно .castom-class{} и .castom-class-item{}
⸻

General Styling Strategies

30. Compare and contrast CSS Modules, styled-components, and SASS/LESS. When would you choose each?
