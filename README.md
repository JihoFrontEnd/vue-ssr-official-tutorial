# vue-ssr-official-tutorial
https://vuejs.org/guide/scaling-up/ssr.html

> ### PENDING

뭔가 적당하게 여러 시도를 해봤지만,
Node.js 만으로 Vue.js 까지 제공하는 방법은 생각보다 까다롭다.

가장 문제가 되는 것은 Node에서 생성한 데이터를 Vue로 넘기는 것인데,
`useSSRContext` 동작의 정확한 플로우를 잡아낼 수 없었다.

두 번째로 문제가 되는 것은 SFC 지원 여부인데,
이 부분은 아마 webpack을 다뤄야 한다는 점에서부터 진입장벽이 존재한다.
예전에 loader를 다루면서 어찌저찌 sass 매핑하는 것까지는 한 기억이 가물가물하게 존재하지만,
전역으로 Vue Store 다룰 것을 생각하면 많이 난감해진다.

그러니까 stateless하게 관리해야 하는데, 그걸 위해 해야 할 일이 너무 많다.
Composition API가 제대로 동작하는 것은 확인이 됐는데, 어휴.
결국 공식문서에서 언급한 것처럼 Nuxt.js, Quasar, Vite 등의 프레임워크를 사용하는 것이 마땅한 것 같다.
