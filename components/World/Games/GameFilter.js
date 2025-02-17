import Button from "@/components/common/Button";
import "./filterGame.scss";

const GameFilter = ({ onClose }) => {
  return (
    <div className="filter-container">
      <div className="filter-header">
        <button onClick={onClose} className="return-button">
          return
        </button>
        <h3 className="header">filtering</h3>
        <button className="reset-button">reset</button>
      </div>
      <div className="filter-body">
        <div className="filter-content">
          <label>Date</label>
          <input type="date" className="date" />
        </div>
        <div className="select-content">
          <div className="filter-content hour">
            <label>hour</label>
            <input type="time" />
          </div>
          <div className="filter-content location">
            <label>location</label>
            <select>
              <option>Select a location</option>
            </select>
          </div>
        </div>
        <div className="filter-content">
          <label>by specific player</label>
          <input type="search" placeholder="Search for a player..." />
        </div>
      </div>
      <div className="filter-footer">
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default GameFilter;
