import React, { Component } from 'react';
import './App.css';
import { Alert, Table } from 'reactstrap';

import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = { nameList: props.nameList };
    // this.
  }

  render() {
    const nameList = this.state.nameList.map(function (p) {
      var { name, lastname, misc } = p;
      return (
        <tr key={name + lastname}>
          <td>{name}</td>
          <td>{lastname}</td>
          <td>{misc}</td>
          <td>
            <Button a="#" color="info">ดูรายละเอียด</Button>
          </td>
        </tr>
      )
    });
    return (
      <div>

        <Alert color="info" id="alert-box">
          คุณสามารถค้นหาข้อมูลอาจารย์ของ รร. เตรียมอุดมศึกษาได้ <br />
          โดยพิมพ์ข้อมูลที่ต้องการค้นหาในช่อง ชื่อ-นามสกุล ด้านล่าง แล้วกดปุ่ม "ค้นหา" หรือ "enter"
        </Alert>

        <Form className="staff-search-form">
          <legend>ค้นหา</legend>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="searchName">ชื่อ</Label>
                <Input type="text" name="name" id="searchName" placeholder="" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="searchLastname">นามสกุล</Label>
                <Input type="text" name="lastname" id="searchLastname" placeholder="" />
              </FormGroup>
            </Col>
          </Row>
        </Form>

        <Table striped>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Misc</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {nameList}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PeopleList;
