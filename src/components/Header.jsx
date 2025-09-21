const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="col_40">
          <img className="padding_logo margin_top_10" src="/img/dc-logo1.png" alt="logo" />
        </div>
        <div className="text_right padding_list_header margin_left_10">
          <div className="col_60 gap">
            <ul>
              <li><a href="#">CHARACTERS</a></li>
              <li><a href="#">COMICS</a></li>
              <li><a href="#">MOVIES</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">GAMES</a></li>
              <li><a href="#">COLLECTIBLES</a></li>
              <li><a href="#">VIDEOS</a></li>
              <li><a href="#">FANS</a></li>
              <li><a href="#">NEWS</a></li>
              <li><a href="#">SHOP</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;