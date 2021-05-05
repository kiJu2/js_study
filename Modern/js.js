function getHTML(){
  return(<li>
    Hello Miracle
  </li>)
}
// 이건 왜 안될까? React에서는 되는데.
// => 사실 React에서 개발한 js는 jsx문법 체계를 갖춘다. create-react 모듈에서 jsx를 js로 converting해주기 때문에 바닐라 js에서는 허용되지 않는 문법.

(function main(){
  const here = document.querySelector('.here>ul');
  console.log(here);
  here.appendChild(getHTML());
})();