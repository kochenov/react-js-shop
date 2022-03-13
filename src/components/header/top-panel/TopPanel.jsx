import style from "./top-panel.module.scss";

const TopPanel = () => {
  return (
    <div className={style.top_panel}>
      <div className={'container ' + style.wrap}>
        
          <div className={style.phone}><span tel="8(405)555-0128"> 8 (405) 555-01-28 </span> (круглосуточно)</div>
          <div>
            <ul className={style.items}>
              <li><a href="/">Доставка и возврат</a></li>
              <li><a href="/">Отслеживать заказ</a></li>
              <li><a href="/">Блог</a></li>
              <li><a href="/">Контакты</a></li>
            </ul>
          </div>
          <div className={style.right_column}>
            <div className={style.lang}>
              
              <a href="/"><img className={style.flag} src="/images/lang/flag-usa.svg" alt=""/> Eng / $</a>  <a href="/"> <img className={style.galka} src="/images/icon/galka.svg" alt="" /> </a> 
            </div>
            <div className={style.login}>
              <ul>
                <li> <a href="/"><img  src="/images/icon/Profile.svg" alt=""/> Вход</a></li>
                <li> <a href="/">Регистрация</a></li>
              </ul>  
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default TopPanel;
