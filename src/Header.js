import searchAnime from "./searchAnime";

const Header = () => {
    return (
        <header>
            <h1 className="title">Animanga Client</h1>
            <input type="text" name="search_query" id="search_query" />
            <button onClick={searchAnime}>Search</button>
            <svg xmlns="http://www.w3.org/2000/svg" width={'40px'} height={'40px'} viewBox="0 0 24 24">
                <path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
            </svg>
            <p className="username">Username</p>
        </header>
    );
};

export default Header;