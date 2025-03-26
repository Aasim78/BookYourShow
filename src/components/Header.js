import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`);
    // Replace this console.log with your actual search logic.
  };

  return (
    <header className="header bg-dark text-white py-3 shadow">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Title */}
        <h1 className="header-title m-0 fs-3">BookYourShow</h1>

        {/* Search and Sign-In Section */}
        <div className="header-right d-flex align-items-center">
          {/* Search Input and Button */}
          <input
            type="text"
            className="form-control me-2 header-search"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search"
          />
          <Button
            variant="outline-light"
            className="me-2 search-button"
            onClick={handleSearch}
          >
            Search
          </Button>
          {/* Sign-In Button */}
          <Button variant="outline-light" className="header-button">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
