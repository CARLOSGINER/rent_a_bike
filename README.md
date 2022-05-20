# RENT A BIKE APP

:octocat: [View live App here!]()


> **AUTHOR**

      Carlos Giner

> **APPLIED TECHNOLOGIES AND MODULES**

      - REACT / REACT-ROUTER
      - REDUX / SAGAS
      - CSS / BOOTSTRAP / REACT-BOOTSTRAP
      - I18NEXT
      - AXIOS


> **NOTES OF IMPLEMENTATION**

The solution to the requirements, was a SPA (single page application) for a faster user experience. The design pattern of the base code, could be considered as a container-presentational components. In that the business logic is mostly decoupled from the view, or presentation, and lead to easier to refactor, and to reuse components. 

The state management, was delegate to redux, in a classic folder structuring by concerns. Also include the sagas module middleware, to manage all the async side effects, like API calls. 

The goal was to make the structure as modularized as possible, to let the project scale, in an efficient way. Thats why I rely on util classes, customHooks, etc. All to achive a separation of concerns, and trying to follow SOLID principles.

__________________________________________________________________________________________________________________________________________________________________________________
Carlos Giner © copyright 2022
