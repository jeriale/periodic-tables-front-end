// React + Hooks
import React from "react";

// React Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

/**
 * Defines the `Button` options for the `ReservationsListHeader` component.
 * @param changeDate
 *  a function used for lifting state to `dateSetting` in the `Layout` component.
 * @returns {JSX.Element}
 */
function ReservationsListOptions(props) {
    return (
        <Row className="p-3">
            <Col xs={12} className="d-flex justify-content-between p-0">
                <ButtonGroup className="w-100 mr-3">
                    <Button
                        variant="dark"
                        className="border border-list-bg"
                        style={{ fontSize: "1.2rem" }}
                        onClick={() => props.changeDate(-1)}
                    >
                        <i className="ri-arrow-left-s-line" />
                    </Button>
                    <Button
                        variant="dark"
                        className="border border-list-bg"
                        style={{ fontSize: "1.2rem" }}
                        onClick={() => props.setDateSetting(props.currentDate)}
                    >
                        <i className="ri-home-line" />
                    </Button>
                    <Button
                        variant="dark"
                        className="border border-list-bg"
                        style={{ fontSize: "1.2rem" }}
                        onClick={() => props.changeDate(1)}
                    >
                        <i className="ri-arrow-right-s-line" />
                    </Button>
                </ButtonGroup>
                <Button
                    variant="dark"
                    className="border border-list-bg"
                    style={{ fontSize: "1.2rem" }}
                    href={`/reservations/new`}
                >
                    <i className="ri-add-line" />
                </Button>
            </Col>
        </Row>
    );
}

export default ReservationsListOptions;