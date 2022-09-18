import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../../containers/FiltersList/FiltersList";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { handleInput, searchTerms, handleFilters } = props;
  return (
    // links for routing
    <div className="navbar">
      <Link to="/punky-API" className="navbar__logo">
        Punk BEER
      </Link>
      <div className="navbar__links">
        <SearchBox
          label="Beer Name  "
          searchTerm={searchTerms}
          handleInput={handleInput}
        />
        <FiltersList handleFilters={handleFilters} />
      </div>
    </div>
  );
};

export default Nav;
