// React + Hooks
import React from "react";

// React Bootstrap Components
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

/**
 * Defines the menu for this application.
 * @returns {JSX.Element}
 */
function Menu() {

  const globalMenuOptions = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    // {
    //   name: "Search",
    //   url: "/search"
    // },
    {
      name: "New Reservation",
      url: "/reservations/new",
    },
    {
      name: "New Table",
      url: "/tables/new",
    }
];

  /**
   * Defines the menu that displays on all pages.
   */
  const globalPageOptions = globalMenuOptions.map((item, index) => (
    <Dropdown.Item key={index} href={item.url}>
      {item.name}
    </Dropdown.Item>
  ));

  return (
    <>
      <Col xs={4} className="d-flex align-items-center">
        <Dropdown>
          <Dropdown.Toggle
            variant="dark"
            className="mr-4"
            style={{ fontSize: "1.5rem" }}
          >
            <i className="ri-grid-fill" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {globalPageOptions}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </>
  );
}

export default Menu;
