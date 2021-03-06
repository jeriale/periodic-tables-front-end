// React + Hooks
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// React Components
import ReservationsList from "../reservation/reservations-list/ReservationsList";
import TablesList from "../table/tables-list/TablesList";
import CreateReservationForm from "../reservation/reservation-form/CreateReservationForm";
import EditReservationForm from "../reservation/reservation-form/EditReservationForm";
import SeatReservationForm from "../reservation/reservation-form/SeatReservationForm";
import CreateTableForm from "../table/table-form/CreateTableForm";
import EditTableForm from "../table/table-form/EditTableForm";

// React Bootstrap Components
import Row from "react-bootstrap/Row";

/**
 * Defines the dashboard page.
 * @returns {JSX.Element}
 */
function Dashboard(props) {

  // let {
  //   currentDate,
  //   dateSetting,
  //   setDateSetting,
  //   currentTime,
  //   changeDate
  // } = props;

  return (
    <Row className="d-flex flex-column align-items-center flex-md-row justify-content-md-center align-items-md-start w-100">
      <Switch>
        <Route exact={true} path={"/dashboard"}>
          <TablesList {...props} />
          <ReservationsList {...props} />
        </Route>
        <Route exact={true} path={"/reservations"}>
          <Redirect to={"/dashboard"} />
        </Route>
        <Route exact={true} path={"/reservations/new"}>
          <CreateReservationForm {...props} />
        </Route>
        <Route exact={true} path={"/reservations/:reservationId/edit"}>
          <EditReservationForm {...props} />
        </Route>
        <Route exact={true} path={"/reservations/:reservationId/seat"}>
          <SeatReservationForm {...props} />
        </Route>
        <Route exact={true} path={"/tables"}>
          <Redirect to={"/dashboard"} />
        </Route>
        <Route exact={true} path={"/tables/new"}>
          <CreateTableForm />
        </Route>
        <Route exact={true} path={"/tables/:tableId/edit"}>
          <EditTableForm />
        </Route>
      </Switch>
    </Row>
  );
}

export default Dashboard;