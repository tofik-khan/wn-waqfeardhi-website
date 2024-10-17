import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "/components/Dropdown";

export default function Page() {
  const [age, updateAge] = useState(null);
  const [monthOfBirth, updateMonthOfBirth] = useState(null);

  const ageOptions = [
    { value: "2", label: "2 years old" },
    { value: "3", label: "3 years old" },
    { value: "4", label: "4 years old" },
    { value: "5", label: "5 years old" },
    { value: "6", label: "6 years old" },
    { value: "7", label: "7 years old" },
    { value: "8", label: "8 years old" },
    { value: "9", label: "9 years old" },
    { value: "10", label: "10 years old" },
    { value: "11", label: "11 years old" },
    { value: "12", label: "12 years old" },
    { value: "13", label: "13 years old" },
    { value: "14", label: "14 years old" },
    { value: "15", label: "15 years old" },
    { value: "16", label: "16 years old" },
  ];

  const monthOptions = [
    { value: "jan", label: "January" },
    { value: "feb", label: "February" },
    { value: "mar", label: "March" },
    { value: "apr", label: "April" },
    { value: "may", label: "May" },
    { value: "jun", label: "June" },
    { value: "jul", label: "July" },
    { value: "aug", label: "August" },
    { value: "sep", label: "September" },
    { value: "oct", label: "October" },
    { value: "nov", label: "November" },
    { value: "dec", label: "December" },
  ];

  const examMatrix = {
    2: {
      jan: "2 Years, First Half",
      feb: "2 Years, First Half",
      mar: "2 Years, First Half",
      apr: "2 Years, First Half",
      may: "2 Years, First Half",
      jun: "2 Years, First Half",
      jul: "No Test",
      aug: "No Test",
      sep: "No Test",
      oct: "No Test",
      nov: "N/A",
      dec: "N/A",
    },
    3: {
      jan: "3 Years, First Half",
      feb: "3 Years, First Half",
      mar: "3 Years, First Half",
      apr: "3 Years, First Half",
      may: "3 Years, First Half",
      jun: "3 Years, First Half",
      jul: "2 Years, Second Half",
      aug: "2 Years, Second Half",
      sep: "2 Years, Second Half",
      oct: "2 Years, Second Half",
      nov: "3 Years, Second Half",
      dec: "3 Years, Second Half",
    },
    4: {
      jan: "4 Years, First Half",
      feb: "4 Years, First Half",
      mar: "4 Years, First Half",
      apr: "4 Years, First Half",
      may: "4 Years, First Half",
      jun: "4 Years, First Half",
      jul: "3 Years, Second Half",
      aug: "3 Years, Second Half",
      sep: "3 Years, Second Half",
      oct: "3 Years, Second Half",
      nov: "4 Years, Second Half",
      dec: "4 Years, Second Half",
    },
    5: {
      jan: "5 Years, First Half",
      feb: "5 Years, First Half",
      mar: "5 Years, First Half",
      apr: "5 Years, First Half",
      may: "5 Years, First Half",
      jun: "5 Years, First Half",
      jul: "4 Years, Second Half",
      aug: "4 Years, Second Half",
      sep: "4 Years, Second Half",
      oct: "4 Years, Second Half",
      nov: "5 Years, Second Half",
      dec: "5 Years, Second Half",
    },
    6: {
      jan: "6 Years, First Half",
      feb: "6 Years, First Half",
      mar: "6 Years, First Half",
      apr: "6 Years, First Half",
      may: "6 Years, First Half",
      jun: "6 Years, First Half",
      jul: "5 Years, Second Half",
      aug: "5 Years, Second Half",
      sep: "5 Years, Second Half",
      oct: "5 Years, Second Half",
      nov: "6 Years, Second Half",
      dec: "6 Years, Second Half",
    },
    7: {
      jan: "7 Years, First Half",
      feb: "7 Years, First Half",
      mar: "7 Years, First Half",
      apr: "7 Years, First Half",
      may: "7 Years, First Half",
      jun: "7 Years, First Half",
      jul: "6 Years, Second Half",
      aug: "6 Years, Second Half",
      sep: "6 Years, Second Half",
      oct: "6 Years, Second Half",
      nov: "7 Years, Second Half",
      dec: "7 Years, Second Half",
    },
    8: {
      jan: "8 Years, First Half",
      feb: "8 Years, First Half",
      mar: "8 Years, First Half",
      apr: "8 Years, First Half",
      may: "8 Years, First Half",
      jun: "8 Years, First Half",
      jul: "7 Years, Second Half",
      aug: "7 Years, Second Half",
      sep: "7 Years, Second Half",
      oct: "7 Years, Second Half",
      nov: "8 Years, Second Half",
      dec: "8 Years, Second Half",
    },
    9: {
      jan: "9 Years, First Half",
      feb: "9 Years, First Half",
      mar: "9 Years, First Half",
      apr: "9 Years, First Half",
      may: "9 Years, First Half",
      jun: "9 Years, First Half",
      jul: "8 Years, Second Half",
      aug: "8 Years, Second Half",
      sep: "8 Years, Second Half",
      oct: "8 Years, Second Half",
      nov: "9 Years, Second Half",
      dec: "9 Years, Second Half",
    },
    10: {
      jan: "10 Years, First Half",
      feb: "10 Years, First Half",
      mar: "10 Years, First Half",
      apr: "10 Years, First Half",
      may: "10 Years, First Half",
      jun: "10 Years, First Half",
      jul: "9 Years, Second Half",
      aug: "9 Years, Second Half",
      sep: "9 Years, Second Half",
      oct: "9 Years, Second Half",
      nov: "10 Years, Second Half",
      dec: "10 Years, Second Half",
    },
    11: {
      jan: "11 Years, First Half",
      feb: "11 Years, First Half",
      mar: "11 Years, First Half",
      apr: "11 Years, First Half",
      may: "11 Years, First Half",
      jun: "11 Years, First Half",
      jul: "10 Years, Second Half",
      aug: "10 Years, Second Half",
      sep: "10 Years, Second Half",
      oct: "10 Years, Second Half",
      nov: "11 Years, Second Half",
      dec: "11 Years, Second Half",
    },
    12: {
      jan: "12 Years, First Half",
      feb: "12 Years, First Half",
      mar: "12 Years, First Half",
      apr: "12 Years, First Half",
      may: "12 Years, First Half",
      jun: "12 Years, First Half",
      jul: "11 Years, Second Half",
      aug: "11 Years, Second Half",
      sep: "11 Years, Second Half",
      oct: "11 Years, Second Half",
      nov: "12 Years, Second Half",
      dec: "12 Years, Second Half",
    },
    13: {
      jan: "13 Years, First Half",
      feb: "13 Years, First Half",
      mar: "13 Years, First Half",
      apr: "13 Years, First Half",
      may: "13 Years, First Half",
      jun: "13 Years, First Half",
      jul: "12 Years, Second Half",
      aug: "12 Years, Second Half",
      sep: "12 Years, Second Half",
      oct: "12 Years, Second Half",
      nov: "13 Years, Second Half",
      dec: "13 Years, Second Half",
    },
    14: {
      jan: "14 Years, First Half",
      feb: "14 Years, First Half",
      mar: "14 Years, First Half",
      apr: "14 Years, First Half",
      may: "14 Years, First Half",
      jun: "14 Years, First Half",
      jul: "13 Years, Second Half",
      aug: "13 Years, Second Half",
      sep: "13 Years, Second Half",
      oct: "13 Years, Second Half",
      nov: "14 Years, Second Half",
      dec: "14 Years, Second Half",
    },
    15: {
      jan: "15 Years, First Half",
      feb: "15 Years, First Half",
      mar: "15 Years, First Half",
      apr: "15 Years, First Half",
      may: "15 Years, First Half",
      jun: "15 Years, First Half",
      jul: "14 Years, Second Half",
      aug: "14 Years, Second Half",
      sep: "14 Years, Second Half",
      oct: "14 Years, Second Half",
      nov: "15 Years, Second Half",
      dec: "15 Years, Second Half",
    },
    16: {
      jan: "16 Years, First Half",
      feb: "16 Years, First Half",
      mar: "16 Years, First Half",
      apr: "16 Years, First Half",
      may: "16 Years, First Half",
      jun: "16 Years, First Half",
      jul: "15 Years, Second Half",
      aug: "15 Years, Second Half",
      sep: "15 Years, Second Half",
      oct: "15 Years, Second Half",
      nov: "16 Years, Second Half",
      dec: "16 Years, Second Half",
    },
  };

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col xs={12} className="py-2">
            <Dropdown
              label="On Oct 1st 2024, you will be:"
              options={ageOptions}
              defaultValue={false}
              onChange={(option) => updateAge(option.value)}
            />
          </Col>
          <Col xs={12} className="py-2">
            <Dropdown
              label="Which month were you born?"
              options={monthOptions}
              defaultValue={false}
              onChange={(option) => updateMonthOfBirth(option.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            If you were born in <strong>{monthOfBirth}</strong> and will be{" "}
            <strong>{age} years old</strong> on October 1<sup>st</sup> 2024:
            <br />
            You should prepare to give the exam on:&nbsp;
            <p
              className="p-5 text-center"
              style={{ border: "1px solid grey", borderRadius: "8px" }}
            >
              <strong>
                {age && monthOfBirth && examMatrix[age][monthOfBirth]}
              </strong>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
